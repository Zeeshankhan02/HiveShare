import axios from "axios";
import { Logo } from "../svgs/Logo";
import {
  Facebook,
  Globe,
  Instagram,
  IsFavorite,
  LinkedIn,
  LogOut,
  Twitter,
  Youtube,
} from "../svgs/icons";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Sidebar({setMenuOpen}) {
  const sidebarItems = [
    {
      text: "All",
      icon: Globe,
    },
    {
      text: "Youtube",
      icon: Youtube,
    },
    {
      text: "Instagram",
      icon: Instagram,
    },
    {
      text: "Twitter",
      icon: Twitter,
    },
    {
      text: "Linkedin",
      icon: LinkedIn,
    },
    {
      text: "Favorites",
      icon: IsFavorite,
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      {/* Sidebar */}
      <div className=" min-h-full bg-amber-400 p-6">
        <a href="/" className="inline-flex items-center">
          <div className="font-licorice font-black text-2xl">HiveShare</div>
          <Logo />
        </a>

        <div className="flex flex-col gap-1 justify-center mt-12">
          {sidebarItems.map((item, idx) => (
            <NavLink
              to={`/saved/${item.text.toLowerCase()}`}
              key={idx}
              onClick={()=>setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-1 border-b-2 border-amber-300 hover:bg-gray-400 hover:rounded-md cursor-pointer transition-colors ${
                  isActive ? "bg-gray-200 rounded-md" : ""
                }`
              }
            >
              <item.icon className={`w-10 h-10`} />
              <h3 className="text-lg">{item.text}</h3>
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col gap-1 justify-center mt-12 absolute bottom-4">
          <NavLink
            to="/login"
            onClick={async (e) => {
              e.preventDefault(); // prevent immediate navigation
              try {
                const token = localStorage.getItem("SBtoken");
                const toastID=toast.loading("Logging Out")
                const res = await axios.post(
                  `${import.meta.env.VITE_BACKEND_URL}/logout`,
                  {}, // request body (empty)
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );

                localStorage.removeItem("SBtoken");
                // Navigate manually after success
                if (res.status === 200) {
                  navigate("/login");
                  toast.success(res.data.message,{id:toastID});
                }
              } catch (error) {
                alert("Error logging out. Please try again.");
              }
            }}
            className="flex items-center gap-1 p-1 border-amber-300 hover:bg-gray-400 hover:rounded-md cursor-pointer transition-colors"
          >
            <LogOut className="w-10 h-10" />
            <h3 className="text-lg">LogOut</h3>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
