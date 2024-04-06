import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className=' bg-slate-200'>
    <div className='mt-10 px-6 pt-6 lg:grid lg:grid-cols-3'>
      <div>
        <Image src={'/logo1.png'} width={60} height={50} alt="logo" />
        <p className='text-xs leading-6 mt-6 lg:pr-20'>Find jobs on us, the job search app built to help you every step of the way. Get free access to millions of job postings personalize your search and submit job applications</p>
      </div>
      <div className='flex mt-8'><div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Discover</p>
        <Link href='/howitworks' className='block'>How it Works</Link>
        <Link href='/howitworks' >Home for Business</Link>
        <Link href='/howitworks' className='block'>Earn Money</Link>
        <Link href='/howitworks'>New User FAQ</Link>
      </div>
      <div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Company</p>
      <Link href='/howitworks'>About US</Link>
      <Link href='/howitworks' className='block'>Careers</Link>
      <Link href='/howitworks' className='block'>Terms & Conditions</Link>
      <Link href='/howitworks' className='block'>Blog</Link>
      <Link href='/howitworks' className='block'>Contact Us</Link>
      <Link href='/howitworks' className='block'>Privacy Policy</Link>
      <Link href='/howitworks' className='block'>Investors</Link>
      </div></div>
     <div className='flex mt-8'> <div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Exisiting Members</p>
      <Link href='/howitworks' className='block'>Post a Task</Link>
      <Link href='/howitworks' className='block'>Browse Tasks</Link>
      <Link href='/howitworks' className='block'>Login</Link>
      <Link href='/howitworks' className='block'>Support Centre</Link>
      <Link href='/howitworks' className='block'>Merchandise</Link>
      </div>
      <div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Popular Categories</p>
      <Link href='/howitworks' className='block'>Handyman Services</Link>
      <Link href='/howitworks' className='block'>Cleaning Services</Link>
      <Link href='/howitworks' className='block'>Delivery Services</Link>
      <Link href='/howitworks' className='block'>Removalists</Link>
      <Link href='/howitworks' className='block'>Gardening Services</Link>
      <Link href='/howitworks' className='block'>Automative</Link>
      <Link href='/howitworks' className='block'>Assembly Services</Link>
      <Link href='/howitworks' className='block'>All Services</Link>
      </div></div>
      
    </div>
    <div className='mt-10  text-xs text-center'>©️All rights reserved</div>
    </section>
  )
}

export default Footer