// This part of the code defines the Header component.
// It will display the site title and navigation links.
// It uses React for component structure and Tailwind CSS for styling.
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      {/* This part of the code creates a container for the header content,
          using flexbox to align items and justify them between the edges. */}
      <div className="container mx-auto flex justify-between items-center">
        {/* This part of the code displays the site title.
            It's styled with a larger font size and bold weight. */}
        <h1 className="text-2xl font-bold">Lawson Punting</h1>
        {/* This part of the code defines the navigation menu.
            It uses a 'nav' semantic HTML element. */}
        <nav>
          {/* This part of the code creates an unordered list for the navigation links.
              It uses flexbox to display links in a row with spacing between them. */}
          <ul className="flex space-x-4">
            {/* This part of the code defines individual navigation links.
                Each 'li' contains an 'a' tag for the hyperlink.
                The links have a hover effect to change text color. */}
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#training" className="hover:text-gray-300">Training Sessions</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 