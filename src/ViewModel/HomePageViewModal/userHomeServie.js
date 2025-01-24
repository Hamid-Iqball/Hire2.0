import useStore from "../../Store/Store"

export const useHomePage = ()=>{
const allJobs = useStore((state)=>state.allJobs)
const getAllJobs = useStore((state)=>state. getAllJobs)

return {allJobs,getAllJobs}
}