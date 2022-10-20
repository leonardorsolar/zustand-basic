import create from 'zustand'


const useFarmInitReposStore = create((set) => ({
    farmInitRepos: [{ label: 'Fazenda CPT', id: '1' }],
    updateToFarmInitReposId: (farmInitRepos) => set(state => ({ farmInitRepos: [farmInitRepos] })),

}))

export default useFarmInitReposStore;

