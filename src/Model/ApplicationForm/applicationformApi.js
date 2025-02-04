import { axiosInstance } from "../Utils/Base"

const ApplicationFormApi ={
getAllStates:function (){
    return axiosInstance.request({
        method:'GET',
        url:`/get_data.php`,
        params:{
            'operation':`get_states`
        }
    })
}, 

getAllCities:function (data){
    return axiosInstance.request({
        method:'Get',
        url:`/get_data.php`,
        params:{
            'operation':'get_city',
            ...data
        }
    })
},


getVacanceyQuestioner:function(data){
    return axiosInstance.request({
        method:'GET',
        url:`/get_data.php`,
        params:{
            'operation':'vacancy_requirements',
            ...data
        }
    })
}
}


export default ApplicationFormApi