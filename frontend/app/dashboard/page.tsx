"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="min-h-screen bg-black"
      
    >
  <Navbar/>
    </div>
  );
};

export default Dashboard;
