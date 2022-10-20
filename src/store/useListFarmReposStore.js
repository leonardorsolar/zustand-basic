import create from 'zustand'


const useListFarmReposStore = create((set) => ({
    listFarmRepos: [],
    addToListFarmRepos: (listFarmRepos) => {
        set(state => ({ listFarmRepos }))
    }
}))

export default useListFarmReposStore;

