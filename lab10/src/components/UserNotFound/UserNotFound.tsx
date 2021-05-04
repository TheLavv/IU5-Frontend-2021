import './UserNotFound.css'
import ReturnBtn from '../ReturnBtn/ReturnBtn'
import { useHistory, useRouteMatch } from 'react-router';
import normalizeUrl from '../../utils'
import { useActions } from '../../hooks/useActions';
import { useEffect } from 'react';

function UserNotFound() {
    const history: any = useHistory();
    const match = useRouteMatch();
    const cur_url: string = normalizeUrl(match.url);
    const {clearUser} = useActions();
    
    useEffect(() => {
        clearUser();
    })


    return(
        <div className="page">
            <span className="page-header">Finder</span>
            <div className="page-content">
                User does not exist =(<br></br>    Please try again
            </div>
            <ReturnBtn history={history} url={cur_url} />
        </div>
    );
}

export default UserNotFound;