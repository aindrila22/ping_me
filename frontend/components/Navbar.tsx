"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex justify-between items-center w-full h-32 text-white">
      <div>
        {session && (
          <span className="text-2xl tracking-normal py-10 font-semibold">
            {session.user.name}
          </span>
        )}
      </div>
      <button
        onClick={() => signOut()}
        className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
