import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import { DashboardNavbar } from "./Navbar";
import PageContent from "./PageContent";

function Saved() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();

  const [data, setData] = useState([ ]);

  async function fetchData() {
    const token = localStorage.getItem("SBtoken");
    if (!token) {
      alert("please login first");
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
            "User-Agent": "Custom-User-Agent"
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
      <div className="hidden md:min-w-6xs md:block lg:min-w-xs lg:block">
        {/* SideBar */}
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="main flex flex-col flex-1 bg-gray-50 overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar category={category} onAdd={fetchData} />

        {/* Page Content */}
        <PageContent
          data={filteredData}
          setData={setData}
          loader={loader}
          category={category}
        />
      </div>
    </div>
  );
}

export default Saved;
