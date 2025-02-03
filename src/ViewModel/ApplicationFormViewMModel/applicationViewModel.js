/* eslint-disable no-unused-vars */
import ApplicationFormApi from "../../Model/ApplicationForm/Applicationform";

const applicationViewModel = (set, get) => ({
  allStates: [],
  isLoading: false,

  getAllStates: async () => {
    console.log("Fetching states...");
    set({ isLoading: true });

    try {
      const response = await ApplicationFormApi.getAllStates();

      // ✅ Ensure response is valid
      if (!response || response.status !== 200) {
        throw new Error(`API responded with status ${response?.status}`);
      }

      const data = response.data; // ✅ No need to await
      console.log("API Response:", data);

      // ✅ Check if response is successful
      if (data.STATUS === "SUCCESSFUL") {
        set({ allStates: data.DB_DATA || [] });
      } else {
        throw new Error(`API returned an error: ${data?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching states:", error.message || error);
    } finally {
      set({ isLoading: false });
    }
  }
});

export default applicationViewModel;
