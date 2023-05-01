import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";


function Contact() {

  const { register, handleSubmit} = useForm();

  

//   is our own handler for form submit
// CURRENTLY THIS IS HOW WE HANDLE THE ONSUBMIT FORM 
// IT JUST REDIRECTS TO OPEN A MAIL CLIENT WHICH IS NOT THAT GOOD 
// WE WILL HAVE TO UPDATE THIS !!
  const onSubmit = formData => {
    // window.location.href = `mailto:johny@gmail.com?subject=${formData.subject}&body=
    // ${formData.message}`

    alert('work on progress')
  }




  return (
    <div className='h-screen relative flex flex-col overflow-hidden 
    justify-evenly items-center mx-auto text-center md:text-left md:flex-row
    max-w-7xl px-18'>
    <h3 className='uppercase absolute top-24 text-2xl tracking-[20px] text-gray-500'>
    Contact
    </h3>

    <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{" "}
            <span className='underline decoration-[#f7ab0a]/50'>Lets Talk</span>
        </h4>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+09393427796</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+1603 Pasig City</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>rinkabasuil7@gmail.com</p>
            </div>




{/* -----------------------------------FORM------------------------------------ */}
            

            {/* by using react hook form it will get rid of the default behavior which
            was reloading the whole page, but instead it will depend on our handler 
            action (onSubmit handler)  */}
            <form className='flex flex-col space-y-2 w-fit mx-auto'
                    onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex space-x-2'>
                    <input {...register("name")} className='contactInput' type="text" placeholder='Name'/>
                    <input {...register('email')} className='contactInput' type="email" placeholder='Email'/>
                </div>
                <input {...register('subject')} className='contactInput' type="text" placeholder='Subject'/>
                <textarea {...register('message')} className='contactInput' placeholder='Message'/>
                <button
                type='submit'
                className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
                >Submit
                </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact