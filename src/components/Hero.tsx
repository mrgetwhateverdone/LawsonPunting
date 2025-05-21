// This part of the code defines the Hero component, redesigned to match the new visual style.
// It features a two-column layout: one for a visual (image/graphic) and one for text content.
const Hero = () => {
  return (
    // This part of the code is the main container for the hero section.
    // Updated to add a subtle background texture similar to the Pure Sweat Basketball site.
    <section className="bg-white py-12 md:py-20 px-4" style={{ backgroundImage: 'url("https://subtle-patterns.com/patterns/white-waves.png")' }}>
      {/* This part of the code is an inner container to manage width and centering.
          It uses flexbox for the two-column layout (md:flex-row).
          On smaller screens, columns will stack (flex-col-reverse to have text below image). */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
        {/* This part of the code is the left column, intended for the visual element.
            It takes up half the width on medium screens and above (md:w-1/2).
            Updated to more closely resemble a phone mockup. */}
        <div className="md:w-2/5 w-full mt-8 md:mt-0 flex justify-center">
          {/* Updated to more closely resemble a phone mockup with curved edges and a simulated screen */}
          <div className="bg-gray-100 w-full max-w-md h-80 md:h-[520px] rounded-[40px] shadow-lg flex items-center justify-center text-gray-500 border-4 border-gray-800 overflow-hidden relative">
            <div className="absolute top-0 w-32 h-6 bg-gray-800 rounded-b-lg"></div>
            <div className="px-4 py-3 h-full w-full flex flex-col">
              <div className="text-sm text-gray-400 mb-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Search
              </div>
              <div className="flex items-center mt-2">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">LP</div>
                <div className="ml-2">
                  <p className="text-sm font-semibold">Lawson Punting</p>
                  <div className="flex items-center text-xs">
                    <span className="mr-2">5.0</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-3 bg-blue-500 text-white text-xs py-1 px-3 rounded-lg w-20">Open</button>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                  <div key={i} className="bg-blue-100 rounded-lg h-20 flex items-center justify-center">
                    <div className="h-16 w-16 bg-blue-200 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* This part of the code is the right column, for text content.
            It takes up half the width on medium screens and above (md:w-1/2).
            Updated to match the "Every Course. Every Program..." style. */}
        <div className="md:w-3/5 w-full text-center md:text-left">
          {/* This part of the code is the main headline, updated to match the reference style.
              Each line is a separate segment with the same styling and pattern. */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Real training.
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Real experience.
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Real progress.
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Real details.
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-500 leading-tight mt-4">
              One coach.
            </h1>
          </div>
          
          {/* This part of the code is for call-to-action buttons.
              Updated to resemble the app store buttons in the reference, but adapted for our context. */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#training"
              className="flex items-center justify-center bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Session
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 