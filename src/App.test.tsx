import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter, useNavigate } from 'react-router-dom';
//Depende o teste se não tiver este import causa erro
import "@testing-library/jest-dom"

// Método de aplicar testes = AAA - Arrange Action Assert


const compRender = () =>{
      const component = render(<HashRouter><App /></HashRouter>);
      return component
}

const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  //redeclarou o UseNavigate para uma função do jest para testes
  useNavigate: () => mockNavigate
}))

describe("Test React hook function call", () => {
  it("Call navigate function when clicked", () => {
    render(<HashRouter><App /></HashRouter>);
    const naviagteAnchor = screen.getByText((/Navigate/i));
    fireEvent.click(naviagteAnchor)
    expect(mockNavigate).toHaveBeenCalledWith("/Tasks");
  });

  test('Render short function refactored', () => {
    //No arquivo de teste se existem routes o component precisa estar também wrapped em "HashRouter" ou "BrowserRouter"
    compRender();
    //Essa regex acha se estiver aquele trecho de texto em qualquer parte do elemento
    const linkElement = screen.getByText(/FirstTest/i);
    expect(linkElement).toBeInTheDocument();
  });

})
