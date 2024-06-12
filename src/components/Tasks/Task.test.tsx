import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
//Depende o teste se não tiver este import causa erro
import "@testing-library/jest-dom"
import Tasks from './Task';

describe("Tasks component", () => {

    //Testando se renderizou
         it("should render the component",()=>{
            render(<HashRouter><Tasks /></HashRouter>)
        }) 

        //Testando se renderizou e se clicou no botão conferindo se o novo item consta na lista
        it("Should click the add one button",()=>{
            render(<HashRouter><Tasks/></HashRouter>)
            const button = screen.getByText((/Add/i))
            fireEvent.click(button);
            const there = screen.getByText((/there/i))
            expect(there).toBeInTheDocument();
        })
})
  
