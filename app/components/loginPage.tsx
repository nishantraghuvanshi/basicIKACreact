import Image from 'next/image'
import React from 'react'

//Replace the CSISlogo with better quality image.

const LoginPage = () => {
  return (
    <div className='bg-[#222222] min-h-screen'>
      <div className='w-full flex justify-center'>
      <h1 className='font-semibold text-white font-poppins font- py-24 text-5xl'>IKAC Web Portal</h1>
    </div>
    <div className='flex gap-x-8 justify-center align-middle'>
        <Image src="/CSISlogo.png" alt="CSIS logo" height={122} width={307} className='max-h-70 max-w-70 rounded'/>
        <div className='absolute mt-28 w-0.5 h-28 bg-white'></div>
        <Image src="/BITSlogo.png" alt="BITS logo" height={227} width={307} className='max-h-70 max-w-70 rounded'/>
    </div>
    <div className='flex flex-col justify-center p-5 gap-2'>
      <button className='bg-blue-500 font-poppins hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4 m-auto'>Login with google</button>
      <p className='m-auto text-white font-poppins'>Already have an account? <a href='/'><u>Log In</u></a></p>
    </div>
    </div>
  )
}

export default LoginPage