import React from "react";

import DarkMode from "./darkmode";
import { Button } from "./button";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="pt-4 px-5 border-b-2 py-2 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <span class="text-2xl mr-5 font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-gray-100 to-gray-500">
            Nmn
          </span>

          <Button variant="ghost">About</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Get in Touch</Button>
        </div>

        <div className="flex justify-center items-center">
          <Button variant="outline" size="icon" className="text-xl mr-3">
            <FaXTwitter />
          </Button>
          <Button variant="outline" size="icon" className="text-xl mr-3">
            <FaGithub />
          </Button>
          <Button variant="outline" size="icon" className="text-xl mr-3">
            <FaLinkedinIn />
          </Button>

          <DarkMode className="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
