import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2B2B2B] xl:pt-20 lg:pt-16 pt-10 ">
        <div className="container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="col-span-2 p-4">
            <img className="w-48" src="/footer/insure-depot-dark.png" alt="" />
            </div>
            <div className=" p-4">
             
              <div className="newsletter-wrapper">
                <p className="lg:text-2xl text-xl text-white mb-5">
                  Subscribe to our newsletter
                </p>
                <form action="" className="flex gap-5 items-start">
                  <div className="newslater-input-wapper flex items-stretch ">
                    <input
                      type="email"
                      className="border rounded-md rounded-e-none  py-4 text-sm px-5 md:w-96 w-60"
                      placeholder="Your Email"
                    />
                    <button className="bg-orange  rounded-md rounded-s-none py-2 text-sm px-5"><img src="/footer/arrow-right-circle.png" className="w-8 h-8" alt="" /></button>
                  </div>
                 
                </form>
              </div>
            </div>
            <div className="xl:col-span-1 col-span-2 p-4">
              <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-8 sm:gap-6 ">
                <div>
                  <h2 className="mb-6 text-2xl text-white">Navigation</h2>
                  <ul className="">
                    <li className="mb-4">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="mb-4">
                      <NavLink
                        to="/Products"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                        About Us
                      </NavLink>
                    </li>

                    <li className="mb-4">
                      <NavLink
                        to="/how-it-works"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                        How It Works
                      </NavLink>
                      </li>
                      <li className="mb-4">
                      <NavLink
                        to="/privacy-policy"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                        Privacy Policy
                      </NavLink>
                      </li>
                      <li >
                      <NavLink
                        to="/terms-and-conditions"
                        className={({ isActive }) =>
                          `text-base ${isActive ? "text-orange" : "text-[#AEAEAE]"}`
                        }
                      >
                       Terms and Conditions
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 lg:text-2xl text-xl text-white">Get in touch</h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <Link
                        to="tel:+1 800-227-0031"
                        className="hover:underline inline-flex gap-2  text-[#AEAEAE]"
                        rel="noreferrer"
                      >
                        <img src="/home/call.png" alt="" /> +1 800-227-0031
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link
                        to="mailto:insuredepot@mail.com"
                        className="hover:underline inline-flex gap-2 text-[#AEAEAE]"
                        rel="noreferrer"
                      >
                        <img src="/home/mail.png" alt="" />{" "}
                        insuredepot@mail.com
                      </Link>
                    </li>
                    <li className="mb-4">
                      <span className=" inline-flex gap-2  items-start text-[#AEAEAE]">
                        <img src="/home/location.png" alt="" />
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-2xl text-white">Follow Us</h2>
                  <ul className="text-gray-500 font-medium grid sm:grid-cols-3 grid-cols-3 gap-2 sm:gap-3  w-24">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline">
                        <img src="/footer/fb.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">
                        <img src="/footer/x.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">
                        <img src="/footer/in.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">
                        <img src="/footer/ig.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">
                        <img src="/footer/Tt.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">
                        <img src="/footer/YT.png" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-screen- xl p-4 py-6 lg:py-8">
           
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
              ©️ Insure Depot 2023, All rights reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
