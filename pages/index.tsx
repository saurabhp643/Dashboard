import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (

    
    <div className=" ">
      <div className="flex items-center m-2 bg-white">
        <div className="w-1.5 h-1/4 md:w-1/12 bg-green-800 text-white rounded-l-lg">
          <h2 className="h-[42px] w-[16px] text-lg font-semibold ml-4 mt-2">
            Filters
          </h2>
          {/* Add filter options here */}
        </div>
        <div className="md:w-1/4 p-2 border-green-900 rounded">
          <select
            className="bg-gray-50 border px-2 mx-4 border-gray-300  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select Range</option>
          </select>
        </div>
        <div className="w-full md:w-1/4 p-4 mx-8">
          <input
            type="radio"
            className="rounded-full w-5 h-5 border-2 border-gray-300  "
            id="contactChoice1"
            name="contact"
            value="email"
          />
          <label className="ml-4">Summary</label>
        </div>
        <div className="w-full md:w-1/4 p-4 mx-8">
          <input
            type="radio"
            className="rounded-full w-5 h-5 m border-2 border-gray-300  relative"
            id="contactChoice1"
            name="contact"
            value="email"
          />
          <label className="ml-4">Branch Wise</label>
        </div>
      </div>

      <div className="flex bg-white ">
      <div className="flex items-center border-l-4 border-red-500 p-4 rounded-sm">
        <div className="flex flex-row gap-4">
          <div className="font-bold  text-green-800">Consultant Count</div>
          <div className="flex items-center">
         
            <span>Logo 1</span>
          </div>
        </div>
      </div>
      <div className="flex items-center border-l-4 border-blue-500 p-4 ml-4 mr-4">
      <div className="flex flex-row gap-4">
          <div className="font-bold text-green-800">Consultants</div>
          <div className="flex items-center ">
         
            <span className="ml-4">Logo 2</span>
          </div>
        
        </div>  
      </div>
      <div className="flex items-center border-l-4 border-green-500 p-4 ml-4 mr-4">
      <div className="flex flex-row gap-4">
          <div className="font-bold  text-green-800">Labs</div>
          <div className="flex items-center ">
           
            <span className="ml-8">Logo 3</span>
          </div>
        </div>
      </div>
      <div className="flex items-center border-l-4 border-yellow-500 p-4 ml-4">
      <div className="flex flex-row gap-4">
          <div className="font-bold  text-green-800">DietPlans</div>
          

          <div className="flex items-center m-2">
            
            <span className="ml-2">Logo 4</span>
          </div>
        </div>
      </div>
    </div>
      

      <div className="container mt-2 border border-white-500 rounded-lg bg-white ">
      <div className="flex justify-between items-center mb-4 rounded-lg">
        <h1 className="text-2xl font-semibold m-4 text-gray-600">Consultant</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Down</button>
        </div>
      </div>
      <div className="shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Patient Count</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Labs</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Diet Plan</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Replace this with dynamic data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap border">10</td>
              <td className="px-6 py-4 whitespace-nowrap border">3</td>
              <td className="px-6 py-4 whitespace-nowrap border">6</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
