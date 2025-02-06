import { BrowserRouter } from "react-router"
import Routers from "./Routers/Routers"
import { Toaster } from "react-hot-toast"



function App() {
  return (
  <BrowserRouter>
  <Toaster position="top-right" reverseOrder={false}/>
  <Routers/>
  </BrowserRouter>
  )
}

export default App