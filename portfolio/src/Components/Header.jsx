import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase, faEnvelope, faFileLines, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
    document.body.style.overflow = "hidden"
    } else {
    document.body.style.overflow = "auto"
    }

    return (
        <header className="py-10 px-8 lg:px-30 sticky top-0 backdrop-blur-md z-50">
            <nav className="flex justify-between items-center">
                <div>
                    <p className="text-3xl font-bold tracking-wide">J<span className='text-(--color-primary-light)'>P</span><span className='text-(--color-primary)'>S</span></p>
                </div>
                <div className="hidden lg:block">
                    <ul className='flex gap-6'>
                        <li><a href="#project" className="hover:underline hover:underline-offset-8 hover:decoration-(--color-primary)">Projects</a></li>
                        <li><a href="#about" className="hover:underline hover:underline-offset-8 hover:decoration-(--color-primary)">About</a></li>
                        <li><a href="#work" className="hover:underline hover:underline-offset-8 hover:decoration-(--color-primary)">Work Experience</a></li>
                        <li><a href="#work" className="hover:underline hover:underline-offset-8 hover:decoration-(--color-primary)">Education</a></li>
                        <li><a href="#contact" className="hover:underline hover:underline-offset-8 hover:decoration-(--color-primary)">Contact</a></li>
                    </ul>
                </div>
                <div className="block lg:hidden">
                    <FontAwesomeIcon icon={faBars} 
                        className="text-3xl"
                        onClick={() => setIsOpen(true)}
                        />
                </div>

                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-(--color-bg) flex flex-col items-center justify-center gap-8">
                        <ul className="flex flex-col gap-8 text-xl">
                            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faLaptopCode} className='text-(--color-primary)'/><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
                            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faFileLines} className='text-(--color-primary)'/><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faBriefcase} className='text-(--color-primary)'/><a href="#work" onClick={() => setIsOpen(false)}>Work Experience</a></li>
                            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faGraduationCap} className='text-(--color-primary)'/><a href="#work" onClick={() => setIsOpen(false)}>Education</a></li>
                            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faEnvelope} className='text-(--color-primary)'/><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        </ul>
                         <button onClick={() => setIsOpen(false)}
                            className="text-3xl font-bold">
                            ✕
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header