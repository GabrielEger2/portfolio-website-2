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
          <motion.div className='pt-3 px-2'>
            <p>
                Hello World
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MotionCard;