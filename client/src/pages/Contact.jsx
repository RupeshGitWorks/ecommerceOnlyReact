import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title firstWord={'CONTACT'} secondWord={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>1600 Amphitheatre Parkway <br/> Mountain View, California</p>
          <p className='text-gray-500'>Tel: (879) 777-1432 <br/> Email: admin@styleup.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Style Up</p>
          <p className='text-gray-500'>Learn more about Style Up and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact