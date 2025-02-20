
const Navigation = () => {
  return (
    <nav className="p-6 pt-10 w-[100%] backdrop-blur-sm bg-[#ffbd59]/10">
      <ul className="flex justify-center gap-8">
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 font-medium"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 font-medium"
          >
            Start Project
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 font-medium"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 font-medium"
          >
            Project Timeline
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
