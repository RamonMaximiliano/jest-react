import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import { setupServer  } from 'msw/node'
import { http, HttpResponse } from 'msw'
import * as useFiles from "../hooks/useFiles"

//Depende o teste se não tiver este import causa erro
import "@testing-library/jest-dom"
import Tasks from './Task';

const APICALLSSPY = jest.spyOn(useFiles, "useFile");


describe("Tasks component", () => {

    //Testando se renderizou
         it("should render the component",()=>{
            const {debug} = render(<HashRouter><Tasks /></HashRouter>)
            const Ninput = screen.getByPlaceholderText("NumberInput")
            //This debug function shows the HTML generated in the terminal
            userEvent.type(Ninput, "5");
            debug();
        }) 

         it("should call useSpy function",()=>{
            render(<HashRouter><Tasks/></HashRouter>)
            APICALLSSPY.mockReturnValue({
                id:10,
                title:"useFileSpyTest"
            });
            const WhateverID = screen.getByTestId("WhateverID")
            expect(WhateverID).toBeInTheDocument();
        }) 

        //Testando se renderizou e se clicou no botão conferindo se o novo item consta na lista
        /* Os métodos Get, se tiver mais de um elemnto que atende a condição, por exemplo "screen.getByText((/Add/i))", se tiver dois elementos com o Add no texto, então o Get vai falhar  */
        it("Should click the add one button",()=>{
            render(<HashRouter><Tasks/></HashRouter>)
            const button = screen.getByText((/Add/i))
            fireEvent.click(button);
            const there = screen.getByText((/there/i))
            expect(there).toBeInTheDocument();

            /*Quando vai procurar por algo não existir no documento tem que usar o queryBytext ao invés do getbytext*/
            const unexist = screen.queryByText((/unexist/i))
            expect(unexist).not.toBeInTheDocument();
        });

        const worker = setupServer (
            http.get("https://jsonplaceholder.typicode.com/todos", async () => HttpResponse.json({
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
                }))
        )
    
        beforeAll(() => {
            // Start the interception.
            worker.listen()
          })
})

