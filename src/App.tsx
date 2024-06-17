import { log } from "console";
import React from "react";
import AppNavigation from "./AppNavigation";
import ProductsContextProvider from "./contexts/ProductsContext";

function App() {
  let firstName = "Baisal"; //не явный
  let lastName: string = "Kaldybaev"; //явный
  let id: number = 10;
  let isInCart: boolean = false;

  //Если функция что-то возвращает + типизировали параметр
  function sayHello(name: string): string {
    return `$Привет ${name}!`;
  }

  // console.log(sayHello("Baisal"));

  // Если функция ничего не возвращает используется тип void
  function sayMyName(name: string): void {
    console.log(name);
  }
  sayMyName("Medet");

  //Типизация обьектов
  let user: {
    firstName: string;
    age: number;
    city: string;
    role: string;
  } = {
    firstName: "Baisal",
    age: 18,
    city: "Bishkek",
    role: "Student",
  };

  //Интерфейс
  interface Product {
    id: number;
    title: string;
    info: string;
    price: number;
  }

  let product: Product = {
    id: 1,
    title: "Iphone 15 pro max",
    info: "White Iphone",
    price: 1200,
  };

  return (
    <ProductsContextProvider>
      <AppNavigation />
    </ProductsContextProvider>
  );
}

export default App;
