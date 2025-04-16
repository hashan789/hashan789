import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { BriefcaseBusiness , Home, UserCircle, AppWindow, Mail, Menu  } from "lucide-react";

function Navbar(){

  const sections = [
    {
      name: "Home",
      icon: <Home size={20} className="text-white lg:hidden"/>
    },
    {
      name: "About",
      icon: <UserCircle size={20} className="text-white lg:hidden"/>
    },
    {
      name: "Experience",
      icon: <BriefcaseBusiness size={20} className="text-white lg:hidden"/>
    },
    {
      name: "Projects",
      icon: <AppWindow size={20} className="text-white lg:hidden"/>
    },
    {
      name: "Contact",
      icon: <Mail size={20} className="text-white lg:hidden"/>
    }
  ]

  const [ isShowMenu, setIsShowMenu ] = useState(false);
  const [navColor, setNavColor] = useState({
    text : "text-white",
    bg : " ",
    shadow : " "
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setNavColor({
          text : "lg:text-gray-600 max-sm:text-white",
          bg : "bg-white",
          shadow : "shadow-md"
        }); // Change to any color
      } else {
        setNavColor({
          text : "text-white",
          bg : " ",
          shadow : " "
        }); // Default color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const toggleMenuBar = () => {

    setIsShowMenu(!isShowMenu);
  }

  return(
  <nav className={`fixed top-0 w-full ${navColor.shadow} z-10 transition-all duration-300 ${navColor.bg}`}>
    <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
      <h1 className={`text-xl font-bold text-workspace-light`}>Hash78</h1>
      <div className="lg:hidden sm:hidden max-sm:block" onClick={toggleMenuBar}><Menu size={40} className="text-workspace-light" /></div>
      <div className={`lg:space-x-6 lg:flex lg:justify-center lg:items-center max-sm:left-0 max-sm:p-4 max-sm:w-full max-sm:h-auto max-sm:bg-gray-600 max-sm:text-sm ${ isShowMenu ? 'max-sm:grid' : 'max-sm:hidden' } transition-all duration-300 max-sm:absolute max-sm:top-20 max-sm:text-white`}>
        {sections.map((section, index) => (
          <div key={index} className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:gap-3 max-sm:mb-3">
            {section.icon}
            <Link
              to={section.name.toLowerCase()}
              smooth
              className={`cursor-pointer ${navColor.text} hover:text-workspace-light transition-all duration-300`}
            >
              {section.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
