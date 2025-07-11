import React from 'react';
import Quote from '../components/Quote'

const Contact = () => {

    return (
        <div className='py-8'>
            <h2 className='text-2xl md:text-4xl text-center mb-8'>Contact Us</h2>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row px-4 py-8'>
                <div className='flex-1 flex flex-col'>
                    <p className='inline-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        102-1691 McCowan Road
                    </p>
                    <p className='pl-7 mb-4'>Scarborough, On, M1S 2Y3</p>
                    <p className='mb-4'>
                        <a className='inline-flex' href="tel:+1-416-609-9500">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        416-609-9500
                        </a>
                    </p>
                    <p className='inline-flex mb-4'>
                    <a className='inline-flex' href="mailto:info@willismonroeinsurance.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        info@willismonroeinsurance.com
                        </a>
                    </p>
                    <p className='inline-flex mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Monday-Friday 9AM-5PM
                    </p>
                </div>
                <div className='flex-1'>
                    <iframe
                        title='Willis & Monroe Associates Location'
                        style={{
                            width: "100%",
                            height: "400px"
                        }}
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=102-1691%20McCowan%20Road%20Scarborough,%20ON,%20M1S%202Y3&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                    />
                </div>
            </div>
            <Quote />
            
        </div>
    );
};

export default Contact