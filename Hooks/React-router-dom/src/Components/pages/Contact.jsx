import React from "react";
import contactImage from "../../images/contact.png";

const Contact = () => {
  return (
    <div className="flex justify-around items-center m-3">
      <div className="">
        <div className="mb-7">
          <h1 className="text-5xl font-semibold">Contact</h1>
          <h2>Get in touch, we are always here to help you.</h2>
        </div>

        <div>
          <form method="POST" action="/contact" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Full name</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                placeholder="Enter full name"
                className="outline-none border text-[13px] text-gray-700 border-gray-800 p-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                placeholder="abc@exm.com"
                className="outline-none border text-[13px] text-gray-700 border-gray-800 p-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="We are always here to help you"
                className="outline-none border text-[13px] border-gray-800 p-2 text-gray-700 h-30"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-700 text-white rounded px-2 py-1 hover:bg-red-800 cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <div>
        <figure>
          <img src={contactImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Contact;
