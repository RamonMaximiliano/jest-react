import React, { useState } from "react";
import axios from "axios";
type task = {
    id: number,
    title: string
}

export function useFile() {
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

  return {
    id: tasks[0].id,
    title: tasks[0].title
  }
}