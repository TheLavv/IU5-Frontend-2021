import React from 'react'
import './styles/Task.css'

function Task( {index, value, done, deleteTask, changeTask, toggleTask} ) {
    let textAreaStyle;
    if (done)
    {
        textAreaStyle = 'container-textarea-doneTask';
    }
    else
    {
        textAreaStyle = 'container-textarea';
    }
    return (
        <div className="container">
            <input id={index} type="checkbox" onClick={toggleTask} defaultChecked={done}/>
            <textarea className={textAreaStyle} id={'ta' + index} type="text" placeholder="Change your task" defaultValue={value} onBlur={changeTask}></textarea>
            <button className="container-button" id={index} onClick={deleteTask}>del</button>
        </div>
    )
}

export default Task;