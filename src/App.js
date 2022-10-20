import React, { useEffect } from "react";
import create from "zustand";
import { useBookStore } from "./bookStore";
import NewApp from "./NewApp";

//acessar nossa store (loja), precisamos importar nossa loja

function App() {
  const name = useBookStore((state) => state.name);
  console.log(name);

  const updateName = useBookStore((state) => state.updateName);
  updateName("Miguel");
  console.log(name);

  const fruits = useBookStore((state) => state.fruits);
  console.log(fruits);

  const addFruits = useBookStore((state) => state.addFruits);

  //addNames("Ju");
  //console.log(arrayNames);

  useEffect(() => {
    addFruits("Pera");
  }, []);
  console.log(name);
  console.log(fruits);

  return (
    <div>
      <p>{name}</p>
      <p>{fruits}</p>
      {/* <NewApp /> */}
    </div>
  );
}

export default App;
