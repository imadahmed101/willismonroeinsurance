import React from 'react'
import Quote from '../components/Quote'
import { Link } from 'react-router-dom'

const CommercialInsurance = () => {
    return (

        <div>

            <div className='overflow-hidden opacity-75'>
                <picture>
                    <source type='image/webp' srcSet="/business.webp" />
                    <img src="/business.jpg" alt='View of office buildings in a city.' className='h-[200px] md:h-[300px] w-full object-cover' />
                </picture>
            </div>

            <h2 className='text-4xl md:text-6xl md:text-center font-bold pt-4 px-4 mb-16'>Commercial Insurance</h2>
            <div className='max-w-[850px] mx-auto px-4 mb-16'>

                <p className='text-xl md:text-3xl mb-8'>
                    We take care of all your commercial and business insurance needs.
                </p>

                <p className='mb-4'>
                    Running a successful business is a daily journey filled with challenges, and we understand that the stakes are high. At our insurance agency, we recognize the relentless effort it takes to build and sustain a business. Our mission is to alleviate some of the stress associated with this journey by offering comprehensive coverage for your business and its assets. Let us demonstrate how we can be a trusted partner in securing your business's future, providing peace of mind as you navigate the intricate landscape of entrepreneurship.</p>

                <p className='mb-4'>The daily struggle of managing a business is something we truly comprehend, and we're here to support you in safeguarding your hard-earned achievements. Our commitment extends beyond merely providing insurance; it's about becoming an integral part of your business's success story. We specialize in addressing all your commercial insurance needs, offering tailored solutions that reflect the unique aspects and challenges of your industry.</p>

                <p className='mb-4'>We understand that your business property is not just a physical space; it's a strategic asset integral to your operations. Our comprehensive coverage is designed to protect your property, equipment, and assets, allowing you to focus on what you do best – running and growing your business. From unexpected events to liability concerns, we've got you covered, providing a safety net that enables you to face the uncertainties of the business world with confidence.</p>

                <p className='mb-4'>Our team of experts is dedicated to simplifying the insurance process for you. We aim to be more than just insurance providers; we aspire to be partners who genuinely understand your business and its unique needs. By collaborating with us, you gain access to a wealth of industry knowledge and personalized guidance that empowers you to make informed decisions regarding your business's insurance strategy.</p>

                <p className='mb-4'>We recognize that every business is different, and so are its risks. Our commitment to excellence drives us to stay ahead of industry trends and emerging risks, ensuring that our insurance solutions evolve to meet the dynamic needs of your business. Let us take on the responsibility of securing your business, allowing you to focus on what truly matters – its growth and prosperity.</p>

                <p className='mb-4'>In summary, our goal is to be a reliable ally in your business journey. By entrusting us with your commercial insurance needs, you can focus on steering your business towards success, knowing that you have a dedicated partner providing unwavering support and protection. Let us share the burden of your business challenges, allowing you to thrive in an environment where success is not just a goal but an achievable reality.
                </p>
            </div>

            <div className='max-w-[850px] mx-auto'>
                <Quote />

                <div className='flex py-16 px-4 text-white justify-between'>
                    <Link className='p-4 border-2  bg-black bg-opacity-40 hover:bg-opacity-100 transtion duration-300' to={'/services'}>Back to Services</Link>
                    <Link className='p-4 border-2 bg-black bg-opacity-40 hover:bg-opacity-100 transtion duration-300' to={'/autoinsurance'}>Next: Auto Insurance</Link>
                </div>
            </div>
        </div>

    )
}

export default CommercialInsurance
