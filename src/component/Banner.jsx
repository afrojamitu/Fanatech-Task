import React from 'react';
import './Banner.css'
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='banner-leaf-bg bg-green-50'>
            <div className='md:w-9/12 mx-auto grid md:grid-cols-2 items-center justify-center gap-3'>
                <div className='my-10 space-y-5 mx-10'>
                    <h1 className='text-5xl font-bold text-[#396C03]'>Order Food Online From Your Favorite Local Restaurant</h1>
                    <p className='text-xl' style={{ fontFamily: 'serif' }}>Freshly made food delivered to your door.</p>

                    <div className='relative flex items-center'>
                        <button className='bg-orange-600 w-9 h-9 rounded-full absolute top-1 left-1'></button>
                        <input type="text" placeholder='Enter location' className=' py-2 px-12 rounded-full w-full border-2' />
                        <button className='bg-[#396C03] px-4 py-2 text-white flex items-center rounded-full absolute right-0'> <FaSearch className='w-6' />Search</button>
                    </div>
                </div>

                <div className='my-10 relative'>
                    <img src="https://i.ibb.co/H2Ndfwj/banner-bg.png" alt="" />
                    <div className='bg-base-100 border border-b-0 rounded py-3 px-5 shadow-xl w-44 absolute md:top-0 -top-3 right-10 md:right-28'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8' src="https://i.ibb.co/hVrSLgs/Vector-1.png" alt="" />
                            <p className='text-2xl font-bold'>200K+</p>
                        </div>
                        <p>People Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;