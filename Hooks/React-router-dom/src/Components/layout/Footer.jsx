import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#242424] text-white p-6 font-light text-[12px]">
      <h1 className="text-[15px]">
        Welcone to the Jung EcomStore, your ultimate destination for
        cutting-edge gadgets!
      </h1>
      <div className="flex justify-between py-3">
        <div>
          <h1 className="font-semibold">Shopping</h1>
          <ul className="flex flex-col gap-2 cursor-pointer mt-2">
            <li>Computer Store</li>
            <li>Laptop Store</li>
            <li>Accessories</li>
            <li>Sales & Discount</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">Experience</h1>
          <ul className="flex flex-col gap-2 cursor-pointer mt-2">
            <li>Contact Us</li>
            <li>Payment Method</li>
            <li>Delivery</li>
            <li>Return and Exchange</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">Newsletter</h1>
          <p>Be the first to know about new arrivals, sales & promos!</p>
          <input
            type="text"
            placeholder="Your Email"
            className="bg-gray-700 w-full  text-[12px] rounded mt-2 outline-none p-1.5"
          />
        </div>
      </div>
      <hr className="mt-3 text-gray-600" />
      <h1 className="text-center pt-3 text-[#6e6e6e] font-semibold">
        Design and code by Mr Jung
      </h1>
    </div>
  );
};

export default Footer;
