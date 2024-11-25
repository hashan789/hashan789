import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-10">
    <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-xl font-bold text-blue-600">Hash78</h1>
      <div className="space-x-6">
        {["Home", "About", "experience", "Projects", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth
            className="cursor-pointer text-gray-600 hover:text-blue-600"
          >
            {section}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
