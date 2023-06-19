import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

const HighlightedProjectCard = (props) => {
  return (
    <div>
        <div className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-lg md:flex-row md:max-w-3xl  dark:bg-gray-800 dark:border-gray-950 shadow-lg">
          <img className={`object-cover w-full rounded-t-lg h-[175px] md:w-[311px] md:rounded-none md:rounded-l-lg md:${props.index % 2 === 0 ? '' : 'hidden'}`} src={props.image} alt={props.title}/>
            <div className="flex flex-col justify-between px-3 py-2 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200">{props.title}</h5>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-300">{props.description} <span className="text-purple-500 dark:text-yellow-500 font-bold">{props.techStack}</span>.</p>
                <div className='flex text-gray-800 dark:text-gray-200 space-x-4 justify-center md:justify-start'>
                  {props.github && (
                    <a href={props.github} target='_blank'>
                      <AiOutlineGithub size={30} className=' hover:scale-125 ease-in-out transition-all duration-500' />
                    </a>
                  )}
                  {props.link && (
                    <a href={props.link} target='_blank'>
                      <AiOutlineLink size={30} className='hover:scale-125 ease-in-out transition-all duration-500' />
                    </a>
                  )}
                </div>
            </div>
          <img className={`object-cover w-full rounded-t-lg h-[175px] md:w-[311px] md:rounded-none md:rounded-r-lg ${props.index % 2 === 0 ? 'hidden' : 'hidden md:block'}`} src={props.image} alt={props.title}/>
        </div>
    </div>
  )
}

export default HighlightedProjectCard