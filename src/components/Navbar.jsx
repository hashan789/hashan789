import { Link } from "react-scroll";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar(){

  const [ isShowMenu, setIsShowMenu ] = useState(false);

  const toggleMenuBar = () => {

    setIsShowMenu(!isShowMenu);
  }

  return(
  <nav className="fixed top-0 w-full bg-white shadow-md z-10">
    <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-xl font-bold text-blue-600">Hash78</h1>
      <div className="lg:hidden sm:hidden max-sm:block" onClick={toggleMenuBar}><FaMinusCircle size={40} className="text-black" /></div>
      <div className={`lg:space-x-6 max-sm:p-4 max-sm:w-full max-sm:h-auto max-sm:bg-gray-600 max-sm:text-sm ${ isShowMenu ? 'max-sm:grid' : 'max-sm:hidden' } transition-all duration-300 max-sm:absolute max-sm:top-20 max-sm:left-3/4 max-sm:text-white`}>
        {["Home", "About", "experience", "Projects", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth
            className="cursor-pointer lg:text-gray-600 hover:text-blue-600"
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
