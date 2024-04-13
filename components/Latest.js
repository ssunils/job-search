'use client'
import Image from 'next/image';
import React from 'react'

const Latest = () => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    async function fetchJobs() {
      const res = await fetch('/api');
      const data = await res.json();
      setJobs(data.jobs);
    }

    fetchJobs();
  }, []);    
    
      return (
        <div className='bg-[#56BC80] text-white mt-6 pb-4'>
        <div className='text-center text-lg font-semibold py-8'>Latest Jobs Here</div>
        <div className='md:grid md:grid-cols-3'>
            {jobs && jobs.map(job => (
             
                <ul key={job.id} className='border-2 rounded-lg bg-white text-black m-4 p-4  '>
                <li  className='mt-2'><Image src={'/Ellipse1.png'} height={50} width={50} alt="ellipse 1"></Image></li>
              <li className='border-2 text-red-500 text-xs bg-red-100 mt-2 p-1 rounded-lg w-fit'>{job.jobType}</li>
              <li  className='text-sm font-semibold mt-2'>{job.jobTitle}</li>
              <li className='text-xs mt-2'>{job.jobGeo}</li>
              <li><button className=' text-xs px-2 py-1 border-2 rounded-xl text-[#56BC80] mt-2 border-green-400'>Apply Here</button></li>
              </ul>
           
            ))}
         </div>
        </div>
      )
    
}

export default Latest