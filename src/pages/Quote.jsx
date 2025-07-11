import React from 'react';
import QuoteForm from '../components/Quote'

const Quote = () => {
    return (
        <div className='py-8 md:py-32'>
            <h4 className='mb-8 text-2xl md:text-4xl text-center'>Contact us to receive a quote</h4>
            <QuoteForm/>
        </div>
    );
};

export default Quote