import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'xs':'475px'
      },
      colors:{
        customBlue:{
          
          400:'#00BCFF',
          500:'#2B7FFF'
        },
        customGray:{
          700:'#364153'
        }
      }
    },
  },
  plugins: [],
});