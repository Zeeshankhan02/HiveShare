import { useState } from "react";
import { PlusIcon } from "./svgs/PlusIcon";
import { ShareIcon } from "./svgs/ShareIcon";
import AddLinkModal from "./Modals/AddLinkModal";
import ShareModal from "./Modals/ShareModal";

function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal ] = useState(false);
  const [loader,setLoader] = useState(false)
  const [data,setData] = useState([])

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] bg-gray-300 p-6">
        Sidebar
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-18  flex items-center relative px-6 shadow-sm backdrop-blur-2xl bg-amber-50">
          <h1 className="text-2xl font-semibold">All Content</h1>
          <div className="flex gap-x-6 absolute right-4">
            <button className="cursor-pointer flex items-center text-lg font-medium justify-center py-2 px-8 bg-black text-white rounded-md gap-x-1" onClick={()=>setShowModal(true)}>Add Content <PlusIcon /></button>
            <button className="cursor-pointer flex items-center text-lg font-medium justify-center py-2 px-8 bg-blue-600 text-white rounded-md gap-x-1" onClick={()=>setShowShareModal(true)}>Share <ShareIcon /></button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <AddLinkModal showModal={showModal} setShowModal={setShowModal} />
        {
          loader?<p className="animate-bounce [animation-duration:0.5s] text-xl "><span className="animate-pulse [animation-duration:0.2s]">loading...</span></p>:data.length>0?<div>hello</div>:<div className="w-80 h-fit ">
            <img className="w-full rounded-2xl"src="https://media.tenor.com/kQPucvx-gccAAAAM/it%27s-empty-om-nom.gif"  alt="Empty Gif"  />
            <p className="text-2xl px-2">Nothing To Show Here please add something🥲</p>
          </div>
        }
        <ShareModal showShareModal={showShareModal} setShowShareModal={setShowShareModal}/>
        </main>
    
      </div>
    </div>
  );
}

export default Dashboard;
