import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-10 text-white  mx-auto bg-slate-700">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2     lg:grid-cols-4 gap-8">
          <div>
            <h2 className=" font-semibold mb-4 text-blue-600 text-3xl">
              Online <span className="text-orange-500">Translator</span>
            </h2>
            <p className="text-sm">
              Online translation refers to the process of converting text or
              content from one language to another using internet-based tools or
              platforms.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-4 text-2xl">Resources</h2>
            <ul className="text-sm">
              <li className="hover:underline">Machine Translation</li>
              <li className="hover:underline">Dictionaries</li>
              <li className="hover:underline">Language Pairs</li>
            </ul>
          </div>
          <div>
            <h2 className=" font-semibold mb-4 text-2xl">For Customers</h2>
            <ul className="text-sm">
              <li className="hover:underline">Translation service</li>
              <li className="hover:underline">Online Document Translation</li>
              <li className="hover:underline">Business Translation</li>
              <li className="hover:underline">Technical Translation</li>
              <li className="hover:underline">Email Translation</li>
            </ul>
          </div>
          <div>
            <h2 className=" font-semibold mb-4 text-2xl">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-blue-500">
                <FaFacebook></FaFacebook>
              </a>
              <a href="#" className="text-xl hover:text-blue-500">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="#" className="text-xl hover:text-blue-500">
                <FaGithub></FaGithub>
              </a>
            </div>
            <div className="mt-10">
              <h2 className=" font-semibold mb-4 text-2xl">Contact Us</h2>
              <p className="text-sm">
                <div className="flex gap-3 items-center hover:underline">
                  <FaMailBulk /> contact@example.com
                  <br />
                </div>
                <div className="flex gap-3 items-center hover:underline">
                  <FaPhone className=""></FaPhone> <p>(123) 456-7890</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end mr-32">
        <input
          className="py-2 bg-slate-500 rounded-2xl rounded-r text-center"
          placeholder="@info.com"
          type="text"
          name=""
          id=""
        />
        <button className=" btn-success px-2 py-2 rounded-2xl rounded-s">
          Subscribe
        </button>
      </div>
      <div>
        <p className="text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} Online Translator Company. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
