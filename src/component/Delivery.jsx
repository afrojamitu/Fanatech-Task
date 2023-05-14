import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Delivery.css';

const Delivery = () => {

    return (
        <div className='md:w-9/12 md:mx-auto mx-10'>
            <div className='grid md:grid-cols-2 md:gap-5 items-center'>
                <div className='space-y-4 mt-12'>
                    <h1 className='text-5xl font-bold text-[#396C03]'>Explore Your Favorite City's Food</h1>
                    <p className='text-xl' style={{ fontFamily: 'serif' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nesciunt deserunt eaque veritatis explicabo! Nulla quisquam voluptates iure rem distinctio aut reiciendis aliquid et hic ex in cum. </p>

                    <button className='bg-[#396C03] px-6 py-2 text-white flex items-center rounded-full'>Explore <FaArrowRight className='w-8' /></button>
                </div>

                <div className='city-bg relative'>
                    <img className='absolute md:bottom-20 bicycle-img'  src="https://i.ibb.co/x1gH1sT/bicycle-img.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Delivery;