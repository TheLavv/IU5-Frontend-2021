import React, { useEffect, useState } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router';
import './UserInfo.css'
import normalizeUrl from '../../utils'
import ReturnBtn from '../ReturnBtn/ReturnBtn'
import loading from '../../images/Rainbow.gif'

function UserInfo() {
    const history = useHistory();
    const match = useRouteMatch();
    const userName = useParams();
    const cur_url = normalizeUrl(match.url);
    const [user, setUser] = useState();
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName.user}`)
        .then((data) => {
            if(data.status === 404)
            {
                history.push(`/userNotFound`);
                return null;
            }
            return (data.json());
        })
        .then((data) => {
            console.log(data);
            if (data)
                setUser(data);
        })
    }, [cur_url, history, userName])
    return user ? (
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