import stripsWhiteIcon from '../assets/imgs/stripsWhiteIcon.png';
import stripsDarkIcon from '../assets/imgs/stripsDarkIcon.png';

const Footer = () => {
  // Get the current year
  const current_year = new Date().getFullYear();

  return (
    <div>   
        <footer className="bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-950 border-t">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <img src={stripsDarkIcon} className="h-8 mr-3 dark:hidden" alt="Gabriel Strips Logo" />
                            <img src={stripsWhiteIcon} className="h-8 mr-3 hidden dark:block" alt="Gabriel Strips Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">&lt;Gabriel /&gt;</span>
                        </a>
                    </div>
                <div className="grid grid-cols-2 gap-12 md:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-gray-50">Project</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://www.themoviedb.org/" className="hover:underline">Github</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Overview</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-gray-50">Creator</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/GabrielEger2" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://gabrieleger.onrender.com/#contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-gray-50">License</h2>
                        <ul className=" text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://en.wikipedia.org/wiki/MIT_License" className="hover:underline">MIT's license</a>
                            </li>
                            <li>
                                <a href="https://www.buymeacoffee.com/GabrielEger" className="hover:underline">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-800 dark:border-gray-600 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center  text-gray-500 dark:text-gray-400">© {current_year} Gabriel Eger. MIT License.
                    </span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer