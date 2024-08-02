import React from "react";
import Search from "../search";

function DashboardHeader() {
  return (
    <div className="w-full p-6 flex max-h-max justify-between">
      <Search />
      <div className="flex items-center gap-4">

      <div className="bg-black h-12 w-2 mr-6"/>

      <div className="text-4xl font-bold p-4 px-5 rounded-full max-h-max max-w-max bg-[#9CC2E5]">EF</div>
    
    <div>
      <h1 className="text-2xl font-poppins font-bold">Eggi Firman Saputran</h1>
    <p className="text-xl">Staff Admin</p>
    </div>
      </div>

    </div>
  );
}

export default DashboardHeader;
