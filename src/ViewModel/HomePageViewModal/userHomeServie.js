import useStore from "../../Store/Store"

export const useHomePage = ()=>{
const orgDetails = useStore((state)=>state.orgDetails)
const allJobs = useStore((state)=>state.allJobs)
const getAllJobs = useStore((state)=>state. getAllJobs)

return {orgDetails,allJobs,getAllJobs}
}