import React from 'react'
import Quote from '../components/Quote'
import { Link } from 'react-router-dom'

const AutoInsurance = () => {
    return (
        <div>
            <div className='overflow-hidden opacity-75'>
                <picture>
                    <source type='image/webp' srcSet="/car.webp" />
                    <img src="/car.jpg" alt='Side view of a 2 door BMW coupe.' className='h-[200px] md:h-[300px] w-full object-cover' />
                </picture>
            </div>

            <h2 className='text-4xl md:text-6xl md:text-center font-bold pt-4 px-4 mb-16'>Auto Insurance</h2>
            <div className='max-w-[850px] mx-auto px-4 mb-16'>
                <p className='text-xl md:text-3xl mb-8'>
                    We take care of all auto, bike, truck, boat, and land vehicle insurance needs.
                </p>

                <p className='mb-4'>At our insurance agency, we believe that passion is the driving force that keeps the journey of providing exceptional service alive. Our commitment to exceeding client expectations sets us apart in the realm of auto insurance. We understand that your vehicles are more than just modes of transportation; they are an integral part of your lifestyle and livelihood.</p>

                <p className='mb-4'>With a dedicated team fueled by enthusiasm, we go beyond the conventional boundaries of insurance. Our passion is not just about policies and paperwork; it's about safeguarding your dreams, investments, and the memories associated with your vehicles. Whether it's your car, bike, truck, boat, or any other land or recreational vehicle, we are here to ensure comprehensive protection.</p>

                <p className='mb-4'>Our approach is rooted in a deep understanding of the unique needs and challenges that come with different types of vehicles. We recognize that each client has specific requirements, and our passion drives us to tailor insurance solutions that fit seamlessly into your life. From daily commutes to off-road adventures, we've got you covered.</p>

                <p className='mb-4'>We take pride in being more than just insurance providers; we are partners in your journey. Our passion extends to providing not just coverage, but peace of mind. In times of unexpected events, accidents, or uncertainties, our commitment is unwavering – we are here to support you every step of the way.</p>

                <p className='mb-4'>As we navigate the ever-evolving landscape of insurance, our passion propels us to stay ahead of the curve. We continuously strive to enhance our offerings, explore innovative solutions, and adapt to the changing needs of our clients. With us, you can trust that your vehicles are in the hands of a team that is as passionate about your safety and security as you are.</p>

                <p className='mb-4'>In essence, our passion for excellence drives us to deliver more than just insurance; we provide a comprehensive, personalized experience that ensures your peace of mind on the road and beyond. Your journey is our priority, and we are here to make it safer, more secure, and more enjoyable</p>
            </div>
            <div className='max-w-[850px] mx-auto'>
                <Quote />

                <div className='flex py-16 px-4 text-white justify-between'>
                    <Link className='p-4 border-2  bg-black bg-opacity-40 hover:bg-opacity-100 transtion duration-300' to={'/services'}>Back to Services</Link>
                    <Link className='p-4 border-2 bg-black bg-opacity-40 hover:bg-opacity-100 transtion duration-300' to={'/homeinsurance'}>Next: Home Insurance</Link>
                </div>
            </div>
        </div>
    )
}

export default AutoInsurance
