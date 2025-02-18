/* eslint-disable no-unused-vars */
import HomepageApi from "../../Model/Home/Home";

const homeViewModal = (set, get) => ({
   
    orgDetails:[],
    allJobs: [],
    isLoading: false,
  
    getAllJobs: async () => {
      set({ isLoading: true }); 
      try {
        const apiData = {
            org_id : 10381947
      
        }

        const response = await HomepageApi.getAllJobs(apiData);
        const allData = await response.data.DB_DATA
        // console.log(response)
        if(response.status===200 ){
            set({allJobs:allData.data||[],
             orgDetails:allData.org_detail||[]
        })}

        
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        set({ isLoading: false }); 
      }
    },
  });
  
  export default homeViewModal;
  