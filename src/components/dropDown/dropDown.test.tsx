import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from "./DropDown";
import { HashRouter } from "react-router-dom";


describe("DropDown Tests", ()=>{
    it("Should start with drop down closed",()=>{
        render(<HashRouter><DropDown onSelect={()=>console.log("")}/></HashRouter>);
        const option1 = screen.queryByText((/casa/i))
        expect(option1).not.toBeInTheDocument();
    })

    it("Show options when clicked in button",()=>{
        render(<HashRouter><DropDown onSelect={()=>console.log("")}/></HashRouter>);
        const Open = screen.getByTestId("OpenButton");
        fireEvent.click(Open);
        const option1 = screen.queryByText((/casa/i))
        expect(option1).toBeInTheDocument();
    })

    it("When choosing option close drop down and show option",()=>{
        const onSelectFunction = jest.fn();
        render(<HashRouter><DropDown onSelect={onSelectFunction}/></HashRouter>);
        const Open = screen.getByTestId("OpenButton");
        fireEvent.click(Open);
        const option1 = screen.getByTestId("casa")
        expect(option1).toBeInTheDocument();
        fireEvent.click(option1);
        expect(onSelectFunction).toHaveBeenCalled();
        expect(onSelectFunction).toHaveBeenCalledWith("casa");
        expect(option1).not.toBeInTheDocument();
        const endText = screen.queryByText((/casa/i))
        expect(endText).toBeInTheDocument();
    })

}) 



/*
1 - Drop começar fechado - OK
2 - Mostrar options quando clicar - OK
3 - Quando selecionar um item do menu, fechar drop down e mostrar opção selecionada - OK
*/


  

