import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route index element={<Home/>} />
      <Route path="sign-up" element={<SignUp/>} />
      <Route path="login" element={<Login/>} />
      <Route path="dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
