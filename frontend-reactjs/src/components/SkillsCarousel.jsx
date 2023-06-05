import { useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  ];

const SkillsCarousel = () => {
    const constraintsRef = useRef();
    const totalItems = skills.length;
    
    return (
        <div className='flex px-1 md:px-4 py-10 border-y bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-950'>
            <div ref={constraintsRef} className='overflow-hidden flex' style={{ margin: '0 5%' }}>
                <div ref={constraintsRef} className="flex" style={{width: '100%'}}>
                    <motion.div
                    key={totalItems}
                    animate={{
                      x: -totalItems * 90 // Adjust the value based on your carousel item width
                    }}
                    transition={{
                      duration: totalItems * 3,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                    drag='x' 
                    dragConstraints={constraintsRef} 
                    className='flex gap-6 md:gap-12'
                    >
                        {skills.map((element) => {
                            return (
                                <motion.div key={element.id} className='w-32 h-32 rounded-lg cursor-grab overflow-hidden'>
                                    <img className='h-32 w-32 object-cover rounded-xl pointer-events-none' src={element.image} alt={element.tile}/>
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