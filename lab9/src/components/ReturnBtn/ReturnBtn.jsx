import React from 'react'
import './ReturnBtn.css'

function ReturnBtn( {history, url} ) {
    const cur_url = url.slice(0, url.split('').lastIndexOf('/'));
    const goBack = () => {
        history.push(`${cur_url}/`);
    }
    return (
    <button className="returnBtn" onClick={goBack}>
        Go Back
    </button>
    );
}

export default ReturnBtn;