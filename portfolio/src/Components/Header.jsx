import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
    document.body.style.overflow = "hidden"
    } else {
    document.body.style.overflow = "auto"
    }

    return (
        <header className="py-10 px-5 lg:px-25 sticky top-0 bg-white/70 backdrop-blur-md z-50">
            <nav className="flex justify-between items-center">
                <div>
                    <p className="text-3xl font-bold tracking-widest">sample</p>
                </div>
                <div className="hidden lg:block">
                    <ul className='flex gap-6'>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work Experience</a></li>
                        <li><a href="#work">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="block lg:hidden">
                    <FontAwesomeIcon icon={faBars} 
                        className='text-3xl hover:cursor-pointer'
                        onClick={() => setIsOpen(true)}
                        />
                </div>

                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8">
                        <ul className="flex flex-col gap-8 text-xl">
                            <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
                            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                            <li><a href="#work" onClick={() => setIsOpen(false)}>Work Experience</a></li>
                            <li><a href="#work" onClick={() => setIsOpen(false)}>Education</a></li>
                            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        </ul>
                         <button onClick={() => setIsOpen(false)}
                            className='text-3xl font-bold'>
                            ✕
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header