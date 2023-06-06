import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';

const skills = await client.fetch(`*[_type == "skillsCarousel"]`);

const SkillsCarousel = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
      const query = '*[_type == "skillsCarousel"]';

      client.fetch(query).then((data) => {
        setSkills(data);
      });
    }, []);
    
    const constraintsRef = useRef();
    const totalItems = skills.length;
    
    return (
        <div className='flex px-1 md:px-4 py-10 border-y bg-gray-200 border-gray-300 dark:bg-gray-900 dark:border-gray-950'>
            <div ref={constraintsRef} className='overflow-hidden flex' style={{ margin: '0 5%' }}>
                <div ref={constraintsRef} className="flex" style={{width: '100%'}}>
                    <motion.div
                    key={totalItems}
                    animate={{
                      x: -totalItems * 20 // Adjust the value based on your carousel item width
                    }}
                    transition={{
                      duration: totalItems * 0.1,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                    drag='x' 
                    dragConstraints={constraintsRef} 
                    className='flex gap-6 md:gap-12'
                    >
                        {skills.map((element) => {
                            return (
                                <motion.div key={element.id} className='w-24 h-24 rounded-lg cursor-grab overflow-hidden'>
                                    <img className='h-24 w-24 object-cover rounded-xl pointer-events-none' src={urlFor(element.skillsImage)} alt={element.skillsTitle} />
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