import React from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Quote = () => {
    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            user_number: '',
        },
        validationSchema: yup.object({
            user_name: yup
                .string()
                .min(2, 'Atleast 2 characters')
                .max(35, 'Max 35 characters')
                .required('Name is required'),
            user_email: yup
                .string()
                .email('Enter a valid email')
                .required('Email is required'),
            user_number: yup
                .string()
                .min(10, 'Atleast 10 digits')
                .max(15, 'Max 15 digits')
                .required('Phone number is required'),
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            emailjs.send(process.env.REACT_APP_MY_SERVICE_KEY, process.env.REACT_APP_MY_QUOTE_KEY, values, process.env.REACT_APP_MY_API_KEY)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                    setSubmitting(false);
                    alert('Error sending quote request form please try again.')
                });
            setSubmitting(false);
            resetForm();
            alert('Quote request form successfully sent.')
        },
    });

    return (
        <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto'>
            <div className='flex-1 bg-[#123654] text-white'>
                <div className='px-4'>
                    <p className='text-lg mt-8'>
                        Contact us
                    </p>
                    <p className='text-4xl mt-8'>
                        We take care of all your insurance needs
                    </p>
                    <div className='my-8'>
                        <p className='font-semibold'>• Auto</p>
                        <p className='font-semibold'>• Home</p>
                        <p className='font-semibold'>• Commercial</p>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <form onSubmit={formik.handleSubmit} className='max-w-[525px] px-4 mx-auto'>
                    <div className='flex flex-col py-8'>
                        <h3 className='text-xl font-semibold mb-4'>Request An Insurance Quote</h3>

                        <label for="user_name">Name: </label>
                        <input
                            id="user_name"
                            name="user_name"
                            value={formik.values.user_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='p-2 border-b-2 border-black'
                        />
                        {formik.touched.user_name && formik.errors.user_name ? <div className='text-red-600'>{formik.errors.user_name}</div> : null}
                        <label for="user_email">Email: </label>
                        <input
                            id="user_email"
                            name="user_email"
                            value={formik.values.user_email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='p-2 border-b-2 border-black'
                        />
                        {formik.touched.user_email && formik.errors.user_email ? <div className='text-red-600'>{formik.errors.user_email}</div> : null}
                        <label for="user_number">Phone: </label>
                        <input
                            id="user_number"
                            name="user_number"
                            value={formik.values.user_number}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='p-2 border-b-2 border-black'
                        />
                        {formik.touched.user_number && formik.errors.user_number ? <div className='text-red-600'>{formik.errors.user_number}</div> : null}
                        <button type="submit" className='bg-[#123654] p-2 mt-6 rounded-md text-white text-xl font-bold hover:bg-green-800 transition duration-300'>Contact Me</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Quote