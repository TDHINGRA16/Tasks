const Dashboard = () => {
    return (
      <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full floating-circles"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300 rounded-full rotating-circles"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-red-300 rounded-full floating-circles"></div>
        
        {/* Content */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center fade-in">
          <h1 className="text-3xl font-bold mb-4 text-black">Dashboard</h1>
          <p className="text-gray-700 mb-6">
            Welcome to your dashboard! Here you can manage your profile, track your activities, and access key tools.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              View Reports
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
              Manage Profile
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  