import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {

//     var toggleOpen = document.getElementById('toggleOpen');
// var toggleClose = document.getElementById('toggleClose');
// var collapseMenu = document.getElementById('collapseMenu');


// function handleClick() {
//   if (collapseMenu.style.display === 'block') {
//     collapseMenu.style.display = 'none';
//   } else {
//     collapseMenu.style.display = 'block';
//   }
// }

// toggleOpen.addEventListener('click', handleClick);
// toggleClose.addEventListener('click', handleClick);

let [toggleOpen, settoggleClose] = useState(false);

const openNav = () =>{
   settoggleClose(!toggleOpen);
}

  return (
    <>
    <header className='sticky z-50 top-0 flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide '>
      <div className='flex flex-wrap items-center justify-between lg:gap-5 gap-2 w-full'>
       
        <Link to="/" className="flex items-center">
                        <img
                            src="Logo.png"
                            className="mr-1 h-12"
                            alt="Logo"
                        />
                    </Link>

        <div id="collapseMenu" style={{display : toggleOpen ? "block" :"none"}}
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button onClick={openNav} id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

        
            <ul className=" font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
           <li className='mb-6 hidden max-lg:block'>
            <Link to="/" className="flex items-center">
                        <img
                            src="Logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link> 
                    </li>
                            <li>
                                <NavLink
                                to={"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                to={"/products"}
                                className={({isActive}) =>` block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    Products
                                </NavLink>
                            </li>
                             
                             <li>
                                
                                <NavLink
                                to={"/blog"}
                                className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    Blog
                                </NavLink>
                             </li>

                             <li>
                               
                                <NavLink
                                 to={"/about"}
                                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    About Us
                                </NavLink>
                             </li>
                             <li>
                                <NavLink 
                                to={"/how-it-works"}
                                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    How It Workes
                                </NavLink>
                             </li>
                            
                        </ul>
        </div>

        <div className='flex max-lg:ml-auto '>
        <Link
                        to="#"
                        className="bg-orange  border  border-orange text-white ml-2 focus:ring-4 focus:ring-transparent  rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Get started
                    </Link>
          <button onClick={openNav} id="toggleOpen" className='lg:hidden ml-0'>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    {/* <header className="sticky z-50 top-0">
            <nav className="bg-[#FAFAFA] border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="container m-auto">
              <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <Link to="/" className="flex items-center">
                        <img
                            src="Logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                   
                    <div
                        className="hidden justify-end items-center flex-1 w-full lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to={"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                to={"/products"}
                                className={({isActive}) =>` block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    Products
                                </NavLink>
                            </li>
                             
                             <li>
                                
                                <NavLink
                                to={"/blog"}
                                className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    Blog
                                </NavLink>
                             </li>

                             <li>
                               
                                <NavLink
                                 to={"/about"}
                                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    About Us
                                </NavLink>
                             </li>
                             <li>
                                <NavLink 
                                to={"/how-it-works"}
                                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange lg:p-0 ${isActive ? "text-orange active" : "text-gray-700"}`}>
                                    How It Workes
                                </NavLink>
                             </li>
                            
                        </ul>
                    </div>
                    <div className="flex items-center ml-10">
                    
                        <Link
                            to="#"
                            className="bg-orange  border  border-orange text-white ml-2 focus:ring-4 focus:ring-transparent  rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
              </div>
            </nav>
        </header> */}
    </>
  )
}

export default Header