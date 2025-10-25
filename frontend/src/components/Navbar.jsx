import { Link } from "react-router-dom"
import { Logo } from "./svgs/Logo"
import {
  PlusIcon,
  ShareIcon,
} from "./svgs/icons";
import AddLinkModal from "./Modals/AddLinkModal";
import ShareModal from "./Modals/ShareModal";
import { useState } from "react";

export function HomeNavbar() {
  return (
    <>
      <nav className="flex justify-around items-center h-18 w-full bg-amber-600 ">
        <div className="flex items-center gap-0.5 text-amber-100">
          <div className="font-licorice font-bold text-3xl">BrainBox</div>
          <div className="text-white"><Logo /></div>
        </div>
        <div className="text-white cursor hover:text-amber-800">
          <Link className="py-4 px-2 text-lg font-semibold block" to={'login'}>LOGIN</Link>
        </div>
      </nav>
    </>
  )
}

export function DashboardNavbar({ category }) {
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 shadow-sm bg-white/70">
        <h1 className="text-2xl font-semibold font-macondo tracking-wide">
          {category.toUpperCase()}
        </h1>

        <div className="flex gap-4">
          <button
            // onClick={() => modal.setShowModal(true)}
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 px-6 py-2 text-lg font-medium text-white bg-black rounded-lg transition-all hover:bg-zinc-700 hover:scale-105 active:scale-100"
          >
            Add Content <PlusIcon />
          </button>

          <button
            // onClick={() => modal.setShowShareModal(true)}
            onClick={() => setShowShareModal(true)}
            className="flex items-center justify-center gap-2 px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 active:scale-100"
          >
            Share <ShareIcon />
          </button>
        </div>
      </header>
      <AddLinkModal showModal={showModal} setShowModal={setShowModal} />
      <ShareModal showShareModal={showShareModal} setShowShareModal={setShowShareModal} />
    </>
  )
}