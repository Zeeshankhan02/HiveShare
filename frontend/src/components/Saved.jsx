import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import AddLinkModal from "./Modals/AddLinkModal";
import ShareModal from "./Modals/ShareModal";
import {
  PlusIcon,
  ShareIcon,
} from "./svgs/icons";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


function Saved() {

  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([, {
    title: "Elon Musk's take on AI",
    description: "This is how we do it",
    link: "https://x.com/elonmusk/status/1964395588927000801",
    category: "tweet"
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
  },,{
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



  const { category } = useParams()
  useEffect(() => {
    window?.twttr?.widgets?.load();
    window?.instgrm?.Embeds?.process?.();
  }, [data]);


  return (
    <div className="flex h-screen overflow-y-hidden">
    <div className="min-w-72">
    <Sidebar />
    </div>

    {/* Main Area */}
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 shadow-sm backdrop-blur-md bg-white/70">
        <h1 className="text-2xl font-semibold font-macondo tracking-wide">
          {category.toUpperCase()}
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 px-6 py-2 text-lg font-medium text-white bg-black rounded-lg transition-all hover:bg-zinc-700 hover:scale-105 active:scale-100"
          >
            Add Content <PlusIcon />
          </button>

          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center justify-center gap-2 px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 active:scale-100"
          >
            Share <ShareIcon />
          </button>
        </div>
      </header>

      <AddLinkModal showModal={showModal} setShowModal={setShowModal} />
      <ShareModal showShareModal={showShareModal} setShowShareModal={setShowShareModal}
      />

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
            {data.reverse().map((item, idx) => (
              <Posts
                key={idx}
                title={item.title}
                desc={item.description}
                link={item.link}
                category={item.category}
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
