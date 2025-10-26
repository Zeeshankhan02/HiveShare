import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Sidebar from "./Sidebar";
import { DashboardNavbar } from "./Navbar"
import PageContent from "./PageContent";


function Saved() {

  const [loader, setLoader] = useState(false)
  const { category } = useParams()
  useEffect(() => {
    window.twttr?.widgets?.load();
  }, [category])



  const [data, setData] = useState(
    [
      {
        title: "Elon Musk's take on AI",
        description: "This is how we do it",
        link: "https://x.com/elonmusk/status/1964395588927000801",
        category: "twitter"
      },{
        title: "Elon Musk's take on AI",
        description: "This is how we do it",
        link: "https://x.com/elonmusk/status/1964395588927000801",
        category: "twitter"
      }, {
        title: "Elon Musk's take on AI",
        description: "This is how we do it",
        link: "https://x.com/elonmusk/status/1964395588927000801",
        category: "twitter"
      }, {
        title: "Former US President",
        description: "This is how we do it",
        link: "https://x.com/BarackObama/status/1981131010894156289",
        category: "twitter"
      }, {
        title: "Big Bang Theory",
        description: "This is how we do it",
        link: "https://www.youtube.com/watch?v=-2RAq5o5pwc",
        category: "youtube"
      }, {
        title: "Big Bang Theory",
        description: "This is how we do it",
        link: "https://www.youtube.com/watch?v=0WD6vxQz5-I&list=RD0WD6vxQz5-I&start_radio=1",
        category: "youtube"
      }, {
        title: "Big Bang Theory",
        description: "This is how we do it",
        link: "https://www.instagram.com/reel/DQJpuaCEl0V/?igsh=ZWszN2Z3Y2NxdW8z",
        category: "instagram",
        fav: true
      }, {
        title: "Big Bang Theory",
        description: "This is how we do it",
        link: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7386341166176272384?collapsed=1"title="Embedded post"></iframe>',
        category: "linkedin"
      }, {
        title: "Big Bang Theory",
        description: "This is how we do it",
        link: "https://www.instagram.com/p/BT8cmZRlkVJ/",
        category: "instagram"
      }
    ])

  const filteredData = category === "all"
    ? data
    : category === "favorites" ? data.filter(item => item.fav === true)
      : data.filter(item => item.category === category);

  return (
    <div className="flex h-screen ">
      <div className="min-w-72">
        {/* SideBar */}
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="main flex flex-col flex-1 bg-gray-50 overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar category={category} />

        {/* Page Content */}
        <PageContent data={filteredData} loader={loader} />

      </div>
    </div>
  );
}

export default Saved;
