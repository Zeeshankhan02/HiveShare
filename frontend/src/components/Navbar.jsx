import { Link, NavLink, useParams } from "react-router-dom"
import { Logo } from "../svgs/Logo"
import {
  Menu,
  PlusIcon,
  ShareIcon,
} from "../svgs/icons";
import AddLinkModal from "../Modals/AddLinkModal";
import ShareModal from "../Modals/ShareModal";
import { useState } from "react";

export function HomeNavbar() {
  const location = window.origin
  return (
    <>
      <nav className="flex justify-around items-center h-18 w-full bg-amber-600 ">
        <div className="flex items-center gap-0.5 text-amber-100">
          <div className="font-licorice font-bold text-3xl">HiveShare</div>
          <div className="text-white"><Logo /></div>
        </div>
        <div className="text-white cursor flex items-center gap-6">
          {!location && <div>
          <NavLink className={({isActive})=>`${isActive?"bg-amber-400 hidden sm:block text-black py-4 px-2 text-lg  font-semibold rounded-xl hover:bg-amber-200":"py-4 px-2 text-lg font-semibold block hover:text-black hover:bg-amber-400 transition-all rounded-xl ease-in-out"} `} to={'/'}>Home</NavLink>
          <NavLink className={({isActive})=>`${isActive?"bg-amber-400 text-black py-4 px-2 text-lg  font-semibold rounded-xl hover:bg-amber-200":"py-4 px-2 text-lg font-semibold block hover:text-black hover:bg-amber-400 transition-all rounded-xl ease-in-out"} `} to={'/sign-up'}>SignUp</NavLink>
          </div>}
          <NavLink className={({isActive})=>`${isActive?"bg-amber-400 text-black py-4 px-2 text-lg  font-semibold rounded-xl hover:bg-amber-200":"py-4 px-2 text-lg font-semibold block hover:text-black hover:bg-amber-400 transition-all rounded-xl ease-in-out"} `} to={'/login'}>LogIn</NavLink>
        </div>
      </nav>
    </>
  )
}

export function DashboardNavbar({ category,onAdd, menuOpen, setMenuOpen }) {
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  
  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-b border-gray-300 shadow-sm gap-3 sm:gap-0">
        {/* Category Title */}
        <h1 className="hidden lg:block text-xl sm:text-2xl font-semibold font-macondo tracking-wide text-gray-800">
          {category.toUpperCase()}
        </h1>
        {!menuOpen && <div onClick={()=>setMenuOpen(menu=>!menu)} className="hidden sm:block lg:hidden cursor-pointer"><Menu/></div>}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => setShowModal(true)}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-base sm:text-lg font-medium text-white bg-black rounded-lg transition-all hover:bg-zinc-700 hover:scale-105 active:scale-100 w-full sm:w-auto`}
          >
            Add Content <PlusIcon className="w-5 h-5" />
          </button>

          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-base sm:text-lg font-medium text-white bg-blue-600 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 active:scale-100 w-full sm:w-auto"
          >
            Share <ShareIcon className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Modals */}
      <AddLinkModal showModal={showModal} setShowModal={setShowModal} onAdd={onAdd} />
      <ShareModal showShareModal={showShareModal} setShowShareModal={setShowShareModal} />
    </>
  );

}