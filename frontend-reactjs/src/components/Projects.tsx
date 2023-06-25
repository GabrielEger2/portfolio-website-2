import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';
import { motion, AnimatePresence } from 'framer-motion';
import HighlightedProjectCard from './HighlightedProjectCard';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

const Projects = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [HighLightedProjects, setHighLightedProjects] = useState<any[]>([]);
  const [active, setActive] = useState('All');	

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjectsData(data);
      setFilteredProjects(data);
    });
  }, []);

  useEffect(() => {
    const filteredProjects = projectsData.filter((project) => project.projectHighLighted === true);
    setHighLightedProjects(filteredProjects);
  }, [projectsData]);

  useEffect(() => {
    if (active === 'All') {
      setFilteredProjects(projectsData);
      return;
    }
    const filteredProjects = projectsData.filter((project) => project.projectFilter.includes(active));
    setFilteredProjects(filteredProjects);
  }, [active]);

  return (
    <div className='bg-gray-50 dark:bg-gray-800 pb-4 md:pb-0' id='projects'>
      <div className='flex justify-center'>
        <h2 className='text-lg text-center text-gray-400 dark:text-gray-500 my-10'>
          Some of my <br />
          <span className='text-gray-800 dark:text-gray-100 text-3xl mt-4 font-bold'>Projects</span>
        </h2>
      </div>
      <div className='px-10 max-w-[1300px] h-full mx-auto justify-center'>
        <div className='flex flex-col space-y-4'>
          {HighLightedProjects.map((project, index) => (
            <div
              key={project.projectTitle}
              className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <HighlightedProjectCard 
                index={index}
                title={project.projectTitle}
                description={project.projectDescription}
                image={urlFor(project.projectImage).toString()}
                github={project.projectGithubLink}
                link={project.projectWebLink}
                techStack={project.projectTechStack}
              />
            </div>
          ))}
        </div>
        <div className='space-x-4 flex justify-center mb-4 mt-10'>
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
                  <div className='rounded-2xl border shadow-lg max-w-[400px] bg-gray-200 border-gray-300 dark:border-gray-950 dark:bg-gray-800'>
                    <img src={urlFor(element.projectImage).toString()} alt={element.projectTitle} className='w-[400px] h-[225px] object-cover rounded-t-2xl' />
                    <div className='flex justify-center space-x-4 my-2 text-gray-800 dark:text-gray-200'>
                      {element.projectGithubLink && (
                        <a href={element.projectGithubLink} target='_blank'>
                          <AiOutlineGithub size={30} className=' hover:scale-125 ease-in-out transition-all duration-500' />
                        </a>
                      )}
                      {element.projectWebLink && (
                        <a href={element.projectWebLink} target='_blank'>
                          <AiOutlineLink size={30} className='hover:scale-125 ease-in-out transition-all duration-500' />
                        </a>
                      )}
                    </div>
                  </div>
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