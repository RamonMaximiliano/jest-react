import React, { useState } from "react";
import axios from "axios";

type task = {
    id: number,
    title: string
}

export default function Tasks() {
    const [tasks, setTasks] = useState<Array<task>>([]);

    const handleClick =  async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        setTasks(data)
    }

    return <>
        <h1>My tasks</h1>
        {
            tasks.map((item: task) => {
                return <div style={{display: "flex"}}>
                    <p>ID: {item.id}</p>
                    <p>Title: {item.title}</p>
                </div>
            })
        }
        <button onClick={() => handleClick()}>Get Tasks</button>
    </>
}


/*

- Pegar os items e renderizar quando apertar no botão, usar Axios

https://jsonplaceholder.typicode.com/todos?_limit=10


*/