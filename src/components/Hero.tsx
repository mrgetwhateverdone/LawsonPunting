// This part of the code defines the Hero component, redesigned to match the new visual style.
// It features a two-column layout: one for a visual (image/graphic) and one for text content.
const Hero = () => {
  return (
    // This part of the code is the main container for the hero section.
    // It uses a light background (e.g., white or very light gray, similar to the reference).
    // Tailwind CSS classes are used for padding, flexbox layout, and alignment.
    <section className="bg-white py-12 md:py-20 px-4">
      {/* This part of the code is an inner container to manage width and centering.
          It uses flexbox for the two-column layout (md:flex-row).
          On smaller screens, columns will stack (flex-col-reverse to have text below image).
          Items are centered, and space is added between columns on larger screens. */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
        {/* This part of the code is the left column, intended for the visual element.
            It takes up half the width on medium screens and above (md:w-1/2).
            It includes a placeholder for an image or graphic. */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          {/* Placeholder for an image/graphic.
              You can replace this div with an <img> tag or a more complex component.
              The styling provides a visual cue for where the image will go. */}
          <div className="bg-gray-300 w-full max-w-md h-80 md:h-96 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
            Image/Graphic Placeholder
          </div>
        </div>

        {/* This part of the code is the right column, for text content.
            It takes up half the width on medium screens and above (md:w-1/2).
            Text is centered on small screens and left-aligned on medium screens and up. */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          {/* This part of the code is the main headline, adapted from the reference.
              It uses large, bold text. Each part of the headline is on a new line. */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Real training.
            <br />
            Real experience.
            <br />
            <span className="text-blue-600">Real results.</span>
          </h1>
          {/* This part of the code is for supporting text or a brief description.
              It's styled with a moderate font size and has some top margin. */}
          <p className="mt-6 text-lg text-gray-600">
            Elevate your punting and kicking game with personalized training from Lawson Punting.
          </p>
          {/* This part of the code is for call-to-action buttons.
              It uses flexbox to arrange buttons and centers them on small screens.
              We're adapting the app store buttons to more relevant CTAs. */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#training"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
            >
              Book a Session
            </a>
            <a
              href="#contact"
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 