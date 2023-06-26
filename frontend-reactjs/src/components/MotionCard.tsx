import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaUserAstronaut, FaUserGraduate } from 'react-icons/fa';
import { client } from '../client';

const MotionCard = ({ id, position, type, isOpen, onClick }: {
  id: number;
  position: string;
  type: string;
  isOpen: boolean;
  onClick: (arg: number | null) => void; // Update prop definition
}) => {
  const [educationData, setEducationData] = useState<any[]>([]);
  const [techStackData, setTechStackData] = useState<any[]>([]);
  const [libraries, setLibraries] = useState<any[]>([]);
  const [frameworks, setFrameworks] = useState<any[]>([]);
  const [tools, setTools] = useState<any[]>([]);
  const [aboutData, setAboutData] = useState<any[]>([]);

  const fetchData = async (type: string, setData: (data: any[]) => void) => {
    const query = `*[_type == "${type}"] | order(educationDate desc)`;
    const data = await client.fetch(query);
    setData(data);
  };

  useEffect(() => {
    fetchData("education", setEducationData);
    fetchData("techStack", setTechStackData);
    fetchData("about", setAboutData);
  }, []);

  useEffect(() => {
    const filterAndSetData = (type: string, setData: (data: any[]) => void) => {
      const filteredTech = techStackData.filter((tech) => tech.techType.includes(type));
      setData(filteredTech);
    };
  
    filterAndSetData('Tools and Languages', setTools);
    filterAndSetData('Libraries', setLibraries);
    filterAndSetData('Frameworks', setFrameworks);
  }, [techStackData]);

  let icon;
  let title;
  let text;

  // Set the icon based on the "type" prop
  if (type === 'normal') {
    icon = <FaUser size={40} />;
    title = 'About me';
    text = 'Some "Useful" information about me';
  } else if (type === 'hobbies') {
    icon = <FaUserAstronaut size={40} />;
    title = 'Tech stack';
    text = 'Some of the technologies I use';
  } else {
    icon = <FaUserGraduate size={40} />;
    title = 'My education';
    text = 'All the courses I have taken so far';
  }

  const handleClick = () => {
    onClick(isOpen ? null : id); // Pass the argument based on the updated prop definition
  };

  return (
    <div className={`flex ${position === 'center' ? `justify-center text-center ${isOpen ? 'pr-2' : ''}` : (position === 'right' ? 'justify-end text-right' : 'justify-start text-left')}`}>
      <motion.div
        transition={{ layout: { duration: 1, type: 'spring' } }}
        layout
        onClick={handleClick}
        className={`bg-gray-100 border pb-5 md:px-2 border-gray-300 rounded-xl cursor-pointer shadow-lg dark:bg-gray-800 dark:border-gray-950 ${isOpen ? 'z-20' : ''}`}
        style={{ position: isOpen ? 'absolute' : 'static' }}
      >
        {isOpen ? (
          <motion.div>
            <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
              <motion.h2
                layout='position'
                className={`font-bold items-center text-center justify-center pt-1 ${position === 'right' || position === 'left' ? 'flex' : ''} space-x-4 text-xl text-gray-800 dark:text-gray-100`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {(position === 'left' || position === 'center') && (
                  <div className='flex justify-center pt-1'>
                    {icon}
                  </div>
                )}
                <h2 className={`${position === 'center' ? '-translate-x-2' : ''}`}>
                  {title} <br />
                  <span className='font-normal text-sm mt-2 text-gray-700 dark:text-gray-300'>
                    {text}
                  </span>
                </h2>
                {position === 'right' && (
                  <div className='flex justify-center pt-1'>
                    {icon}
                  </div>
                )}
              </motion.h2>
              <motion.div
                className='px-4 flex mt-4 text-gray-800 dark:text-gray-100'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  {position === 'left' && (
                    <div>
                      {aboutData.map((data) => (
                        <div key={data.aboutTitle}>
                          <h1 className='font-bold'>
                            {data.aboutTitle}: <span className='font-normal'>{data.aboutDescription}</span>
                          </h1>
                        </div>
                      ))}
                    </div>
                  )}
                  {position === 'center' && (
                    <div className='flex justify-center'>
                      <div className='grid grid-cols-3'>
                        <div className='justify-center'>
                          <h1 className='text-lg font-bold'>Tools and Languages</h1>
                          {tools.map((data) => (
                            <div key={data.techTitle}>
                              <h1>
                                {data.techLanguage}
                              </h1>
                            </div>
                          ))}
                        </div>
                        <div className='justify-center'>
                          <h1 className='text-lg font-bold mb-1'>Frameworks</h1>
                          {frameworks.map((data) => (
                            <div key={data.techTitle}>
                              <h1>
                                <span className='font-bold text-purple-500 dark:text-yellow-500'>{data.techLanguage}</span>: {data.techTitle}
                              </h1>
                            </div>
                          ))}
                        </div>
                        <div className='justify-center'>
                          <h1 className='text-lg font-bold mb-1'>Libraries</h1>
                          {libraries.map((data) => (
                            <div key={data.techTitle}>
                              <h1>
                                <span className='font-bold text-purple-500 dark:text-yellow-500'>{data.techLanguage}</span>: {data.techTitle}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {position === 'right' && (
                    <div>
                      {educationData.map((data) => (
                        <div key={data.educationTitle} className='max-w-[600px] text-left'>
                          <ol className="relative border-l border-gray-400 dark:border-gray-900 pb-10">                  
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-100">
                                  {data.educationDate}
                                </h1>
                                <h3 className="text-lg pb-1 font-bold text-gray-800 dark:text-gray-100">{data.educationTitle}</h3>
                                <p className=" text-base font-normal text-gray-700 dark:text-gray-100">{data.educationDescription}</p>
                            </li>
                          </ol>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.h2
            layout='position'
            className='font-bold min-w-20 sm:w-44 md:w-48 h-32 text-md text-center md:text-xl z-50 text-gray-800 dark:text-gray-100'
          >
            <div className='my-5 mb-1 md:my-4 flex justify-center'>
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