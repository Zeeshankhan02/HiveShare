import { Logo } from './svgs/Logo'
import { Globe, Instagram, IsFavorite, LinkedIn, Twitter, Youtube } from './svgs/icons'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  
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
    },  {
      text: "Twitter",
      icon: Twitter
    }, {
      text: "Linkedin",
      icon: LinkedIn
    }, {
      text: "Favorites",
      icon: IsFavorite
    }
  ]

  return (
  <>
     {/* Sidebar */}
     <div className=" min-h-full bg-amber-400 p-6">
        <a href='/' className="inline-flex items-center">
          <div className="font-licorice font-black text-2xl">BrainBox</div>
          <Logo />
        </a>

        <div className="flex flex-col gap-1 justify-center mt-12">
          {sidebarItems.map((item, idx) => (
            <NavLink
              to={`/saved/${item.text.toLowerCase()}`}
              key={idx}
              className={({ isActive }) =>
                `flex items-center gap-2 p-1 border-b-2 border-amber-300 hover:bg-gray-400 hover:rounded-md cursor-pointer transition-colors ${isActive ? "bg-gray-200 rounded-md" : ""
                }`
              }
            >
              <item.icon className={`w-10 h-10`} />
              <h3 className="text-lg">{item.text}</h3>
            </NavLink>
          ))}
        </div>

      </div>
  </>
  )
}

export default Sidebar