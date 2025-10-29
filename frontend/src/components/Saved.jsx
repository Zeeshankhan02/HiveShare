import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import Sidebar from "./Sidebar";
import { DashboardNavbar } from "./Navbar"
import PageContent from "./PageContent";


function Saved() {

  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const { category } = useParams()
  useEffect(() => {
    window.twttr?.widgets?.load();
  }, [category])



  const [data, setData] = useState([])

    async function fetchData(){
      const token = localStorage.getItem("SBtoken")
      if (!token) {
        alert("please login first")
        navigate("/login")
      }
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        if(!response){
          alert("failed to Fetch data")
        }else{
          setData(response.data)
        }

      } catch (error) {
        console.log(error); 
        alert("Internel Server Error")
        setLoader(false)
      }finally{
        setLoader(false)
      }
    }

    useEffect(()=>{
      fetchData()
    },[])

  const filteredData = category === "all"
    ? data
    : category === "favorites" ? data.filter(item => item.is_favourite === true)
      : data.filter(item => item.platform === category);

  return (
    <div className="flex h-screen ">
      <div className="min-w-72">
        {/* SideBar */}
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="main flex flex-col flex-1 bg-gray-50 overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar category={category} onAdd={fetchData}/>

        {/* Page Content */}
        <PageContent onDelete={fetchData} data={filteredData} loader={loader} category={category}/>

      </div>
    </div>
  );
}

export default Saved;
