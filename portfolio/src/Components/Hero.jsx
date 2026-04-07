import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <div className="min-h-[80svh] border-2 flex flex-col-reverse md:flex-row">
            <div className="flex-1 border-blue-500 border-2 px-8 flex flex-col justify-center gap-3 lg:gap-4">
                <p className="text-2xl lg:text-4xl">Hi! I'm</p>
                <h1 className="font-bold text-4xl lg:text-8xl">Jeramie Paul Santos</h1>
                <p className="text-2xl font-bold lg:text-4xl">Front End Developer</p>
                <div className="flex gap-8 items-center">
                    <button className="border-2 px-3 py-4 rounded-xl text-sm md:text-md lg:text-lg">Contact Me</button>
                    <button className="border-2 px-3 py-4 rounded-xl text-sm md:text-md lg:text-lg">Download CV</button>
                </div>
                <div>
                    <ul className='flex gap-2'>
                        <li><a href="https://www.linkedin.com/in/jeramie-paul-santos-8285a1292/" target='blank' className='text-3xl lg:text-4xl'><FontAwesomeIcon icon={faLinkedin}/></a></li>
                        <li><a href="https://github.com/jeramie-santos" target='blank' className='text-3xl lg:text-4xl'><FontAwesomeIcon icon={faSquareGithub}/></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 border-red-500 border-2 flex items-center justify-center">
                <div className="bg-black h-70 w-70 lg:h-120 lg:w-120 rounded-full"> </div>
            </div>
        </div>
    )
}  

export default Hero;