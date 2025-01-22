const Login = () => {
    return (
      <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Circles */}
        <div className="absolute top-5 left-1/4 w-36 h-36 bg-pink-300 rounded-full floating-circles"></div>
        <div className="absolute bottom-16 right-1/3 w-44 h-44 bg-green-300 rounded-full rotating-circles"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-yellow-300 rounded-full floating-circles"></div>
        
        {/* Content */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 fade-in">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form>
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
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  