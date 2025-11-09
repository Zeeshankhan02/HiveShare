import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import { DashboardNavbar } from "./Navbar";
import PageContent from "./PageContent";
import toast from "react-hot-toast";
import { motion } from 'framer-motion'

function Saved() {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { category } = useParams();
  const [menuOpen,setMenuOpen] = useState(false)

  const [data, setData] = useState([]);

  async function fetchData() {
    const token = localStorage.getItem("SBtoken");
    if (!token) {
      toast.error("please login first");
      navigate("/login");
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/posts`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            "ngrok-skip-browser-warning": "true",
          },
        }
      );


      if (!response) {
        alert("failed to Fetch data");
      } else {
        setData(response.data.posts);
      }
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      }
      setLoader(false);
    } finally {
      setLoader(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [category]);

  const filteredData =
    category === "all"
      ? data
      : category === "favorites"
        ? data.filter((item) => item.is_favourite === true)
        : data.filter((item) => item.platform.toLowerCase() === category);

  return (
    <div className="flex h-screen ">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`${menuOpen?"block w-2xs":"hidden" }  lg:min-w-xs lg:block`}>
        <Sidebar setMenuOpen={setMenuOpen}/>
      </motion.div>

      {/* Main Area */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }} className="main flex flex-col flex-1 bg-gray-50 overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar category={category} onAdd={fetchData} setMenuOpen={setMenuOpen} />

        {/* Page Content */}
        <PageContent
          data={filteredData}
          setData={setData}
          loader={loader}
          category={category}
          menuOpen={menuOpen}
        />
      </motion.div>
    </div>
  );
}

export default Saved;
