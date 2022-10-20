import create from 'zustand'


const useListCreationsReposStore = create((set) => ({
    listCreationsRepos: [],
    addToListCreationsRepos: (listCreationsRepos) => {
        set(state => ({ listCreationsRepos }))
    }
}))

export default useListCreationsReposStore;

