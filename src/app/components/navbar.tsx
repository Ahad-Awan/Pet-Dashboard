"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const navbar = () => {
  return (
    <div className="bg-gray-200 text-[#264653] p-5 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold ml-10 sm:ml-10 lg:ml-2">Pet Profile</h1>
      <div className="flex items-center gap-5">
        <span>
          <IoIosNotificationsOutline className="text-3xl" />
        </span>
        <span>
          <FaUserCircle className="text-3xl" />
        </span>
      </div>
    </div>
  );
};

export default navbar;
