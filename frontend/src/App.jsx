import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Saved from "./components/Saved";
import RandomRoute from "./components/RandomRoute";
import Shareable from "./components/Shareable";
import { Toaster } from "react-hot-toast";
import { HomeNavbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/shared" element={<Shareable />} />
        <Route path="/shared/:shared_id" element={<Shareable />} />

        {/* Dynamic category route */}
        <Route path="/saved/:category" element={<Saved />} />
        <Route path="/saved" element={<Navigate to="/saved/all" replace />} />
        <Route path="*" element={<RandomRoute />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

function Layout(){
  return<>
  <HomeNavbar/>
  <Outlet/>
  </>
}

export default App;
