import React, { useEffect} from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import './UserInfo.css';
import normalizeUrl from '../../utils';
import ReturnBtn from '../ReturnBtn/ReturnBtn';
import loading from '../../assets/images/loading.png';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ParamsType } from '../../types/types'
import { useActions } from '../../hooks/useActions';

function UserInfo() {
    const history: any = useHistory();
    const match = useRouteMatch();
    const params: ParamsType = useParams();
    const cur_url: string = normalizeUrl(match.url);
    const user = useTypedSelector(state => state.user.user);
    const {fetchUser} = useActions();

    useEffect(() => {
        fetchUser(params.userName);
        // eslint-disable-next-line
    }, [cur_url, history, params])

    if (user === 404)
        history.push(`/userNotFound`);

    return (user !== null && user !== 404) ? (
        <div className="container">
            <span className="container-header">Finder</span>
            <div className="container-content">
                <div className="container-content-mainInfo">
                    <img className="container-content-mainInfo-avatar" src={user.avatar_url} alt="avatar"/>
                    <div className="container-content-mainInfo-text">
                        <a href={user.html_url} className="container-content-mainInfo-text-login">{user.login}</a>
                        <span className="container-content-mainInfo-text-name">{user.name}</span>
                        <span className="container-content-mainInfo-text-name">id: {user.id}</span>
                    </div>
                </div>
                <div className="container-content-additionalInfo">
                    <span className="container-content-additionalInfo-header">Info:</span>
                    <span className="container-content-additionalInfo-info">Followers: {user.followers}</span>
                    <span className="container-content-additionalInfo-info">Following: {user.following}</span>
                    <span className="container-content-additionalInfo-info">Created at: {user.created_at.replace('T', ' ').replace('Z', ' ')}</span>
                    <span className="container-content-additionalInfo-info">Public repos: {user.public_repos}</span>
                    <span className="container-content-additionalInfo-info">Type: {user.type}</span>
                </div>
            </div>
            <ReturnBtn history={history} url={cur_url.slice(0, cur_url.split('').lastIndexOf('/'))} />
        </div>
    ) : (
        <div className="container">
            <div className="container-header">
                Loading...
            </div>
            <img className="loadingGif" src={loading} alt="loading" />
        </div>
    );
};

export default UserInfo;