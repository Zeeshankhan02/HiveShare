import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Saved from "./components/Saved"
import RandomRoute from "./components/RandomRoute"

function App() {
  return (
   <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />


        {/* Dynamic category route */}
        <Route path="/saved/:category" element={<Saved />} />
        <Route path="saved" element={<Navigate to="/saved/all" replace />} />

        <Route path="*" element={<RandomRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
