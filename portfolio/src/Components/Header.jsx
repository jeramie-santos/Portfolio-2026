import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <header className="border border-black py-10 px-5 lg:px-25">
            <nav className="flex justify-between items-center">
                <div>
                    <p className="text-3xl font-bold tracking-widest">JERAMIE</p>
                </div>
                <div className="hidden lg:block">
                    <ul className='flex gap-6'>
                        <li><a href="#">About</a> Me</li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Work Experience</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="block lg:hidden">
                    <FontAwesomeIcon icon={faBars} className='text-3xl hover:cursor-pointer'/>
                </div>
            </nav>
        </header>
    )
}

export default Header