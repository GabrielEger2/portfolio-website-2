import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';

import { motion } from 'framer-motion';

const Projects = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
  const query = '*[_type == "projects"]';

  client.fetch(query).then((data) => {
    setProjectsData(data);
    });
  }, []);

  return (
    <div className='bg-gray-100 dark:bg-gray-800' id='projects'>
      <div className='flex justify-center'>
        <h2 className='text-lg text-center text-gray-400 dark:text-gray-500 mt-10 mb-12'>
          Some of my <br />
          <span className='text-gray-800 dark:text-gray-100 text-3xl mt-4 font-bold'>Projects</span>
        </h2>
      </div>
      <div className='justify-center flex'>
        <div>
          {projectsData.map((element: any) => {
            return (
              <div>
                <img src={urlFor(element.projectImage).toString()} alt={element.projectTitle} className='h-48 w-96 object-cover' />
                <h2>
                  {element.projectTitle}
                </h2>
              </div>
            )})
          }
        </div>
      </div>
    </div>
  )
}

export default Projects