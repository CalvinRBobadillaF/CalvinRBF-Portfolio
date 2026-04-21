import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"
import { ContactSection } from "./components/ContactSection"



function App() {


  return (
    <>
      <BrowserRouter basename="/CalvinRBF-Portfolio">
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" index element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
