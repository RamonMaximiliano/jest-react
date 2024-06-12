import React, { useState } from "react";
import './styles.css';

export default function FirstTest({onClick}:{onClick:(n:number)=>void}){
    const [result, setResult] = useState<number>(0);
    const [valueA, setValueA] = useState<number>(0);
    const [valueB, setValueB] = useState<number>(0);
    const sum = (a: number, b: number) => {
        return setResult(a + b)
    }

    return <>
    <div className="main-content">
            <input type="number" onChange={e => setValueA(Number(e.target.value))} value={valueA}></input>
            <input type="number" onChange={e => setValueB(Number(e.target.value))} value={valueB}></input>
            <button onClick={() => sum(valueA, valueB)} style={{ color: "blue" }}>Calculate</button>
            <button onClick={() => onClick(10)}>Function</button>
            <p>Result: {result}</p>
            </div>
    </>

}
