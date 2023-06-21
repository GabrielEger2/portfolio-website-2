import React from 'react'

import { motion } from "framer-motion";

import { MdOutlineEmail, MdOutlineWavingHand } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';

const Contact = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-800' id='contact'>
        <div className='flex justify-center'>
            <h2 className='text-lg text-center text-gray-400 dark:text-gray-500 mt-10 mb-10'>
                Wanna get in touch? <br />
                <span className='text-gray-800 dark:text-gray-100 text-3xl mt-4 font-bold'>Contact Me</span>
            </h2>
        </div>
        <div className="text-center lg:text-left pb-10 text-gray-800 dark:text-gray-100">
            <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="mt-6 md:mt-12 lg:mt-0">
                        <h1
                        className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6  md:mb-12"
                        >
                        Don't be shy, hit me up <MdOutlineWavingHand size={60} className='inline-block text-purple-500 dark:text-yellow-500' />
                        </h1>
                        <div className='md:mb-4 lead text-2xl font-bold md:grid md:grid-row-3 md:space-y-4'>
                            <p className='flex items-center mt-4'>
                                <MdOutlineEmail size={40} className='inline-block text-purple-500 dark:text-yellow-500' />: gabriel_eger01@hotmail.com
                            </p>
                            <p>
                                <BsTelephone size={40} className='inline-block text-purple-500 dark:text-yellow-500' />: +55 (48) 9 9832-4270
                            </p>
                            <p>
                                <CiLinkedin size={40} className='inline-block text-purple-500 dark:text-yellow-500' />: in/gabrieleger
                            </p>
                        </div>
                    </div>
                        <div className="mb-6 md:mb-12 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-gray-50 border border-purple-500 px-6 py-12 md:px-12 dark:bg-gray-800 dark:border-yellow-500">
                            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative">
                                <input
                                type="text" id="contact-form-name" 
                                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-50 text-papasblack placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-papaslightred focus:border-transparent dark:bg-gray-800 dark:border-gray-950" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative">
                                <input
                                type="text" id="contact-form-email" 
                                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-50 text-papasblack placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-papaslightred focus:border-transparent dark:bg-gray-800 dark:border-gray-950" placeholder="Email/Phone"/>
                            </div>
                        </div>
                            <div className="col-span-2">
                                <label className="text-papasblack" htmlFor="name">
                                    <textarea
                                        className="flex-1 w-full px-4 py-2 text-base text-papasblack placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-papaslightred focus:border-transparent dark:bg-gray-800 dark:border-gray-950" placeholder="Is there anything I can help you with?" rows="5" cols="40">
                                    </textarea>
                                </label>
                            </div>
                        <div className="col-span-2 text-right">
                            <motion.div 
                                className="items-center bg-purple-500 text-gray-50 font-bold rounded-lg px-6 py-2 text-3xl cursor-pointer dark:bg-yellow-500 dark:text-gray-800"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 200, damping: 12 }}    
                            >
                                <div className='justify-center flex'>
                                    Send
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact