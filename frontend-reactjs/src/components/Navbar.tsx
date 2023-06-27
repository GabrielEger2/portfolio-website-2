import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import stripsWhiteIcon from '../assets/imgs/stripsWhiteIcon.png';
import stripsDarkIcon from '../assets/imgs/stripsDarkIcon.png';

const Navbar = () => {
    const [nav, setNav] = useState(false); // Setting up a state variable for the navigation menu
    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    const [scrollPos, setScrollPos] = useState(0);
    const [initialDarkMode, setInitialDarkMode] = useState('');
    const [darkMode, setDarkMode] = useState(initialDarkMode);

    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initialMode = darkModeQuery.matches ? 'dark' : 'light';
        setInitialDarkMode(initialMode);
        setDarkMode(initialMode);
      }, []);

    useEffect(() => {
        const handleLinkClick = (event: MouseEvent) => {
            const target = event.target as HTMLAnchorElement;
            const element = document.querySelector(target.hash) as HTMLElement;
            if (element) {
              event.preventDefault();
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
                <div className='bg-gray-100 border-b-2 border-gray-300 dark:bg-gray-900 dark:border-gray-950 items-center h-full'> 
                    <div className="flex justify-between items-center h-full max-w-[1400px] mx-auto px-6 font-bold">
                        <a href="#home" className='text-gray-900 text-4xl dark:text-gray-50 flex items-center'>
                            <div className='pr-2'>
                                <img src={stripsDarkIcon} alt="" className='h-12 w-12 dark:hidden' />
                                <img src={stripsWhiteIcon} alt="" className='h-12 w-12 hidden dark:block' />
                            </div>
                            &lt;Gabriel /&gt;
                        </a>
                        <ul className="text-gray-900 md:flex hidden text-2xl space-x-6 dark:text-gray-50">
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
                                    <div className='text-gray-900 block dark:rotate-360 dark:scale-0 transition ease-in-out duration-500'>
                                        <BsFillSunFill size={22} />
                                    </div>
                                </button>
                            </label>
                        </ul>
                        <motion.button
                            animate={mobileNav ? 'open' : 'closed'}
                            onClick={() => toggleMobileNav()}
                            className='flex flex-col space-y-1 md:hidden p-1'
                        >
                            <motion.span 
                                variants={{
                                    closed: {rotate: 0, y: 0},
                                    open: {rotate: 45, y: 8}
                                }}
                                className='w-7 h-1 bg-gray-800 block dark:bg-gray-100'
                            ></motion.span>
                            <motion.span 
                                variants={{
                                    closed: {opacity: 1 },
                                    open: {opacity: 0, transition: { duration: 0 }}
                                }}
                                className='w-7 h-1 bg-gray-800 block dark:bg-gray-100'
                            ></motion.span>
                            <motion.span 
                                variants={{
                                    closed: {rotate: 0, y:0},
                                    open: {rotate: -45, y:-8}
                                }}
                                className='w-7 h-1 bg-gray-800 block dark:bg-gray-100'
                            ></motion.span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {mobileNav && (
                    <motion.div
                        variants={{
                            open: {
                            x: "0%",
                            transition: {
                                when: "beforeChildren",
                                type: "spring",
                                bounce: 0.12,
                                duration: .3
                            }
                            },
                            closed: {
                            x: "-100%",
                            transition: {
                                when: "beforeChildren",
                                type: "spring",
                                bounce: 0.12,
                                duration: .3
                            }
                            }
                        }}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed w-[70vw] sm:w-[50vw] inset-0 bg-gray-100 border-r-2 border-gray-300 z-50 md:hidden p-6 container flex flex-col shadow-lg dark:bg-gray-900 dark:border-gray-950"
                    >
                    <motion.div
                        variants={{
                            open: {
                            y: "0%",
                            opacity:1
                            },
                            closed: {
                            y: "12%",
                            opacity: 0
                            }
                        }}
                    >
                        <a href="#home" className="text-gray-900 text-4xl dark:text-gray-100 flex font-bold items-center pb-8 justify-center">
                        &lt;Gabriel /&gt;
                        </a>
                        <ul className="text-gray-900 text-3xl space-y-6 dark:text-gray-100 font-bold">
                            <li className="group w-[82px]">
                                <a href="#home">Home</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
                            </li>
                            <li className="group w-[84px]">
                                <a href="#about">About</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
                            </li>
                            <li className="group w-[113px]">
                                <a href="#projects">Projects</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
                            </li>
                            <li className="group w-[109px] pb-10">
                                <a href="#contact">Contact</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
                            </li>
                        </ul>
                    </motion.div>
                        <div className="w-full bg-gray-800 p-px dark:bg-gray-100"></div>
                        <motion.div
                            variants={{
                                open: {
                                y: "0%",
                                opacity:1
                                },
                                closed: {
                                y: "-42%",
                                opacity: 0
                                }
                            }}
                            className="flex justify-center space-x-6 items-center pt-10"
                        >
                            <label className="rounded-full flex items-center">
                            <button onClick={handleDarkMode}>
                                <div className="transition ease-in-out duration-500 text-gray-50 scale-0 dark:block dark:scale-100 dark:rotate-360 absolute">
                                <BsFillMoonStarsFill size={36} />
                                </div>
                                <div className="text-gray-900 block dark:rotate-360 dark:scale-0 transition ease-in-out duration-500">
                                <BsFillSunFill size={36} />
                                </div>
                            </button>
                            </label>
                            <a href="https://github.com/GabrielEger2" target="_blank" className="hover:scale-125 transition-all duration-300 text-gray-900 dark:text-gray-50">
                            <AiFillGithub size={44} />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-eger-11434b157/" target="_blank" className="hover:scale-125 transition-all duration-300 text-gray-900 dark:text-gray-50">
                            <AiFillLinkedin size={44} />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;