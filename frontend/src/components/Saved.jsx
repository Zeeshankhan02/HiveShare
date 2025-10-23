import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import {DashboardNavbar} from "./Navbar"


function Saved() {
  const [loader, setLoader] = useState(false)
  const { category } = useParams()

  useEffect(()=>{
    window.twttr?.widgets?.load();
  },[category])

  const [data, setData] = useState([{
    title: "Elon Musk's take on AI",
    description: "This is how we do it",
    link: "https://x.com/elonmusk/status/1964395588927000801",
    category: "twitter"
  },{
    title: "Elon Musk's take on AI",
    description: "This is how we do it",
    link: "https://x.com/elonmusk/status/1964395588927000801",
    category: "twitter"
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.youtube.com/watch?v=-2RAq5o5pwc",
    category: "youtube"
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.youtube.com/watch?v=0WD6vxQz5-I&list=RD0WD6vxQz5-I&start_radio=1",
    category: "youtube"
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.instagram.com/p/BdJRABkDbXU/",
    category: "instagram"
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7386341166176272384?collapsed=1"title="Embedded post"></iframe>',
    category: "linkedin"
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.instagram.com/p/BT8cmZRlkVJ/",
    category: "instagram"
  },])


  const filteredData = category === "all"
  ? data
  : data.filter(item => item.category === category);

    return (
    <div className="flex h-screen overflow-y-hidden">
    <div className="min-w-72">
    <Sidebar />
    </div>

    {/* Main Area */}
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Navbar */}
      <DashboardNavbar category={category} />


      {/* Page Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {loader ? (
          <p className="text-xl font-medium animate-bounce [animation-duration:0.5s]">
            <span className="animate-pulse [animation-duration:0.3s]">
              loading...
            </span>
          </p>
        ) : data.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredData.reverse().map((item, idx) => (
              <Posts
                key={idx}
                title={item.title}
                desc={item.description}
                link={item.link}
                category={item.category}
                data={data}
                setData={setData}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center w-80 text-center">
            <img
              className="w-full rounded-2xl"
              src="https://media.tenor.com/kQPucvx-gccAAAAM/it%27s-empty-om-nom.gif"
              alt="Empty Gif"
            />
            <p className="mt-2 text-2xl">
              Nothing to show here — please add something 🥲
            </p>
          </div>
        )}
      </main>
    </div>
  </div>
  );
}

export default Saved;
