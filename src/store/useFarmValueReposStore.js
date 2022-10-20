import create from 'zustand'
import { persist, devtools } from 'zustand/middleware'

const useFarmValueReposStore = create(
    devtools(
        persist((set, get) => ({
            farmValueRepos: {},
            changeFarmValueRepos: (farmValueRepos) => set(state => ({ farmValueRepos })),

        }),
            {
                name: 'FarmValue',
                //getStorage: () => sessionStorage,
            }
        )
    )
)

export default useFarmValueReposStore;

