// This part of the code defines the Header component.
// It will display the site title and navigation links.
// It uses React for component structure and Tailwind CSS for styling.
const Header = () => {
  return (
    // This part of the code defines the header element.
    // Updated to use a light background with a subtle shadow
    <header className="bg-white text-gray-800 p-4 shadow-sm border-b border-gray-100">
      {/* This part of the code creates a container for the header content,
          using flexbox to align items and justify them between the edges. */}
      <div className="container mx-auto flex justify-between items-center">
        {/* This part of the code displays the site title.
            It's styled with a larger font size and bold weight, with a subtle color accent. */}
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-cyan-500">Lawson</span> Punting
        </h1>
        {/* This part of the code defines the navigation menu.
            It uses a 'nav' semantic HTML element. */}
        <nav>
          {/* This part of the code creates an unordered list for the navigation links.
              It uses flexbox to display links in a row with spacing between them. */}
          <ul className="flex space-x-6">
            {/* This part of the code defines individual navigation links.
                Each 'li' contains an 'a' tag for the hyperlink.
                Updated with improved hover effects and active states. */}
            <li>
              <a href="#home" className="py-2 relative group">
                <span className="text-gray-800 font-medium group-hover:text-cyan-600 transition-colors duration-300">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#training" className="py-2 relative group">
                <span className="text-gray-800 font-medium group-hover:text-cyan-600 transition-colors duration-300">Training Sessions</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="py-2 relative group">
                <span className="text-gray-800 font-medium group-hover:text-cyan-600 transition-colors duration-300">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="py-2 relative group">
                <span className="text-gray-800 font-medium group-hover:text-cyan-600 transition-colors duration-300">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 