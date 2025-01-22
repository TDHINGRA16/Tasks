const Home = () => {
    return (
      <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Circles */}
        <div className="absolute top-5 left-1/4 w-36 h-36 bg-pink-300 rounded-full floating-circles"></div>
        <div className="absolute bottom-16 right-1/3 w-44 h-44 bg-purple-300 rounded-full rotating-circles"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-yellow-300 rounded-full floating-circles"></div>
        
        {/* Content */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center fade-in">
          <h1 className="text-3xl font-bold mb-4 text-black">Home</h1>
          <p className="text-gray-700 mb-6">
            Welcome to the home page! Discover features, explore options, and navigate seamlessly through our app.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  