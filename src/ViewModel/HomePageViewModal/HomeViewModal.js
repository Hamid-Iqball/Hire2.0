import HomepageApi from "../../Model/Home/Home";

const homeViewModal = (set, get) => ({
   
    allJobs: [],
    isLoading: false,
  
    getAllJobs: async () => {
      set({ isLoading: true }); 
      try {


        const apiData = {
            org_id : 10381947
        }
      

        const response = await HomepageApi.getAllJobs(apiData);
        console.log('testing',response)

        
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        set({ isLoading: false }); 
      }
    },
  });
  
  export default homeViewModal;
  