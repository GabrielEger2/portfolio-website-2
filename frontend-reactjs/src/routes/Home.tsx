import ReactTyped from 'react-typed';

import { LuExternalLink } from 'react-icons/lu';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { FaUser, FaUserAstronaut, FaUserGraduate } from 'react-icons/fa';

import whiteModePattern from '../assets/imgs/whiteModePattern.png';
import darkModePattern from '../assets/imgs/darkModePattern.png';
import portrait from '../assets/imgs/GabrielPhoto.png';
import ProfilePic from '../assets/imgs/GabrielProfilePic.png'
import ProfilePicBlur from '../assets/imgs/GabrielProfilePicBlur.png'
import MotionCard from '../components/MotionCard';

const Main = () => {
  return (
    <div>
        <div className="w-full h-[100vh] bg-gray-100 dark:bg-gray-800">
            <img className="w-full h-full object-cover top-0 left-0 absolute dark:opacity-0" src={whiteModePattern} alt="white mode pattern" />
            <img className="w-full h-full object-cover top-0 left-0 absolute opacity-0 dark:opacity-100" src={darkModePattern} alt="white mode pattern" />
            <div className="w-full h-full">
                <div className="flex max-w-[1100px] h-full items-center mx-auto justify-between">
                    <div className="md:relative -translate-y-4 pt-4 md:pt-0 flex-grow mr-O text-shadow text-5xl font-bold roboto-condensed text-gray-800 dark:text-gray-50">
                        <h1 className="mt-2 z-50">
                            Hello World! I'm
                        </h1>
                        <h1 className='text-8xl my-4'>
                            Gabriel <span className='text-purple-500 dark:text-yellow-500'>Eger</span>
                        </h1>
                        <ReactTyped className='text-5xl' strings={['A Software Engineer!', 'A React Developer!', 'A Python Developer!', 'A Full Stack Developer!', 'A JS/TS Developer!']} typeSpeed={80} backSpeed={100} loop/>
                        <div className='flex items-center mt-8'>
                            <button 
                                className="items-center bg-purple-500 hover:bg-purple-700 text-gray-50 font-bold rounded-lg px-6 py-2 text-3xl dark:bg-yellow-500 dark:text-gray-800 dark:hover:bg-yellow-700 transition-all duration-500">
                                Resume <LuExternalLink className='inline-block' size={30} />
                            </button>
                            <div className=' items-center flex space-x-4 ml-10'>
                                <a href="https://github.com/GabrielEger2" target="_blank">
                                    <AiFillGithub size={40} />
                                </a>
                                <a href="https://www.linkedin.com/in/gabriel-eger-11434b157/" target="_blank">
                                    <AiFillLinkedin size={40} />
                                </a>
                                <a href="https://leetcode.com/GabrielEger2/" target="_blank">
                                    <SiLeetcode size={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block pt-8 ml-O lg:ml-16 z-50">
                        <img
                            src={portrait}
                            alt="Movie GIF"
                            className="rounded-tr-xll rounded-bl-xll h-[65vh] max-h-[600px] w-[400px] object-cover ml-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main