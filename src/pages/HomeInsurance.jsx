import React from 'react'
import Quote from '../components/Quote'
import { Link } from 'react-router-dom'

const HomeInsurance = () => {
    return (
        <div>

            <div className='overflow-hidden opacity-75'>
                <picture>
                    <source type='image/webp' srcSet='/house.webp' />
                    <img src="/house.jpg" alt='Front view of a home on a lake.' className='h-[200px] md:h-[300px] w-full object-cover' />
                </picture>
            </div>

            <h2 className='text-4xl md:text-6xl md:text-center font-bold pt-4 px-4 mb-16'>Home Insurance</h2>
            <div className='max-w-[850px] mx-auto  px-4 mb-16'>
                <p className='text-xl md:text-3xl mb-8'>
                    We take care of all home, condo, residential and property insurance needs.
                </p>

                <p className='mb-4'>
                    At our insurance agency, we understand that having a roof over your head is not just a necessity; it's a fundamental aspect of security and comfort. Our primary goal is not only to acknowledge the importance of shelter but to ensure that you can keep a secure and protective roof over your head for years to come. We specialize in taking care of all your home and property insurance needs, recognizing that your home is more than just a physical structure—it's a haven of memories, dreams, and cherished moments.</p>

                <p className='mb-4'>Our commitment to safeguarding your home is rooted in the belief that every dwelling is unique, just like the individuals and families that inhabit them. We go beyond conventional insurance practices to provide comprehensive coverage tailored to the specific requirements of your property. Whether you own a house, condominium, or rental property, we are here to offer a range of insurance solutions designed to protect your investment and provide peace of mind.</p>

                <p className='mb-4'>We recognize that the challenges homeowners face can vary, from natural disasters to unforeseen accidents. Our dedicated team is equipped with the expertise to guide you through the intricacies of home insurance, ensuring that you have the right coverage in place. Our goal is to be more than just an insurance provider; we aim to be a reliable partner in your journey of homeownership.</p>

                <p className='mb-4'>In times of crisis or uncertainty, our commitment to you remains unwavering. We strive to make the insurance process seamless, transparent, and efficient, so you can focus on the things that matter most—your family, your home, and your well-being. Our goal is not only to protect your property but to provide you with the assurance that you are covered, allowing you to face the future with confidence.</p>

                <p className='mb-4'>As we navigate the dynamic landscape of home insurance, our dedication to excellence propels us to stay ahead of emerging trends and industry standards. We continuously evaluate and update our offerings to ensure that you receive the most relevant and effective coverage available. </p>

                <p className='mb-4'>In summary, our mission goes beyond mere insurance; it's about safeguarding the essence of your home and providing you with the peace of mind that comes with knowing you have a trusted partner by your side. With us, keeping a roof over your head is not just a goal; it's our unwavering commitment to you and your home. </p>
            </div>

            <div className='max-w-[850px] mx-auto'>
                <Quote />


                <div className='flex py-16 px-4 text-white justify-between'>
                    <Link className='p-4 border-2  bg-black bg-opacity-40 hover:bg-opacity-100 transtion duration-300' to={'/services'}>Back to Services</Link>
                    <Link className='p-4 border-2 bg-black bg-opacity-40 hover:bg-opacity-100 transtion duration-300' to={'/commercialinsurance'}>Next: Commercial Insurance</Link>
                </div>

            </div>

        </div>
    )
}

export default HomeInsurance
