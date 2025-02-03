import useStore from "../../Store/Store"

export const useApplication = ()=>{
const allStates = useStore((state)=>state.allStates)
const getAllStates = useStore((state)=>state.getAllStates)

return {allStates, getAllStates}
}

