import { create } from "zustand";
import homeViewModal from "../ViewModel/HomePageViewModal/HomeViewModal";

const useStore = create((set,get)=>({
...homeViewModal(set,get)
}))


export default useStore