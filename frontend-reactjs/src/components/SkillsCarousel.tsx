import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';

const SkillsCarousel = () => {
  const [skillsData, setSkillsData] = useState<any[]>([]);

  useEffect(() => {
    const query = '*[_type == "skillsCarousel"]';

    client.fetch(query).then((data) => {
      setSkillsData(data);
    });
  }, []);

  const constraintsRef = useRef<HTMLDivElement>(null);
  const totalItems = skillsData.length;
  const infiniteSkillsData = [...skillsData, ...skillsData]; // Create an infinite loop of skillsData

  return (
    <div className='flex px-4 py-12 border-y bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-950'>
      <div ref={constraintsRef} className='overflow-hidden flex' style={{ margin: '0 5%' }}>
        <div ref={constraintsRef} className="flex" style={{ width: '100%' }}>
          <motion.div
            key={totalItems}
            animate={{
              x: -168 * totalItems // Adjust the value based on your carousel item width
            }}
            transition={{
              duration: totalItems * 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear" // Add linear easing
            }}
            className='flex gap-12'
          >
            {infiniteSkillsData.map((element: any) => {
              return (
                <motion.div
                  key={element.id}
                  className='w-[120px] h-[120px] overflow-hidden flex justify-center items-center transition-all ease-in-out duration-300'
                  whileHover={{ scale: 4/3 }}
                >
                  <a href={element.skillsLink} target='_blank'>
                    <img
                      className='h-[90px] w-[90px] object-cover rounded-xl pointer-events-none cursor-pointer dark:hidden'
                      src={urlFor(element.skillsImage).toString()}
                      alt={element.skillsTitle}
                    />
                    <img
                      className='h-[90px] w-[90px] object-cover rounded-xl pointer-events-none cursor-pointer hidden dark:block'
                      src={urlFor(element.skillsImageDark).toString()}
                      alt={element.skillsTitle}
                    />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;