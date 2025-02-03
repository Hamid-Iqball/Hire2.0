import { create } from "zustand";
import homeViewModal from "../ViewModel/HomePageViewModal/HomeViewModal";
import applicationViewModel from "../ViewModel/ApplicationFormViewMModel/ApplicationViewModel";


const useStore = create((set,get)=>({
...homeViewModal(set,get),
...applicationViewModel(set,get)
}))


export default useStore