import { useState } from "react";
import { NavLink,  useParams } from "react-router-dom";
import AddLinkModal from "./Modals/AddLinkModal";
import ShareModal from "./Modals/ShareModal";
import {
  Youtube,
  PlusIcon,
  ShareIcon,
  Instagram,
  TwitterIcon,
  LinkedIn,
  Globe,
  CrossIcon,
  Facebook
} from "./svgs/icons";
import { Logo } from "./svgs/Logo";


function Saved() {

  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])

  const {category} = useParams()

  const sidebarItems = [
    {
      text: "All",
      icon: Globe
    }, {
      text: "Youtube",
      icon: Youtube
    }, {
      text: "Instagram",
      icon: Instagram
    }, {
      text: "Facebook",
      icon: Facebook
    }, {
      text: "Twitter",
      icon: TwitterIcon
    }, {
      text: "Linkedin",
      icon: LinkedIn
    }
  ]

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] min-h-full bg-amber-400 p-6">
          <div className="flex items-center p-1">
            <h3 className="font-licorice font-black text-2xl">BrainBox</h3>
            <Logo />
        </div>

        <div className="flex flex-col gap-1 justify-center mt-12">
        {sidebarItems.map((item, idx) => (
          <NavLink
            to={`/saved/${item.text.toLowerCase()}`}
            key={idx}
            className={({ isActive }) =>
              `flex items-center gap-2 p-1 border-b-2 border-amber-300 hover:bg-gray-400 hover:rounded-md cursor-pointer transition-colors ${
                isActive ? "bg-gray-200 rounded-md" : ""
              }`
            }
          >
            <item.icon className="w-10 h-10" />
            <h3 className="text-lg">{item.text}</h3>
          </NavLink>
        ))}
      </div>

      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-18  flex items-center relative px-6 shadow-sm backdrop-blur-2xl bg-amber-50">
          <h1 className="text-2xl font-semibold font-macondo">{category.toUpperCase()}</h1>
          <div className="flex gap-x-6 absolute right-4">
            <button className="cursor-pointer flex items-center text-lg font-medium justify-center py-2 px-8 bg-black text-white rounded-lg gap-x-1 hover:bg-zinc-700 hover:text-neutral-200 transition-all" onClick={() => setShowModal(true)}>Add Content <PlusIcon /></button>
            <button className="cursor-pointer flex items-center text-lg font-medium justify-center py-2 px-8 bg-blue-600 text-white rounded-lg gap-x-1" onClick={() => setShowShareModal(true)}>Share <ShareIcon /></button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div> <AddLinkModal showModal={showModal} setShowModal={setShowModal} />
          <ShareModal showShareModal={showShareModal} setShowShareModal={setShowShareModal} />
            {
              loader ? <p className="animate-bounce [animation-duration:0.5s] text-xl "><span className="animate-pulse [animation-duration:0.2s]">loading...</span></p> : data.length > 0 ? <div>{category}</div> : <div className="w-80 h-fit ">
                <img className="w-full rounded-2xl" src="https://media.tenor.com/kQPucvx-gccAAAAM/it%27s-empty-om-nom.gif" alt="Empty Gif" />
                <p className="text-2xl px-2">Nothing To Show Here please add something🥲</p>
              </div>
            }
          </div>
          
        </main>
      </div>

    </div>
  );
}

export default Saved;
