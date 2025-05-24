import React from "react";

const NavBar = () => {
  return (
    <div className="max-w-full bg-stone-200">
      <div className="max-w-[80%]  mx-auto p-1 py-2">
        <div className="flex justify-between ">
          <div className="ml-2">
            <a href="/">Logo</a>
          </div>
          <div>
            <ul className="flex gap-2">
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact</a></li>
                <li> <a href="/">About</a></li>
            </ul>
          </div>
          <div className="mr-2">
            <a href="/" className="bg-blue-600 p-1 px-2 rounded-md text-stone-200 hover:bg-sky-600">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
