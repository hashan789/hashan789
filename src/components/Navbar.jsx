import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { BriefcaseBusiness , Home, UserCircle, AppWindow, Mail, Menu  } from "lucide-react";

function Navbar(){

  const sections = [
    {
      name: "Home",
      icon: <Home size={20} className="text-white lg:hidden max-lg:hidden max-md:inline group-hover:text-workspace-light"/>
    },
    {
      name: "About",
      icon: <UserCircle size={20} className="text-white lg:hidden max-lg:hidden max-md:inline group-hover:text-workspace-light"/>
    },
    {
      name: "Experience",
      icon: <BriefcaseBusiness size={20} className="text-white lg:hidden max-lg:hidden max-md:inline group-hover:text-workspace-light"/>
    },
    {
      name: "Projects",
      icon: <AppWindow size={20} className="text-white lg:hidden max-lg:hidden max-md:inline group-hover:text-workspace-light"/>
    },
    {
      name: "Contact",
      icon: <Mail size={20} className="text-white lg:hidden max-lg:hidden max-md:inline group-hover:text-workspace-light"/>
    }
  ]

  const [ isShowMenu, setIsShowMenu ] = useState(false);
  const [navColor, setNavColor] = useState({
    text : "lg:text-black max-md:text-white",
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
          text : "lg:text-black max-md:text-white",
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
    <div className="max-w-6xl mx-auto flex justify-center items-center py-4 px-6">
      <div className="lg:hidden max-lg:hidden max-md:w-screen max-md:flex max-md:justify-end" onClick={toggleMenuBar}><Menu size={40} className="text-workspace-light" /></div>
      <div className={`lg:gap-[40px] lg:flex lg:justify-center lg:items-center max-lg:gap-3 lg:py-[20px] lg:px-[40px] lg:rounded-full max-lg:flex max-lg:justify-center max-lg:items-center max-md:left-0 max-md:p-4 max-md:h-screen max-md:bg-black max-sm:text-sm max-md:pt-5 max-md:block max-md:w-1/2 ${ isShowMenu ? 'max-md:translate-x-0' : 'max-md:-translate-x-full' } transition-all duration-300 max-md:absolute max-md:top-0 max-md:text-white`}>
      <div className="max-md:text-lg max-md:font-bold max-md:text-workspace-light max-md:block md:hidden max-md:pt-4 max-md:pl-4">Hash78</div>
        {sections.map((section, index) => (
          <div key={index} className="max-lg:flex group max-lg:items-center max-lg:gap-3 max-md:mb-5 max-lg:mt-3 max-md:px-4">
            {section.icon}
            <Link
              to={section?.name?.toLowerCase()}
              smooth
              className={`cursor-pointer ${navColor.text} group-hover:text-workspace-light transition-all duration-300`}
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
