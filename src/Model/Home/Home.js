import { axiosInstance } from "../Utils/Base";

const HomepageApi = {

  getAllJobs:  function (data) {
    return axiosInstance.request({
      method: "GET",
      url: `/get_data.php`,
      params:{
        'operation': 'get_all_jobs',
        ...data

      }
    });
  },
};

export default HomepageApi;
