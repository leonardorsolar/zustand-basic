import create from 'zustand'


const useCreationsInitReposStore = create((set) => ({
    creationsInitRepos: [{ label: 'bovinos22', id: '12' }],
    updateToCreationsInitReposStore: (creationsInitRepos) => set(state => ({ creationsInitRepos: [creationsInitRepos] })),

}))

export default useCreationsInitReposStore;

