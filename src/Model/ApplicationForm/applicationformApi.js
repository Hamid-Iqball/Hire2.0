import { axiosInstance, axiosInstanceMultipart } from "../Utils/Base"

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
    },

    applyVacancey:function(payload){
        // console.log('what is coming from',payload)
    return axiosInstanceMultipart.request({
        method:'POST',
        url:'/set_data.php',
        data:payload
    })
    }
    }


export default ApplicationFormApi