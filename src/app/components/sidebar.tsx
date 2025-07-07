"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaDna,
  FaHeartbeat,
  FaShoppingBag,
  FaUserFriends,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const links = [
  { name: "Overview", path: "/", icon: <FaHome /> },
  { name: "DNA", path: "/dna", icon: <FaDna /> },
  { name: "Care", path: "/care", icon: <FaHeartbeat /> },
  { name: "Orders", path: "/orders", icon: <FaShoppingBag /> },
  { name: "Referrals", path: "/analysis", icon: <FaUserFriends /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
  { name: "Support & Help", path: "/support&help", icon: <FaQuestionCircle /> },
  { name: "Log Out", path: "/logout", icon: <FaSignOutAlt /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white bg-[#264653] p-2 rounded-md text-xl fixed"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-[#264653] text-white p-5 z-40 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <div>
          <h2 className="text-2xl font-bold mb-8 flex gap-2 items-center">
            <MdOutlinePets className="rotate-45 text-amber-300" /> PET DNA+
          </h2>

          <div className="ml-3 space-y-3 mb-3">
            <p className="text-md text-gray-400 font-medium mb-4">Your Pets</p>

            <div className="flex items-center space-x-6">
              {[
                { name: "Maxi", src: "/cat1.jpeg" },
                { name: "Flora", src: "/cat2.jpeg" },
              ].map((pet) => (
                <div key={pet.name} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={pet.src}
                      alt={pet.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-white">{pet.name}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-md text-white ml-10 cursor-pointer">
              <IoIosAddCircleOutline className="text-2xl" />
              <span>Add New</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            <p className="text-base text-gray-400 font-medium ml-3 mt-2">
              Main Menu
            </p>
            {links.slice(0, 5).map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={closeSidebar}
                className="p-2 rounded flex space-x-2 items-center hover:text-amber-300 hover:bg-[#2B5C6B]"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}

            <p className="text-base text-gray-400 font-medium ml-3 mt-4">
              Preferences
            </p>
            {links.slice(5).map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={closeSidebar}
                className="p-2 rounded flex space-x-2 items-center hover:text-amber-300 hover:bg-[#2B5C6B]"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      {isOpen && <div onClick={closeSidebar} className="fixed z-30 " />}
    </>
  );
};

export default Sidebar;
