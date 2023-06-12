import { motion } from 'framer-motion';
import { FaUser, FaUserAstronaut, FaUserGraduate } from 'react-icons/fa';

const MotionCard = ({ id, position, type, isOpen, onClick }) => {
  let icon;
  let title;
  let text;

  // Set the icon based on the "type" prop
  if (type === 'normal') {
    icon = <FaUser size={40} />;
    title = '"Important" Data';
    text = 'Some "useful" information about me';
  } else if (type === 'hobbies') {
    icon = <FaUserAstronaut size={40} />;
    title = 'Stuff I like to do';
    text = 'What I usually do in my free time';
  } else {
    icon = <FaUserGraduate size={40} />;
    title = 'My education';
    text = 'All the courses I have taken';
  }

  const handleClick = () => {
    onClick(isOpen ? null : id);
  };

  return (
    <div className={`flex justify-center text-center ${position === 'center' ? 'md:justify-center md:text-center' : (position === 'right' ? 'md:justify-end md:text-right' : 'md:justify-start md:text-left')}`}>
      <motion.div
        transition={{ layout: { duration: 1, type: 'spring' } }}
        layout
        onClick={handleClick}
        className={`bg-gray-100 border pb-5 px-2 border-gray-300 rounded-xl cursor-pointer shadow-lg dark:bg-gray-800 dark:border-gray-950 ${isOpen ? 'z-10' : ''}`}
        style={{ position: isOpen ? 'absolute' : 'static' }}
      >
        {isOpen ? (
          <motion.div>
            <div>
              <motion.h2
                layout='position'
                className={`font-bold  items-center text-center justify-center ${position === 'right' || position === 'left' ? 'flex' : ''} space-x-4 text-xl text-gray-800 dark:text-gray-200`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {(position === 'left' || position === 'center') && (
                  <div className='flex justify-center'>
                    {icon}
                  </div>
                )}
                <h2>
                  {title} <br />
                  <span className='font-normal text-sm mt-2 text-gray-700 dark:text-gray-300'>
                    {text}
                  </span>
                </h2>
                {position === 'right' && (
                  <div className='flex justify-center'>
                    {icon}
                  </div>
                )}
              </motion.h2>
              <motion.div
                className='px-4 flex mt-4 text-gray-800 dark:text-gray-200'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <p>
                    Ohayou Sekai, Good morning world, world <br />
                    Ohayou Sekai, Good morning world, world <br />
                    Ohayou Sekai, Good morning world, world <br />
                    Ohayou Sekai, Good morning world, world <br />
                    Ohayou Sekai, Good morning world, world <br />
                    Ohayou Sekai, Good morning world, world <br />
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.h2
            layout='position'
            className='font-bold w-48 h-32 text-center text-xl text-gray-800 dark:text-gray-200'
          >
            <div className='my-4 flex justify-center'>
              {icon}
            </div>
            {title} <br />
            <span className='font-normal text-sm mt-2 text-gray-700 dark:text-gray-300'>
              {text}
            </span>
          </motion.h2>
        )}
      </motion.div>
    </div>
  );
};

export default MotionCard;