import Image from 'next/image'
import React from 'react'
import Itemss from './Itemss'


const Feature = () => {
  return (
    <div>
        <p className='text-center p-6 text-xs'>Featured recruiter and employers</p>
       <div className='grid grid-cols-1 justify-items-center md:grid-cols-2  lg:grid-cols-4'> 
      <div className='my-4 '> <Image src='/google.png' width={100} height={50} alt="Google"  /></div>
      <div className='my-4 ' >   <Image src='/amazon.png' width={100} height={50} alt="amazon"  /></div>
      <div className='my-4 '>   <Image src='/slack.png' width={130} height={50} alt="slack"  /></div>
      <div className='my-4 '>   <Image src='/drop.png' width={150} height={50} alt="drop"  /></div>
       </div>
     <div className='p-4'>  <p className='text-center text-lg font-semibold mt-10'>How JOBS can help</p>
       <p className='text-center text-xs leading-6 my-6'>We are the largest independent job board, register your CV to apply today with simple search tool and instant job matches delivered to your inbox, it's never been easier to land a new job with us </p></div>
    <div className='px-4 '><Itemss /></div>
    </div>

  )
}

export default Feature