import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import displayPicture from "../assets/Display-Pic.jpg"

const Hero = () => {
    return (
        <section className="min-h-[80svh] flex flex-col-reverse md:flex-row gap-6 md:gap-0">
            <div className="flex-1 px-8 flex flex-col justify-center gap-3 lg:gap-4 lg:px-20">
                <p className="text-2xl lg:text-4xl">Hi! I'm</p>
                <h1 className="font-bold text-4xl lg:text-8xl">Jeramie Paul Santos</h1>
                <p className="text-2xl font-bold lg:text-5xl">Front End Developer</p>
                <div className="flex gap-4 items-center lg:gap-6">
                    <a href='#contact' className="border px-2 py-3 rounded-xl text-sm md:text-md lg:text-lg lg:px-3 lg:py-4 bg-black text-white hover:cursor-pointer hover:bg-gray-700">Contact Me</a>
                    <button className="border px-2 py-3 rounded-xl text-sm md:text-md lg:text-lg lg:px-3 lg:py-4 hover:cursor-pointer">Download CV</button>
                </div>
                <div>
                    <ul className='flex gap-2'>
                        <li><a href="https://www.linkedin.com/in/jeramie-paul-santos-8285a1292/" target='blank' className='text-3xl lg:text-4xl'><FontAwesomeIcon icon={faLinkedin}/></a></li>
                        <li><a href="https://github.com/jeramie-santos" target='blank' className='text-3xl lg:text-4xl'><FontAwesomeIcon icon={faSquareGithub}/></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img src={displayPicture} className="h-60 w-60 lg:h-120 lg:w-120 rounded-full object-cover"/>
            </div>
        </section>
    )
}  

export default Hero;