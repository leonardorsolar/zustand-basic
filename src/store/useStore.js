import create from "zustand";
import useFarmInitReposStore from "./useFarmInitReposStore";

const useStore = create((set, get) => ({
    ...useFarmInitReposStore(set, get),

}));

export default useStore;