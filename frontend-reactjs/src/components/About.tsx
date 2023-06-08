import { LuExternalLink } from 'react-icons/lu';

import ProfilePic from '../assets/imgs/GabrielProfilePic.png'
import ProfilePicBlur from '../assets/imgs/GabrielProfilePicBlur.png'
import MotionCard from '../components/MotionCard';


const About = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-800'>
                <div className='flex justify-center'>
                    <h2 className='text-lg text-center text-gray-400 dark:text-gray-500 mt-10 mb-12'>
                    Get to know <br />
                    <span className='text-gray-800 dark:text-gray-100 text-3xl mt-4 font-bold'>About Me</span>
                    </h2>
                </div>
                <div className="flex max-w-[1300px] h-full mx-auto justify-between">
                    <div className='items-center translate-y-6'>
                        <img src={ProfilePic} alt="Gabriel's Photo" className='w-[450px] h-[450px] rounded-3xl absolute -rotate-6 hover:rotate-0 ease-in-out transition-all duration-500 shadow-lg' />
                        <img src={ProfilePicBlur} alt="Gabriel's Photo with a blur effect" className='w-[450px] h-[450px] rounded-3xl shadow-lg' />
                    </div>
                    <div className="z-50">
                        <div className='max-w-[700px] justify-center'>
                            <div className='flex grid-rows-3 space-x-6'>
                                <MotionCard />
                                <MotionCard />
                                <MotionCard />
                            </div>
                            <h2 className='mt-10 text-gray-800 dark:text-gray-100'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello world. My name is Gabriel Eger, a goal-oriented, determined and ambitious Computer Science student. 
                                Learning has always been a devotion of mine and has only increased after I discovered the coding universe; throughout this new journey, 
                                I've faced many obstacles, but none that made me have the slight desire to give up; on the contrary, the more I learn about bits and code, 
                                the more I understand my limitations and the more motivated I am to improve. <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my free time, I like to read old Sci-fi books, watch random obscure films, 
                                do stupid roleplay things in D&D, watch the seasonal animes, learn 漢字 or grind on an MMO.
                            </h2>
                            <button 
                                className="mt-10 mb-20 items-center bg-purple-500 hover:bg-purple-700 text-gray-50 font-bold rounded-lg px-6 py-2 text-3xl dark:bg-yellow-500 dark:text-gray-800 dark:hover:bg-yellow-700 transition-all duration-500">
                                Contact <LuExternalLink className='inline-block' size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default About