import React, { useEffect } from 'react'
import './styles/TODOList.css'
import Task from './Task'
import InputButton from './InputButton'

function TODOList() {
    const [tasks, setTasks] = React.useState([]);
    let newTaskArr = [];
    useEffect(() => {
        if (tasks.length === 0)
        {
            for (let i = 0, j = 0; true; i++)
            {
                if (j === localStorage.length / 3)
                    break;
                if (localStorage.getItem(`index${i.toString()}`) !== null)
                {
                    newTaskArr.push({index: localStorage.getItem(`index${i.toString()}`), value: localStorage.getItem(`value${i.toString()}`), done: Number(localStorage.getItem(`done${i.toString()}`))});
                    j++;
                }
            }
            setTasks(newTaskArr);
        }
    })
    const toggleTask = (event) => {
        let newArr = tasks.map((el) => {
            if (Number(el.index) === Number(event.target.id))
                el.done = el.done ^ 1;
            return el;
        });
        setTasks(newArr);
        UpdateStorage(newArr);
    }
    const UpdateStorage = (tasksArr) => {
        localStorage.clear();
        tasksArr.forEach((el) => {
            localStorage.setItem(`index${el.index}`, el.index);
            localStorage.setItem(`value${el.index}`, el.value);
            localStorage.setItem(`done${el.index}`, el.done);
        });
    }
    const changeTask = (event) => {
        localStorage.setItem(`value${(event.target.id)[2]}`, event.target.value);
    }
    const addNewTask = () => {
        const inputTextArea = document.getElementById('inputTextArea');
        let cur_ind = 0;
        Object.keys(localStorage).forEach((key) => {
            if (key[0] === 'i')
            {
                if (localStorage.getItem(key) >= cur_ind)
                    cur_ind = Number(localStorage.getItem(key)) + 1;
            }
        });
        if (inputTextArea.value !== "")
        {
            setTasks([...tasks, {index: cur_ind, value: inputTextArea.value, done: 0}]);
            UpdateStorage([...tasks, {index: cur_ind, value: inputTextArea.value, done: 0}]);
            inputTextArea.value = "";
        }
    }
    const deleteTask = (event) => {
        setTasks(tasks.filter((task) => Number(task.index) !== Number(event.target.id)));
        UpdateStorage(tasks.filter((task) => Number(task.index) !== Number(event.target.id)));
        window.location.reload();
    };
    return (
        <div className="page">
            <div className="page-header">TASK MANAGER</div>
            <div className="page-content">
                <p>
                    Add new or change old task!
                </p>
                <hr />
                <div className="page-content-input">
                    <textarea id="inputTextArea" type="text" placeholder="Enter new task"/>
                    <InputButton onClick={addNewTask}/>
                </div>
                <hr />
                {
                    tasks.map((el) => (
                        <Task index={el.index} value={el.value} done={el.done} deleteTask={deleteTask} changeTask={changeTask} toggleTask={toggleTask}/>
                    ))
                }
            </div>
        </div>
    );
}

export default TODOList;