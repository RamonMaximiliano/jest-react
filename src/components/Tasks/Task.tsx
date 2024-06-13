import React, { useState } from "react";
import axios from "axios";
import './styles.css';

type task = {
    id: number,
    title: string
}

export default function Tasks() {
    const [tasks, setTasks] = useState<Array<task>>([]);

    const handleClick = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        setTasks(data)
    }
    let numero = Math.floor(Math.random() * 100)
    const item = {
        id: numero,
        title: "Hello there!"
    }
    function addTask() {
        setTasks(newOne => [...newOne, item])
    }
    return <>
        <div className="main-content">
            <h1>My tasks</h1>
            {
                tasks.map((item: task) => {
                    return <div style={{ display: "flex" }} key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Title: {item.title}</p>
                    </div>
                })
            }
            <button onClick={() => handleClick()}>Get Tasks</button>
            <button onClick={() => addTask()}>Add One</button>
            <input type="number" placeholder="NumberInput"/>
        </div>
    </>
}

