import { axiosInstance } from "../Utils/Base"

const HomepageApi ={
    getAllJobs: function(id){
    return axiosInstance.request({
    method:'GET',
    url:`operation=get_all_jobs&org_id=${id}`
    })
    }
}

export default HomepageApi