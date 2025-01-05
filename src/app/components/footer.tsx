import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col mt-[100px] ml-[48px] h-[505px]">
      <footer className="bg-white text-black py-10 px-5 border-t border-gray-200">
        <div className="container grid grid-cols-1 md:grid-cols-3 w-[1133px] gap-8">
          <div>
            <h2 className="font-bold text-lg mb-3">Furniro.</h2>
            <p className="text-gray-600 text-sm">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Links</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Help</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Newsletter</h3>
            <div className="flex items-center border-b border-gray-400 py-1">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-2 py-1 text-sm focus:outline-none"
              />
              <button className="ml-2 text-sm font-semibold">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="border-t border-dotted border-gray-300 mt-8"></div>
      </footer>

      <div className="h-[59px] w-[1240px]  mt-8 text-left text-sm text-gray-500">
       
          <p>2023 Funiro. All rights reserved</p>
      
      </div>
    </div>
  );
};

export default Footer;