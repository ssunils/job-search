"use client"
import React from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import useNavigate from 'react'
import Joblist from './Joblist';
import Link from 'next/link';


const About = () => {
  
  return (
    <section className='md:grid md:bg-slate-200 md:grid-cols-2 '>
    <div className='p-6 leading-6 bg-slate-200 lg:pr-0 lg:pl-24 lg:pb-0 xl:pl-52'>
   <div className='md:self-center  md:static'> <p className='text-2xl font-semibold '> Find your dream job with us    </p>
    <p className='text-xs mt-6 leading-8 text-justify lg:pr-16'>Find jobs on us, the jobs search app built to help you every step of the way. Get free access to millions of job postings personalize your search and submit job applications</p></div>
    <div className='md:flex md:items-center md:border-2 md:bg-white md:mt-8 md:rounded-xl md:absolute md:px-2 md:pb-2 '>
      <div className='border-2 bg-white px-4 py-5 rounded-xl mt-4  md:py-0 md:px-2 md:border-0  '>
        <CiSearch className='inline '/>
        <input className='text-xs  font-light focus:outline-none ml-1 ' placeholder='Job or keyword' type='search'></input></div>
      <div className='border-2 bg-white px-4 py-5 rounded-xl mt-4 md:py-0 md:px-2 md:border-0   '>
        <CiLocationOn className='inline' />
       <input className='text-xs font-light focus:outline-none ml-1' placeholder='City or Zip code'></input></div>
    <div className=''>
      <button className='border-2 mt-4 rounded-xl px-4 py-5 text-xs w-full text-white bg-[#56BC80] md:px-6 md:py-4 '>Search</button></div>
    </div>
    <div className='hidden md:inline md:relative md:top-32 md:left-4 '><p className='md:font-semibold md:text-xs'>Top Keyword:<span className='md:font-normal'> Front-End Developer, UI/UX</span></p></div>
    </div>
    <div className='hidden md:inline md:self-end md:pt-16'><Image src={'/Ellipse.png'} width={300} height={100} alt="ellipse"/></div>
    </section>
  )
}

export default About