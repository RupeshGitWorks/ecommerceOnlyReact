import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title firstWord={'ABOUT'} secondWord={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about-us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Style Up, we believe in empowering every individual to express their unique style effortlessly. Our collections blend contemporary trends with timeless appeal, offering pieces that elevate your wardrobe without compromising on comfort or quality.</p>
          <p>Each piece at Style Up is crafted with attention to detail, prioritizing high-quality fabrics and sustainable practices to ensure both style and longevity.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Style Up is to inspire confidence and creativity through fashion that’s accessible, sustainable, and uniquely expressive. We’re dedicated to empowering individuals to embrace their personal style, offering thoughtfully designed clothing that reflects modern trends while honoring classic elements. By prioritizing quality craftsmanship, ethical sourcing, and innovative design, we strive to make every piece a testament to our commitment to excellence and individuality. Style Up is more than a brand—it’s a movement toward conscious, authentic, and joyful style.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title firstWord={'WHY'} secondWord={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Style Up, quality assurance is at the heart of everything we do. We are committed to providing clothing that not only looks great but also meets the highest standards of durability and comfort. Each piece undergoes rigorous quality checks, from fabric selection to the final stitch, ensuring that it aligns with our promise of excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Style Up, we prioritize convenience to make your shopping experience as effortless and enjoyable as possible. Our user-friendly online store is designed to help you quickly find styles that suit your taste, with easy navigation, detailed product descriptions, and personalized recommendations.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Exceptional customer service is a core value at Style Up. We’re committed to supporting you at every step, ensuring that your experience with us is as satisfying as the styles you choose. Our dedicated support team is always here to assist, whether it’s answering product questions, guiding you through sizing, or resolving any concerns swiftly and professionally.</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About