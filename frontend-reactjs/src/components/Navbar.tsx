import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { motion, useScroll } from "framer-motion";

import stripsWhiteIcon from '../assets/imgs/stripsWhiteIcon.png';
import stripsDarkIcon from '../assets/imgs/stripsDarkIcon.png';

const Navbar = () => {
    const [nav, setNav] = useState(false); // Setting up a state variable for the navigation menu
    const [mobileNav, setMobileNav] = useState(false); // Setting up a state variable for the mobile navigation menu
    const [scrollPos, setScrollPos] = useState(0);
    const [initialDarkMode, setInitialDarkMode] = useState('');
    const [darkMode, setDarkMode] = useState(initialDarkMode);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initialMode = darkModeQuery.matches ? 'dark' : 'light';
        setInitialDarkMode(initialMode);
        setDarkMode(initialMode);
      }, []);

    useEffect(() => {
        const handleLinkClick = (event: MouseEvent) => {
          event.preventDefault();
          const target = event.target as HTMLAnchorElement;
          const element = document.querySelector(target.hash) as HTMLElement;
          if (element) {
            const topOffset = element.offsetTop;
            window.scrollTo({
              top: topOffset - 60,
              behavior: 'smooth',
            });
          }
        };
      
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
          link.addEventListener('click', handleLinkClick as EventListener);
        });
      
        return () => {
          links.forEach((link) => {
            link.removeEventListener('click', handleLinkClick as EventListener);
          });
        };
    }, []);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav); // Toggling the value of the navigation menu state variable
    };

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > scrollPos) {
            // Scrolling down, makes navbar smaller
            setNav(true);
        } else {
            // Scrolling up, makes navbar bigger
            setNav(false);
        }
        setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPos]);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleDarkMode = () => {
        setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className='z-50'>
            <motion.div
                className={`fixed top-0 w-full z-50 shadow-lg ${
                    nav ? 'h-16' : 'h-20' 
                } transition-all duration-500 ease-in-out`}
            >
                <div className='bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-950 items-center h-full'> 
                    <div className="flex justify-between items-center h-full max-w-[1400px] mx-auto px-6 font-bold">
                        <a href="#home" className='text-gray-800 text-4xl dark:text-gray-50 flex items-center'>
                            <div className='pr-2'>
                                <img src={stripsDarkIcon} alt="" className='h-12 w-12 dark:hidden' />
                                <img src={stripsWhiteIcon} alt="" className='h-12 w-12 hidden dark:block' />
                            </div>
                            &lt;Gabriel /&gt;
                        </a>
                        <ul className="text-gray-800 md:flex hidden text-2xl space-x-6 dark:text-gray-50">
                            <li className="group">
                                <a href="#home">Home</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-50"></span>
                            </li>
                            <li className="group">
                                <a href="#about">About</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-50"></span>
                            </li>
                            <li className="group">
                                <a href="#projects">Projects</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-50"></span>
                            </li>
                            <li className="group">
                                <a href="#contact">Contact</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-50"></span>
                            </li>
                            <label className='rounded-full flex items-center mb-0.5'>
                                <button onClick={handleDarkMode}>
                                    <div className='transition ease-in-out duration-500 text-gray-50 scale-0 dark:block dark:scale-100 dark:rotate-360 absolute'>
                                        <BsFillMoonStarsFill size={22} />
                                    </div>
                                    <div className='text-gray-800 block dark:rotate-360 dark:scale-0 transition ease-in-out duration-500'>
                                        <BsFillSunFill size={22} />
                                    </div>
                                </button>
                            </label>
                        </ul>
                        <div className="text-gray-800 p-1 rounded-lg md:hidden cursor-pointer absolute right-6 border-gray-800 border" onClick={handleMobileNav}>
                            {!mobileNav ? <AiOutlineMenu size={30} /> : <MdClose size={30} />}
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 dark:bg-gray-950 shadow-lg'>
                    <motion.div className='h-0.5 bg-purple-500 dark:bg-yellow-500' style={{ transformOrigin: "left", scaleX: scrollYProgress }} />
                </div>
            </motion.div>
        </header>
    );
};

export default Navbar;