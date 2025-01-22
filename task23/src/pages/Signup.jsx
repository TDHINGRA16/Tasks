const Signup = () => {
    return (
      <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full floating-circles"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full rotating-circles"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-red-300 rounded-full floating-circles"></div>
        
        {/* Content */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 fade-in">
          <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
  