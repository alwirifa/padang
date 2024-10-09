import React from "react";
// import Search from "../search";

function DashboardHeader() {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="w-full">
        {/* <Search placeholder="Search ..."/> */}
      </div>
      <div className="flex items-center justify-end gap-4 w-full">
        <div className="bg-black h-16 w-2 mr-6" />

        <div className="text-4xl font-bold p-4 px-5 rounded-full max-h-max max-w-max bg-[#9CC2E5]">
          EF
        </div>

        <div className="w-[15vw]">
          <h1 className="text-2xl font-poppins font-bold">
            Eggi Firman Saputran
          </h1>
          <p className="text-xl">Staff Admin</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
