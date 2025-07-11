import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Auto Insurance',
    image: '/car.webp',
    fallback: '/car.jpg',
    link: '/autoinsurance',
    alt: 'Side view of a 2 door BMW coupe.',
    description: 'Passion is needed to keep the drive alive. Our passion is exceeding our clients expectations. We take care of all auto, bike, truck, boat, land and vehicle insurance needs.',
    style1: 'flex-1',
    style2: 'flex-1 my-auto'
  },
  {
    title: 'Home Insurance',
    image: '/house.webp',
    fallback: '/house.jpg',
    link: '/homeinsurance',
    alt: 'Front view of a home on a lake.',
    description: 'Having a roof over your head is a necessity, keeping a roof over your head is our goal. We take care of all Home and property insurance needs.',
    style1: 'flex-1 order-1 md:order-2',
    style2: 'flex-1 order-2 md:order-1 my-auto'
  },
  {
    title: 'Commercial Insurance',
    image: '/business.webp',
    fallback: '/business.jpg',
    link: '/commercialinsurance',
    alt: 'View of office buildings in a city.',
    description: 'Building up a business and keeping it there is an every day struggle. Let us show you how we can take away some of your stress by insuring your business and business property. We take care of all your Commercial insurance needs.',
    style1: 'flex-1',
    style2: 'flex-1 my-auto'
  },
]

const Services = () => {
  return (
    <div className='mx-4'>
      <h4 className='mb-8 text-2xl md:text-4xl text-center'>Our Services</h4>
      <div className='max-w-[1200px] mx-auto'>
        {services.map((item, key) => (
          <div key={key} className='flex flex-col md:flex-row gap-4 py-8'>
            <div className={item.style1}>
              <Link to={item.link}>
                <picture>
                  <source type='image/webp' srcSet={item.image}/>
              <img src={item.fallback} alt={item.alt} />
                </picture>
              </Link>
            </div>
            <div className={item.style2}>
              <h3 className='text-2xl text-[#123456] mb-2'>
              <Link to={item.link}>
                {item.title}
                </Link>
                </h3>
              <p className='text-gray-700 mb-4'>{item.description}</p>
              <Link to={item.link} className=' inline-flex'>
                <span className='flex flex-row'>
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
