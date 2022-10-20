import React from "react";
import create from "zustand";
import { useBookStore } from "./bookStore";

//acessar nossa store (loja), precisamos importar nossa loja

export default function NewApp() {
  //const name = useBookStore((state) => state.name);
  //console.log("NewApp");
  //console.log(name);

  return <div>{/* <p>{name}</p> */}</div>;
}
