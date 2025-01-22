import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const App=() => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100'>
        {/*Navbar*/}
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-white text-xl font-bold hover:text-white" >
              My React App.
              </Link>
             <ul className='flex space-x-4'>
              <li>
                <Link to="/" className='hover:underline text-white  hover:text-black'>
                Home 
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:underline  hover:text-black text-white">
                Dashboard 
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline  hover:text-black text-white">
                Login 
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline hover:text-black text-white">
                Signup 
                </Link>
              </li>
             </ul>
          </div>
        </nav>

        {/*Routes*/}
        <div className='container mx-auto p-4'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;