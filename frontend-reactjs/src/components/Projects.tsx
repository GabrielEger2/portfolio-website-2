import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';

import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [active, setActive] = useState('All');	

  useEffect(() => {
  const query = '*[_type == "projects"]';

  client.fetch(query).then((data) => {
    setProjectsData(data);
    setFilteredProjects(data);
    });
  }, []);

  useEffect(() => {
    if (active === 'All') {
      setFilteredProjects(projectsData);
      return;
    }
    const filteredProjects = projectsData.filter((project) => project.projectTechStack.includes(active));
    setFilteredProjects(filteredProjects);
  }, [active]);

  return (
    <div className='bg-gray-100 dark:bg-gray-800' id='projects'>
      <div className='flex justify-center'>
        <h2 className='text-lg text-center text-gray-400 dark:text-gray-500 my-10'>
          Some of my <br />
          <span className='text-gray-800 dark:text-gray-100 text-3xl mt-4 font-bold'>Projects</span>
        </h2>
      </div>
      <div className='px-10 max-w-[1300px] h-full mx-auto justify-center'>
        <div className='text-white space-x-4 flex justify-center mb-4'>
          <motion.div 
            className={`items-center justify-center cursor-pointer font-bold rounded-lg px-3 py-1 text-xl ${
              active === 'All' ? 'bg-purple-500 text-gray-50 dark:bg-yellow-500 dark:text-gray-800' : 'border text-gray-800 border-purple-500 dark:text-gray-100 dark:border-yellow-500'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() => setActive('All')} 
          >
            All
          </motion.div>        
          <motion.div 
            className={`items-center justify-center cursor-pointer font-bold rounded-lg px-3 py-1 text-xl ${
              active === 'Python' ? 'bg-purple-500 text-gray-50 dark:bg-yellow-500 dark:text-gray-800' : 'border text-gray-800 border-purple-500 dark:text-gray-100 dark:border-yellow-500'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() => setActive('Python')} 
          >
            Python
          </motion.div>
          <motion.div 
            className={`items-center justify-center cursor-pointer font-bold rounded-lg px-2 py-1 text-xl ${
              active === 'JS/TS' ? 'bg-purple-500 text-gray-50 dark:bg-yellow-500 dark:text-gray-800' : 'border text-gray-800 border-purple-500 dark:text-gray-100 dark:border-yellow-500'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() => setActive('JS/TS')} 
          >
            JS/TS
          </motion.div>  
        </div>
        <motion.div layout className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-6 gap-y-4 pt-4 justify-center">
          {filteredProjects.map((element: any) => {
            return (
              <motion.div key={element.projectTitle}
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.25 }}
              >
                <AnimatePresence>
                  <img src={urlFor(element.projectImage).toString()} alt={element.projectTitle} className='w-[400px] h-[200px] object-cover rounded-2xl border shadow-lg border-gray-300 dark:border-gray-950' />
                </AnimatePresence>
              </motion.div>
            )})
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Projects