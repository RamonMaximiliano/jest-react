import React, { useState } from "react";
import "./styles.css"

export default function DropDown({onSelect}: { onSelect: (id: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<string[]>(["casa", "carro", "moto", "apartamento"]);
    const [selected, setSelected] = useState<string>("");

    function handleSelection(id: string) {
        setSelected(id)
        onSelect(id)
        setIsOpen(false)
    }

    return <>
        <div className="main-div">
            <h1>Drop Down Test</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="button" data-testid="OpenButton">Open Drop Down</button>
            {isOpen && <div>
                <ul>
                    {options.map((item) => { return <li className="button" key={item} data-testid={item} onClick={() => handleSelection(item)}>{item}</li> })}
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