import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-[#123654] py-8 md:py-16 xl:py-32 overflow-hidden'>
            <div className='flex flex-col md:flex-row max-w-[1200px] gap-8 mx-auto px-4'>
                <div className='flex-1 my-auto'>
                    <div className='max-w-[300px] sm:max-w-[450px] md:max-w-[500px] md:min-w-[400px] mx-auto text-center md:text-left text-white'>
                        <h2 className='text-4xl lg:text-6xl mb-4 font-bold'>Find The Perfect Insurance Policy</h2>
                        <p className='mb-8'>Our firm delivers quality insurance products matched to your needs with the biggest cost savings to you.</p>
                        <Link to={'/services'} className='flex justify-center border-white border-[1px] px-8 py-4 rounded-md text-white font-bold bg-black hover:shadow-md hover:shadow-gray-500 transition duration-300'>Find Coverage</Link>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src='/hero.png' alt='Animated person in a suit looking at a shield with a checkmark.'  className='w-[300px] max-w-[300px] h-[211px] lg:w-[450px] lg:max-w-[450px] lg:h-[316px] mx-auto mt-8 rounded-se-full' />
                </div>
            </div>
        </div>
    )
}
export default Hero