import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter } from 'react-router-dom';
//Depende o teste se não tiver este import causa erro
import "@testing-library/jest-dom"

test('renders learn react link', () => {
  //No arquivo de teste se existem routes o component precisa estar também wrapped em "HashRouter" ou "BrowserRouter"
  render(<HashRouter><App /></HashRouter>);
  //Essa regex acha se estiver aquele trecho de texto em qualquer parte do elemento
  const linkElement = screen.getByText(/FirstTest/i);
  expect(linkElement).toBeInTheDocument();
});

describe("test render", () => {
  test("render the App", () => {
    render(<HashRouter><App /></HashRouter>);
    const textreload = screen.getByText((/Tasks/i));
    expect(textreload).toBeInTheDocument();
  })
})

