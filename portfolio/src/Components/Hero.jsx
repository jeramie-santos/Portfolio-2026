import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import displayPicture from "../assets/Display-Pic.jpg"

const Hero = () => {
    return (
        <section className="min-h-[80svh] flex flex-col-reverse md:flex-row gap-6 lg:px-30 md:gap-0">
            <div className="flex-1 px-8 flex flex-col justify-center gap-3 lg:px-0 lg:gap-4">
                <p className="text-2xl md:text-3xl lg:text-4xl">Hi! I'm</p>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl xl:text-8xl">Jeramie Paul Santos</h1>
                <p className="text-2xl font-bold md:text-3xl lg:text-5xl text-(--color-primary-light)">Front End Developer</p>
                <div className="flex gap-4 items-center lg:gap-6">
                    <a href='#contact' className="text-(--color-bg) px-2 py-3 rounded-xl text-sm md:text-sm lg:text-lg lg:px-3 lg:py-4 bg-(--color-primary) hover:cursor-pointer hover:bg-(--color-primary-light)">Contact Me</a>
                    <a href='/Resume.pdf' className="text-(--color-primary) border px-2 py-3 rounded-xl text-sm md:text-sm lg:text-lg lg:px-3 lg:py-4 hover:cursor-pointer" target='blank' rel="noopener noreferrer">Download Resume</a>
                </div>
                <div>
                    <ul className='flex gap-2'>
                        <li><a href="https://www.linkedin.com/in/jeramie-paul-santos-8285a1292/" target='blank' className='text-3xl lg:text-4xl'><FontAwesomeIcon icon={faLinkedin} className='text-(--color-primary) hover:text-(--color-primary-light)'/></a></li>
                        <li><a href="https://github.com/jeramie-santos" target='blank' className='text-3xl lg:text-4xl'><FontAwesomeIcon icon={faSquareGithub} className='text-(--color-primary) hover:text-(--color-primary-light)'/></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img src={displayPicture} className="h-60 w-60 md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120 rounded-full object-cover border-8"/>
            </div>
        </section>
    )
}  

export default Hero;