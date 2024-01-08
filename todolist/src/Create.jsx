import React, { useState } from 'react'
import axios from 'axios';

function Create() {
    const [task, setTask] = useState('')
    const handleAdd = () => {
        if (task.trim() === '') {
            // Don't add an empty task
            return;
        }

        axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/add`, { task: task })
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="create_form">
            <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd} title='Add task'>Add</button>
        </div>
    );
}

export default Create;
