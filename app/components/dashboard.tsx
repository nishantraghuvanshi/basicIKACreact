'use client'
import Image from 'next/image'
import React from 'react'
import { FaUser } from "react-icons/fa";

//Replace the CSISlogo with better quality icon.

const Dashboard = () => {
  return (
    <div className='bg-[#222222] h-full min-h-screen'>
        <div className='flex gap-x-2 align-middle py-5 px-7'>
            <Image src="/CSISlogo.png" alt="CSIS logo" className='h-14 w-14' height={12} width={30}/>
            <Image src="/BITSlogo.png" alt="BITS logo" className='h-14 w-14' height={227} width={307}/>
            <h1 className='text-white text-2xl px-5 mt-3'>IKAC Web Portal</h1>
        </div>
        
        <div className='bg-[#2C2B3E] h-48 my-3 flex mx-8'>
            <FaUser  className='text-white m-2 h-40 w-40 max-h-40 max-w-40'/>
            <div className='flex flex-col gap-y-2 bg-[#2C2B3E] m-3'>
                <h1 className='text-white font-poppins text-2xl'>Name</h1>
                <p className='text-white font-poppins'>Professor Details</p>
                <h1 className='text-white'>Professor/Assistant Professor</h1>
            </div>
        </div>

        <div className='bg-[#2C2B3E] h-72 my-3 flex mx-8'>
            <h1 className='text-white m-3 font-semibold text-xl'>Events Attended</h1>

        </div>

        <div className='bg-[#2C2B3E] h-36 my-3 mx-8 '>
            <h1 className='text-white m-3 py-4 font-semibold text-xl'>Faculty Development</h1>
            <div className='flex align-middle gap-x-4 m-3 justify-evenly'>
                <input type="text" className='rounded-md w-3/4'/>
                <div className='flex gap-x-3'>
                <button className='bg-white rounded-md p-2.5 '>Add New</button>
                <button className='bg-white rounded-md p-2.5'>View Data</button>
                <button className='bg-white rounded-md p-2.5'>Generate Report</button>
                </div>
            </div>
        </div>

        <div className='bg-[#2C2B3E] h-72 my-3 flex mx-8'>
            <h1 className='text-white m-3 font-semibold text-xl'>Invited Guests</h1>
        </div>

        <div className='bg-[#2C2B3E] h-72 my-3 flex mx-8 '>
            <h1 className='text-white m-3 font-semibold text-xl'>Student Participation and Awards</h1>
        </div>
        <div className='h-2 bg-[#222222] ' />
        
    </div>
  )
}


export default Dashboard