'use client'
import React, { useEffect, useState, FormEvent } from 'react'
import { CiSearch } from "react-icons/ci";
import Footer from '@/components/Footer';
import Navbarr from '@/components/Navbarr';
import Image from 'next/image';
import * as timeago from 'timeago.js';

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsError, setJobsError] = useState(false);
  const [selectedJob, setSelectedJob] = useState();
  const [loadingData, setLoadingData] = useState();
  const [jobsCount, setJobsCount] = useState();
  const [formData, setFormData] = useState({
    keyword: 'Marketing',
    category: 'Marketing',
    geo: 'usa',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  async function onSubmit(event) {
    event.preventDefault();
    setupData();
    // ...
  }
  React.useEffect(() => {
    setupData();
  }, []);

  const setupData = async () => {
    setLoadingData(true);
    const response = await fetch('/api/jobs?' + new URLSearchParams({
      keyword: formData.keyword,
      category: formData.category.toLowerCase(),
      count: 10,
      geo: formData.geo
    }), {
      method: 'GET',
    })

    if (response.status === 200) {
      // Handle response if necessary
      const data = await response.json();
      setJobs(data.jobs);
      setJobsCount(data.jobCount);

    } else {
      // Handle error if necessary

    }
    setLoadingData(false);
  };

  const sortByDate = (event) => {
    const latestFirst = event.target.value === 'true';
    jobs.sort((a, b) => {
      if (latestFirst) {
        return new Date(a.pubDate) - new Date(b.pubDate)
      } else {
        return new Date(b.pubDate) - new Date(a.pubDate);
      }
    });
    setJobs([...jobs]);
  }

  return (
    <div>
      <Navbarr />
      <div className='bg-[#56BC80] py-[60px] '>
        <div className='max-w-screen-xl mx-auto'>
          <form onSubmit={onSubmit}>
            <div className='text-white text-4xl me-10'>
              Search Jobs
            </div>
            <div className='flex gap-5 items-center'>
              <div className=' bg-white p-3 rounded-lg flex gap-5 items-center px-10 py-4 h-[100px] ' >
                <div className='flex flex-col'>
                  <label className='text-xs font-bold'>Keywords</label>
                  <input onChange={handleChange} className='text-xs font-light focus:outline-none  inline md:mr-2 h-[40px] w-80' placeholder='Search jobs,skills' name='keyword' type='text' />
                </div>
                <div className='flex flex-col'>
                  <label className='text-xs font-bold'>Category</label>
                  <select className='text-sm border rounded-xl h-[40px] w-80 px-2' name='category' onChange={handleChange} value={formData.category}>
                    <option value={'marketing'}>Marketing</option>
                    <option value={'data-science'}>Data Science</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='text-xs font-bold'>Location</label>
                  <select className='text-sm border rounded-xl h-[40px] w-80 px-2' name='geo' onChange={handleChange} value={formData.geo}>
                    <option value={'usa'}>USA</option>
                    <option value={'uk'}>United Kingdom</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='text-xs font-bold'>&nbsp;</label>
                  <button className='border-2 px-4 py-2 text-white bg-[#56BC80] ml-4 rounded-lg text-sm' type='submit'>Find Jobs</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-[#f1f1f1] py-[60px] pt-10'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='grid grid-cols-2'>
            <p className='text-2xl font-semibold mb-10'>Jobs List</p>
            <div className='flex flex-col items-end'>
              <label className='text-xs font-semibold'>Sort By</label>
              <select className='text-sm border rounded-xl h-[30px] px-2' onChange={sortByDate}>
                <option value={true}>Latest First</option>
                <option value={false}>Oldest First</option>
              </select>
            </div>
          </div>
          <div className='md:grid md:grid-cols-1 gap-5 '>
            {!loadingData && !jobsError && jobs && jobs.length > 0 && jobs.map(job => (

              <ul key={job.id} className='rounded-xl shadow-xl bg-white text-black py-5 px-10  '>

                <li className='text-lg font-semibold mt-2'>
                  {job.jobTitle}
                </li>
                <li className='text-sm font-semibold mt-2'>
                  {job.companyName}
                </li>
                <li className=' my-2'>
                  <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded p-4'>{job.jobType}</span>
                </li>
                <li><small dangerouslySetInnerHTML={{ __html: job.jobExcerpt }}></small></li>
                <li className='text-xs mt-2'>Job Location: <em>{job.jobGeo}</em></li>
                <li className='grid grid-cols-2 '>
                  <small className='items-start align-middle mt-6 italics'>Posted {timeago.format(job.pubDate)}</small>
                  <div className='text-right'>
                    <button className=' text-xs py-2 px-4 rounded-lg text-white bg-[#56BC80] mt-2 '>Apply Here</button>
                  </div>
                </li>
              </ul>
            ))}
            {jobsError && <p>Failed to load jobs</p>}
            {loadingData &&
              <div class="border bg-gray-100 shadow-xl rounded-md p-16 w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="space-y-3">
                      <div class="grid grid-cols-2 gap-4">
                        <div class="h-4 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-gray-300 rounded col-span-1"></div>
                        <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                      </div>
                    </div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                        <div class="h-2 bg-gray-300 rounded col-span-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {jobsCount === 0 && !loadingData && 
              <div class="bg-gray-100 rounded-md p-16 w-full mx-auto">
                <p className='text-center'>No jobs found</p>
              </div>
            }
          </div>
        </div>
      </div>



      <Footer />
    </div >
  )
}
export default Page;