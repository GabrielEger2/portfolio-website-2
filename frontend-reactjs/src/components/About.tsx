import { useState } from 'react';
import { motion } from 'framer-motion';

import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

import ProfilePic from '../assets/imgs/GabrielProfilePic.png'
import ProfilePicBlur from '../assets/imgs/GabrielProfilePicBlur.png'
import MotionCard from '../components/MotionCard';


const About = () => {
    const [openCardId, setOpenCardId] = useState<number | null>(null);

    const handleCardClick = (arg: number | null) => {
        setOpenCardId(arg);
      };

  return (
    <div className='bg-gray-50 dark:bg-gray-800 z-40' id='about'>
        <div className='flex justify-center'>
            <h2 className='text-lg text-center text-gray-400 dark:text-gray-500 my-10'>
                Get to know <br />
                <span className='text-gray-800 dark:text-gray-100 text-3xl mt-4 font-bold'>About Me</span>
            </h2>
        </div>
        <div className="flex max-w-[1300px] h-full mx-auto justify-center xl:justify-between pb-4 px-8">
            <div className='items-center -translate-y-7 hidden xl:block'>
                <img src={ProfilePic} alt="Gabriel's Photo" className='w-[450px] h-[450px] rounded-3xl absolute -rotate-6 hover:rotate-0 ease-in-out transition-all duration-500 shadow-lg' />
                <img src={ProfilePicBlur} alt="Gabriel's Photo with a blur effect" className='w-[450px] h-[450px] rounded-3xl shadow-lg' />
            </div>
        <div className="z-40">
            <div className='max-w-[700px] justify-center'>
                <div className='grid grid-cols-3 z-10'>
                    <MotionCard
                        id={1}
                        position='left'
                        type='normal'
                        isOpen={openCardId === 1}
                        onClick={handleCardClick}
                    />
                    <MotionCard
                        id={2}
                        position='center'
                        type='hobbies'
                        isOpen={openCardId === 2}
                        onClick={handleCardClick}
                    />
                    <MotionCard
                        id={3}
                        position='right'
                        type='education'
                        isOpen={openCardId === 3}
                        onClick={handleCardClick}
                    />
                </div>
                <div className='md:flex'>
                    <div className='xl:hidden pt-10 flex justify-center md:justify-start'>
                        <img src={ProfilePicBlur} alt="Gabriel's Photo with a blur effect" className='w-[300px] [300px] md:w-[250px] md:h-[250px] rounded-3xl shadow-lg absolute' />
                        <img src={ProfilePic} alt="Gabriel's Photo" className='w-[300px] h-[300px] md:w-[250px] md:h-[250px] rounded-3xl absolute -rotate-6 hover:rotate-0 ease-in-out transition-all duration-500 shadow-lg z-0' />
                    </div>
                    <div className='md:pl-[300px] xl:pl-0 pt-[300px] md:pt-0'>
                        <h2 className='mt-10 text-gray-800 dark:text-gray-100'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello world. My name is Gabriel Eger, a goal-oriented Computer Science student. 
                        Learning has always been a devotion of mine and has only increased after I discovered the coding universe.
                        In my free time, I like to read old Sci-fi books, watch random obscure films, 
                        do stupid roleplay things in D&D, watch the seasonal animes, learn 漢字 or grind on an MMO.
                        </h2>
                        <div className='flex justify-center md:justify-normal'>
                            <motion.div 
                                className="mt-10 mb-10 xl:mb-20 items-center w-48 justify-center cursor-pointer bg-purple-500 text-gray-50 font-bold rounded-lg px-6 py-2 text-3xl dark:bg-yellow-500 dark:text-gray-800"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 200, damping: 12 }} 
                            >
                                <a href="">
                                    Contact <HiOutlineChevronDoubleDown className='inline-block' size={30} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About