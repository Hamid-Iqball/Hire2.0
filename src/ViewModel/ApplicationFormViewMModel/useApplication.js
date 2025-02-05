import useStore from "../../Store/Store"

export const useApplication = ()=>{
const allStates = useStore((state)=>state.allStates)
const getAllStates = useStore((state)=>state.getAllStates)
const getAllCities = useStore((state)=>state.getAllCities)
const getVacancey = useStore((state)=>state.getVacancey)
const vacanceyQuestions = useStore((state)=>state.vacanceyQuestions)
const sendApplication = useStore((state)=>state.sendApplication)


return {allStates, getAllStates,getAllCities , getVacancey ,vacanceyQuestions, sendApplication }
}

