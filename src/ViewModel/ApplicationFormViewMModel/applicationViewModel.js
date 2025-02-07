/* eslint-disable no-unused-vars */
import { GiConsoleController } from "react-icons/gi";
import ApplicationFormApi from "../../Model/ApplicationForm/applicationformApi";

const applicationViewModel = (set, get) => ({
  allStates: [],
  allCities:[],
  vacanceyQuestions:{},
  isLoadingStates: false,
  isLoading:false,
  isLoadingVacancey:false,
  isSubmitting:false,

//1
  getAllStates: async () => {
    set({ isLoadingStates: true });
    try {
      const response = await ApplicationFormApi.getAllStates();
     if (!response || response.status !== 200) {
        throw new Error(`API responded with status ${response?.status}`);
      }
      const data = response.data; 
  
      if (data.STATUS === "SUCCESSFUL") {
        set({ allStates: data.DB_DATA || [] });
      } else {
        throw new Error(`API returned an error: ${data?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching states:", error.message || error);
    } finally {
      set({ isLoadingStates: false });
    }
  }, 



//2
  getAllCities: async (stateValue)=>{
    set({isLoading:true})

    try {
      const apiData ={
        state_id:stateValue,
      }
      
      const res = await ApplicationFormApi.getAllCities(apiData)
      if (!res || res.status !== 200) {
        throw new Error(`API responded with status ${res?.status}`);
      }

      const data =res.data
      console.log(data)

      if (data.STATUS === "SUCCESSFUL") {
        set({ allCities: data.DB_DATA || [] });
      } else {
        throw new Error(`API returned an error: ${data?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching states:", error.message || error);
    } finally {
      set({ isLoading: false });
    }
  },


//3
  getVacancey: async (jobId) => {
    set((state) => ({ ...state, isLoadingVacancey: true })); 

    try {
      const apiData = {
        id: jobId,
        user_id: 15192,
      };

      const response = await ApplicationFormApi.getVacanceyQuestioner(apiData);

      if (!response || response.status !== 200) {
        throw new Error(`API responded with status ${response?.status}`);
      }

      const data = response.data;
      // console.log("Vacancy Data:", data); 

      if (data.STATUS === "SUCCESSFUL") {
        // console.log("Updating State with:", data.DB_DATA); 

        set((state) => ({ ...state, vacanceyQuestions: data.DB_DATA })); 
      } else {
        throw new Error(data.Error || "Unknown API Error");
      }
    } catch (error) {
      console.error("Error fetching vacancy questions:", error.message || error);
    } finally {
      set((state) => ({ ...state, isLoadingVacancey: false }));
      
    }
  },


  //4
  sendApplication:async(payload)=>{
  set((state)=>({...state, isSubmitting:true}))

  try {
    const response = await ApplicationFormApi.applyVacancey(payload)
    if (!response || response.status !== 200) {
      throw new Error(`API responded with status ${response?.status}`);
    }

    console.log(response)

    const data = response.data

    if(data.STATUS==='SUCCESSFUL'){
      return {success:true, data:data.DB_DATA}
    }else{
      throw new Error(data.Error || "Unkown API ERROR")
    }
    
  }  catch (error) {
    console.error("Error submitting application:", error.message || error);
    return { success: false, error: error.message || "Failed to submit application" };
  } finally {
    set((state) => ({ ...state, isSubmitting: false }));
  }

  }



});

export default applicationViewModel;
