import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {motion} from 'framer-motion'
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

  const [data, setData] = useState([
    {
    title: "Elon Musk's take on AI",
    description: "This is how we do it",
    link: "https://x.com/elonmusk/status/1964395588927000801",
    category: "twitter"
  },{
    title: "Former US President",
    description: "This is how we do it",
    link: "https://x.com/BarackObama/status/1981131010894156289",
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
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.instagram.com/p/BdJRABkDbXU/",
    category: "instagram"
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.instagram.com/reel/DQJpuaCEl0V/?igsh=ZWszN2Z3Y2NxdW8z",
    category: "instagram",
    fav:true
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7386341166176272384?collapsed=1"title="Embedded post"></iframe>',
    category: "linkedin",
    fav:true
  },{
    title: "Big Bang Theory",
    description: "This is how we do it",
    link: "https://www.instagram.com/p/BT8cmZRlkVJ/",
    category: "instagram"
  },
])


  const filteredData = category === "all"
  ? data
  : category === "favorites"? data.filter(item => item.fav===true)
  :data.filter(item => item.category === category);

    return (
    <div className="flex h-screen">
    <div className="min-w-72">
    <Sidebar />
    </div>

    {/* Main Area */}
    <div className="main flex flex-col flex-1 overflow-hidden">
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
            {filteredData.map((item, idx) => (
              <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              viewport={{ once: true}}
              key={idx}
              >
                <Posts
                title={item.title}
                desc={item.description}
                link={item.link}
                category={item.category}
                data={data}
                setData={setData}
                fav={item.fav}
              />
              </motion.div>
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
