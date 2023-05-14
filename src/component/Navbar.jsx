import React, { useEffect, useRef } from 'react';
import clock from '../assets/images/Vector (4).png'
import cart from '../assets/images/Vector cart.png'
import { gsap } from "gsap";


const Navbar = () => {

    const navbarRef = useRef(null);

  useEffect(() => {
    gsap.to(navbarRef.current, {
      duration: 2,
      backgroundColor: "rgb(187 247 208)",
    });
  }, []);

    return (
        <div ref={navbarRef} className='border-b-2 bg-green-50'>
            <div className="navbar md:w-9/12 mx-auto pt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                            <li><a>About Us</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    EN
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>BN</a></li>
                                    <li><a>US</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className='flex'>
                        <a className="font-bold normal-case text-xl md:text-3xl space-x-0 text-green-800">FoodTime</a>
                        <img className='w-2 h-3 md:w-3 md:h-5' src={clock} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex font-bold">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                        <li tabIndex={0}>
                            <a>
                                EN
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>BN</a></li>
                                <li><a>US</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <button className="bg-green-800 px-4 py-0 md:px-7 md:py-2 rounded-3xl text-lg font-bold text-white" style={{ fontFamily: 'normal' }}>Login</button>

                    <button className="bg-green-800 p-2 rounded-full text-lg font-bold text-white relative" style={{ fontFamily: 'serif' }}>
                        <img className='w-5 md:w-6' src={cart} alt="" />
                        <span className='bg-orange-500 rounded-full w-6 h-6 absolute bottom-7' style={{ fontFamily: 'normal' }}>2</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;