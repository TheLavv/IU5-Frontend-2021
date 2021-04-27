import './UserNotFound.css'
import ReturnBtn from '../ReturnBtn/ReturnBtn'
import { useHistory, useRouteMatch } from 'react-router';
import normalizeUrl from '../../utils'

function UserNotFound() {
    const history = useHistory();
    const match = useRouteMatch();
    const cur_url = normalizeUrl(match.url);
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