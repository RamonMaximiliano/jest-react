import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter, useNavigate } from 'react-router-dom';
//Depende o teste se não tiver este import causa erro
import "@testing-library/jest-dom"


const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  //redeclarou o UseNavigate para uma função do jest para testes
  useNavigate: () => mockNavigate
}))

test('renders learn react link', () => {
  //No arquivo de teste se existem routes o component precisa estar também wrapped em "HashRouter" ou "BrowserRouter"
  render(<HashRouter><App /></HashRouter>);
  //Essa regex acha se estiver aquele trecho de texto em qualquer parte do elemento
  const linkElement = screen.getByText(/FirstTest/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Test React hook function call", () => {
  it("call navigate function when clicked", () => {
    render(<HashRouter><App /></HashRouter>);
    const naviagteAnchor = screen.getByText((/Navigate/i));
    fireEvent.click(naviagteAnchor)
    expect(mockNavigate).toHaveBeenCalledWith("/Tasks");
  })
})
