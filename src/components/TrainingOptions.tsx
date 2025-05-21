// This part of the code defines the structure for a single training option.
// It's an interface that ensures each training option object has the necessary properties.
interface TrainingOption {
  id: number;
  title: string;
  duration?: string; // Optional, as not all titles might have it explicitly
  description: string;
  price: string;
  priceDetails?: string; // e.g., "/athlete"
}

// This part of the code lists all the available training options.
// Each option is an object conforming to the TrainingOption interface.
const trainingOptionsData: TrainingOption[] = [
  {
    id: 1,
    title: "1-on-1 Punting/Kicking Session",
    duration: "45 minute",
    description: "Focused individual coaching to refine your technique and consistency.",
    price: "$45",
  },
  {
    id: 2,
    title: "1-on-1 Punting/Kicking Session",
    duration: "90 minute",
    description: "Extended individual coaching for in-depth skill development.",
    price: "$65",
  },
  {
    id: 3,
    title: "1-on-1 Punting/Kicking Session + Film Breakdown",
    duration: "90 minute",
    description: "Combines on-field coaching with detailed in-person film analysis.",
    price: "$85",
  },
  {
    id: 4,
    title: "Group Punting/Kicking Session",
    duration: "1 Hour",
    description: "Dynamic group training for 2-5 athletes. Learn and compete together.",
    price: "$30",
    priceDetails: "/athlete",
  },
  {
    id: 5,
    title: "1-on-1 Virtual Film Breakdown",
    description: "Remote analysis of your game or practice film with expert feedback.",
    price: "$20",
  },
];

// This part of the code defines the TrainingOptions component.
// It will display a list of training options using a card-based layout.
const TrainingOptions = () => {
  return (
    // This part of the code is the main container for the training options section.
    // It has an ID for direct navigation, padding, and a light background.
    <section id="training" className="py-12 md:py-20 bg-gray-50 px-4">
      {/* This part of the code is an inner container for managing width and centering. */}
      <div className="container mx-auto">
        {/* This part of the code is the title for the section.
            It's centered and styled with a large, bold font. */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Training Packages
        </h2>
        {/* This part of the code creates a grid layout for the training option cards.
            It uses Tailwind's grid utilities for responsiveness: 1 column on small screens,
            2 on medium, and 3 on large screens, with spacing between cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This part of the code maps over the trainingOptionsData array
              to create a card for each training option. */}
          {trainingOptionsData.map((option) => (
            // This part of the code defines a single training option card.
            // It's styled with a white background, rounded corners, shadow, and padding.
            // It uses flexbox to arrange content vertically and ensure the button is at the bottom.
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* This part of the code displays the title and duration of the training option. */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {option.duration ? `${option.duration} ` : ""}
                  {option.title}
                </h3>
                {/* This part of the code displays the description of the training option. */}
                <p className="text-gray-600 mb-4 text-sm">
                  {option.description}
                </p>
              </div>
              <div>
                {/* This part of the code displays the price of the training option. */}
                <p className="text-2xl font-bold text-blue-600 mb-6">
                  {option.price}
                  {option.priceDetails && (
                    <span className="text-sm font-normal text-gray-500">
                      {option.priceDetails}
                    </span>
                  )}
                </p>
                {/* This part of the code is a call-to-action button for booking the session. */}
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Book This Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingOptions; 