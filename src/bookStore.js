import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useBookStore = create(
  devtools((set) => ({
    name: "leonardo",
    fruits: [],
    text: "",
    updateName: (newName) => set({ name: newName }),
    addFruits: (fruits) => set((state) => ({ fruits: [...state.fruits, fruits] })),
    setText: (str) => set((state) => ({ text: state.str })),
  }))
);

// A função create recebe uma função callback como parâmetro,
// que retorna um objeto, para criar o armazenamento.
// Em seguida, definimos o valor inicial do nome,
// neste caso o valor da propriedade será inicialmente Leonardo.

//Para atualizar o estado na loja devemos fazê-lo criando novas propriedades
//src/store/bookStore.js adicionando funções para atualizar modificar a loja.
//No callback que recebe a função create , esta função recebe vários
//parâmetros, o primeiro é a função set , que nos permitirá atualizar a loja.
//Criando uma ação.
//Primeiro criamos uma nova propriedade para atualizar
//a quantidade e ela se chamará updateName que recebe um número como parâmetro.

//No corpo da função updateName executamos a função set enviando um objeto,
//referenciando a propriedade a ser atualizada.
