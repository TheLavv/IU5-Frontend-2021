import React, { useEffect } from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom';
import './Finder.css'
import normalizeUrl from '../../utils'
import { useActions } from '../../hooks/useActions';

function Finder(): JSX.Element {
    const history: any = useHistory();
    const match = useRouteMatch();
    const input = React.useRef<HTMLInputElement>(null);
    const cur_url: string = normalizeUrl(match.url);
    const {clearUser} = useActions();

    useEffect(() => {
        clearUser();
    })

    const findUser = () => {
        if (input.current !== null && input.current.value.trim().length > 0)
            history.push(`${cur_url}/userInfo/${input.current.value.trim()}`);
    };
    const enterPress = (e: any) => {
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