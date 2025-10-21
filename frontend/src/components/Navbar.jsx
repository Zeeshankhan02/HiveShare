import { Link } from "react-router-dom"
import { Logo } from "./svgs/Logo"
function Navbar() {
  return (
    <>
    <nav className="flex justify-around items-center h-18 w-full bg-amber-600 ">
      <div className="flex items-center gap-0.5 text-amber-100">
      <div className="font-licorice font-bold text-3xl">BrainBox</div>
        <div className="text-white"><Logo/></div>
      </div>
      <div className="text-white cursor hover:text-amber-800">
        <Link className="py-4 px-2 text-lg font-semibold block" to={'login'}>LOGIN</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar