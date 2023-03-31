import React from 'react';

function Listing() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-between py-24">
        <h1 className=' text-2xl md:text-2xl font-bold'>Find A Listing : </h1>
    <div className="bg-gray-100 rounded-lg shadow-md p-6 m-6">
      <h2 className="text-xl font-bold mb-2">Basic Mathematics</h2>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="flex justify-between text-gray-500">
        <p>Deadline: 1 April, 2023</p>
        <p>Location: Rohini, New Delhi</p>
      </div>
      <a href='#' className="text-blue-500 hover:underline">Learn More</a>
    </div>

    <div className="bg-gray-100 rounded-lg shadow-md p-6 m-6">
      <h2 className="text-xl font-bold mb-2">Web Development 101</h2>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="flex justify-between text-gray-500">
        <p>Deadline: 1 April, 2023</p>
        <p>Location: Shastri Park, New Delhi</p>
      </div>
      <a href='#' className="text-blue-500 hover:underline">Learn More</a>
    </div>

    
    </div>
  );
}

export default Listing;
