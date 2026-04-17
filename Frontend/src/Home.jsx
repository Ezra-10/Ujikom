import React, { useEffect, useState } from "react";
import './App.css';
import Create from "./Create";


function Home() {
    const [todos, setTodos] = useState([])

    return (
        <div className="home">
            <h1>Team Task Manager</h1>
            <Create />
            <div className="todo-list">

                <div className="no-record"><h2>No Tasks</h2></div>
            
            </div>

        </div>
    )

}

export default Home;