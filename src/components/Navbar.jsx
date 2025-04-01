import { Link } from "react-scroll";
import { FaMinusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar(){

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
          text : "text-gray-600",
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
      <h1 className="text-xl font-bold text-blue-600">Hash78</h1>
      <div className="lg:hidden sm:hidden max-sm:block" onClick={toggleMenuBar}><FaMinusCircle size={40} className="text-black" /></div>
      <div className={`lg:space-x-6 max-sm:p-4 max-sm:w-full max-sm:h-auto max-sm:bg-gray-600 max-sm:text-sm ${ isShowMenu ? 'max-sm:grid' : 'max-sm:hidden' } transition-all duration-300 max-sm:absolute max-sm:top-20 max-sm:left-3/4 max-sm:text-white`}>
        {["Home", "About", "experience", "Projects", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth
            className={`cursor-pointer lg:${navColor.text} hover:text-blue-600`}
          >
            {section}
          </Link>
        ))}
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
