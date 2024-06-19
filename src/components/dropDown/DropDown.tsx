import React, { useState } from "react";
import "./styles.css"

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<string[]>(["casa", "carro", "moto", "apartamento"]);
    const [selected, setSelected] = useState<string>("");

    function handleSelection(id: string) {
        setSelected(id)
        setIsOpen(false)
    }

    return <>
        <div className="main-div">
            <h1>Drop Down Test</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="button">Open Drop Down</button>
            {isOpen && <div>
                <ul>
                    {options.map((item) => { return <p className="button" key={item} onClick={() => handleSelection(item)}>{item}</p> })}
                </ul>

            </div>}
            <p className="opção">Sua opção foi: <span>{selected}</span></p>
        </div>
    </>
}


/*
1 - Drop começar fechado - OK
2 - Mostrar options quando clicar - OK
3 - Quando selecionar um item do menu, fechar drop down e mostrar opção selecionada - OK
*/