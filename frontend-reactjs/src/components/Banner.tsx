import ReactTyped from 'react-typed';
import { motion } from "framer-motion";

import { LuExternalLink } from 'react-icons/lu';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import whiteModePattern from '../assets/imgs/whiteModePattern.png';
import darkModePattern from '../assets/imgs/darkModePattern.png';
import portrait from '../assets/imgs/GabrielPhoto.png';
import elipse from '../assets/imgs/elipse.png';
import elipseDark from '../assets/imgs/elipseDark.png';
import halfElipse from '../assets/imgs/halfElipse.png';
import halfElipseDark from '../assets/imgs/halfElipseDark.png';



const Banner = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/Gabriel'sResume.pdf";
    link.download = "Gabriel's Resume.pdf";
    link.click();
  };

  return (
    <div className="w-full h-[100vh] bg-gray-100 dark:bg-gray-800 z-40" id='home'>
        <img className="w-full h-full object-cover top-0 left-0 absolute dark:opacity-0" src={whiteModePattern} alt="white mode pattern" />
        <img className="w-full h-full object-cover top-0 left-0 absolute opacity-0 dark:opacity-100" src={darkModePattern} alt="white mode pattern" />
        <div className="w-full h-full">
            <div className="flex max-w-[1100px] h-full items-center mx-auto justify-center lg:justify-between px-4 text-center lg:text-left">
                <div className="md:relative -translate-y-4 pt-4 md:pt-0 flex-grow mr-O text-shadow text-5xl font-bold roboto-condensed text-gray-900 dark:text-gray-50">
                    <h1 className="mt-2 z-50">
                        Hello World! I'm
                    </h1>
                    <h1 className='text-8xl my-4'>
                        Gabriel <span className='text-purple-500 dark:text-yellow-500'>Eger</span>
                    </h1>
                    <ReactTyped className='lg:text-5xl sm:text-4xl text-3xl' strings={['A Software Engineer!', 'A React Developer!', 'A Python Developer!', 'A Full Stack Developer!', 'A JS/TS Developer!']} typeSpeed={80} backSpeed={100} loop/>
                    <div className='flex-col flex lg:flex-row items-center mt-8'>
                        <motion.button 
                          onClick={handleDownload}
                          className="items-center bg-purple-500 text-gray-50 font-bold rounded-lg px-6 py-2 text-3xl cursor-pointer dark:bg-yellow-500 dark:text-gray-800"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 200, damping: 12 }}    
                        >
                          Resume <LuExternalLink className='inline-block' size={30} />
                        </motion.button>
                    <div className=' items-center flex space-x-4 lg:ml-6 justify-center lg:justify-normal pt-6 lg:pt-0'>
                        <a href="https://github.com/GabrielEger2" target="_blank" className='hover:scale-125 transition-all duration-300'>
                            <AiFillGithub size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-eger-11434b157/" target="_blank" className='hover:scale-125 transition-all duration-300'>
                            <AiFillLinkedin size={40} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block z-40 justify-center items-center pt-4">
              <div className='relative ml-auto'>
                <motion.div
                  initial={{ x: -220, y: -100  }}
                  animate={{ x: -160 }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }} // Duration of 1 second and yoyo loop
                  className="w-[800px] absolute z-10"
                >
                  <img src={elipse} alt="elipse" className=' dark:hidden' />
                  <img src={elipseDark} alt="dark elipse" className='hidden dark:block' />
                </motion.div>
                <motion.div
                  initial={{ x: -220, y: -100 }}
                  animate={{ x: -160 }} 
                  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }} // Duration of 1 second and yoyo loop
                  className="w-[800px] absolute z-50"
                >
                  <img src={halfElipse} alt="half elipse" className='dark:hidden' />
                  <img src={halfElipseDark} alt="dark half elipse" className='hidden dark:block' />
                </motion.div>
                <img
                  src={portrait}
                  alt="portrait of myself"
                  className="relative rounded-tl-xll rounded-br-xll w-[400px] object-cover ml-auto z-30"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner