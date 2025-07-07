"use client";

import React from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="z-50">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
