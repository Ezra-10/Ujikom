import React, { useState } from "react";
import axios from 'axios';

function Create({ fetchdata }) {
    const [task, setTask] = useState("");

    

    return (
        <div className="create_form">
            <input 
                type="text" 
                placeholder="Enter Task" 
                value={task}
                onChange={(e) => setTask(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create;