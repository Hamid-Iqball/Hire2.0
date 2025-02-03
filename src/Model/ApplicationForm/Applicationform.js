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
}
}


export default ApplicationFormApi