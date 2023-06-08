import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaUserAstronaut, FaUserGraduate } from 'react-icons/fa';

const MotionCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        transition={{ duration: 1, type: 'spring' }}
        layout 
        onClick={() => setIsOpen(!isOpen)} 
        className={`p-3 bg-gray-100 border border-gray-300 rounded-xl cursor-pointer shadow-lg dark:bg-gray-800 dark:border-gray-950 ${isOpen ? 'z-10' : ''}`}
        style={{ position: isOpen ? 'absolute' : 'static' }}
      >
        <motion.h2 layout='position' className='font-bold w-48 h-32 text-center text-xl text-gray-800 dark:text-gray-200'>
            <div className='my-4 flex justify-center'>
                <FaUser size='24' />
            </div>
            "Important" Data <br />
            <h2 className='font-normal text-sm mt-2 text-gray-700 dark:text-gray-300'>
                Some more "useful" information about me
            </h2>
        </motion.h2>
        {isOpen && (
          <motion.div className='pt-3 px-2 max-w-[900px] h-auto'>
            <p>
            Hello world. My name is Gabriel Eger, a goal-oriented, determined and ambitious Computer Science student. Learning has always been a devotion of mine and has only increased after I discovered the coding universe; throughout this new journey, I've faced many obstacles, but none that made me have the slight desire to give up; on the contrary, the more I learn about bits and code, the more I understand my limitations and the more motivated I am to improve.
          ' In my free time, I like to read old Sci-fi books, watch random obscure films, do stupid roleplay things in D&D, watch the seasonal animes, learn 漢字 or grind on an MMO.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MotionCard;