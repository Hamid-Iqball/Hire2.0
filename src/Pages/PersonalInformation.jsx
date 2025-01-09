
import {motion} from "framer-motion"


function PersonalInformation() {


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ">
    
    {/* Form */}
      <motion.form 
      initial={{x:-100, opacity:0}}
      animate={{x:0,opacity:100}}
      transition={{
        duration:0.7,
        ease:"easeInOut"

      }}
      className="grid gird-cols-1 sm:grid-cols-2 gap-x-8 md:grid-cols-1 md:gap-y-2 lg:grid-cols-2 lg:gap-y-2 gap-y-2 order-2 md:order-1">
       
      </motion.form>



   

   
    </section>
  );
}

export default PersonalInformation;
