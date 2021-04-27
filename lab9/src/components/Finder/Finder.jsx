import React from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom';
import './Finder.css'
import normalizeUrl from '../../utils'

function Finder() {
    const history = useHistory();
    const match = useRouteMatch();
    const input = React.useRef(null);
    const cur_url = normalizeUrl(match.url);

    const findUser = () => {
        if (input.current.value.trim().length > 0)
            history.push(`${cur_url}/userInfo/${input.current.value.trim()}`);
    };
    const enterPress = (e) => {
        if(e.key === 'Enter')
            findUser();
    };

    return (
        <div className="finder">
            <span className="finder-header">Finder</span>
            <div className="finderBox">
                <span className="finderBox-text">Enter github login:</span>
                <input className="finderBox-input" type="text" ref={input} onKeyPress={enterPress}></input>
                <button className="finderBox-btn" onClick={findUser}>Find</button>
            </div>
        </div> 
    );
}

export default Finder;