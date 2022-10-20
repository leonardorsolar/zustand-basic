import create from 'zustand'


// criando nosso hook = useFarmReposStore
// criar os modificadores = funções que irão modificar a store
// crio o create set e retornar nossos valores em formato objeto
const useFarmIdReposStore = create((set) => ({
    farmIdRepos: 1,
    updateToFarmReposId: (farmIdRepos) => set(state => ({ farmIdRepos: farmIdRepos })),

}))

export default useFarmIdReposStore;


// em outro arquivo:
//const hook = useFarmReposStore();
// resposta (console.log(hook))
// {farmReposId: Array(0), addToFarmReposId: ƒ}
// addToFarmReposId: repoId => {…}
// farmReposId: []
// [[Prototype]]: Object



// com a store struturada agora é hora de
// trabalhar com a modificação da store
// definir todos os valores de forma separada
// const farmReposId = useFarmReposStore((state) => state.farmReposId);
//   const addToFarmReposId = useFarmReposStore((state) => state.addToFarmReposId);


// estudo
// https://blog.openreplay.com/zustand-simple-modern-state-management-for-react