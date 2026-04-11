import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Background = () => {
    return (
        <section className="py-15 px-8 flex flex-col gap-15 items-center scroll-mt-24 lg:gap-20 lg:py-10" id="work">
            <div className="flex-1 flex flex-col gap-8 w-80 md:w-md lg:gap-20">
                <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faBriefcase} className='text-2xl md:text-3xl lg:text-4xl mr-4 text-(--color-primary)'/>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Work Experience</h2>
                </div>
                <div className="bg-(--color-primary-dark)/10 border-2 border-(--color-primary-dark) flex gap-8 p-6 rounded-xl">
                    <div className="flex flex-col justify-between items-center">
                        <p>2026</p>
                        <div className="w-0.5 bg-(--color-primary) flex-1 my-2"></div>
                        <p>2024</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold md:text-xl text-(--color-primary-light)">Associate Software Engineer</h3>
                        <p>Accenture Philippines</p>
                        <p className="text-(--color-text-secondary)"> <span className='text-(--color-primary)'>Full Stack Developer</span> (Java, Spring Boot, MySQL ,HTML, CSS, JavaScript, React) - Developed a full-stack e-commerce website using React and Spring Boot, implementing product listing and cart functionality.</p>
                        <p className="text-(--color-text-secondary)"> <span className='text-(--color-primary)'>Technical Support Representative L1</span> - Worked with Google Workspace at Accenture. Explained technical solutions in simple, non-technical terms to assist customers. Worked with team members to resolve cases and maintain high service quality.</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-8 w-80 md:w-md lg:gap-20">
                <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faGraduationCap} className='text-2xl md:text-3xl lg:text-4xl mr-4 text-(--color-primary)'/>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Education</h2>
                </div>
                <div className="bg-(--color-primary-dark)/10 border-2 border-(--color-primary-dark) flex gap-8 p-6 rounded-xl">
                    <div className="flex flex-col justify-between items-center">
                        <p>2024</p>
                        <div className="w-0.5 bg-(--color-primary) flex-1 my-2"></div>
                        <p>2020</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold md:text-xl text-(--color-primary-light)">Bulacan State University</h3>
                        <p className="text-(--color-text-secondary)">Bachelor of Science in Information Technology</p>
                        <p className="text-(--color-text-secondary)">Web and Mobile Application Development</p>
                        <p className="text-(--color-primary) font-bold">CUM LAUDE</p>
                    </div>
                </div>
                <div className="bg-(--color-primary-dark)/10 border-2 border-(--color-primary-dark) flex gap-8 p-6 rounded-xl">
                    <div className="flex flex-col justify-between items-center">
                        <p>2020</p>
                        <div className="w-0.5 bg-(--color-primary) flex-1 my-2"></div>
                        <p>2018</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold md:text-xl text-(--color-primary-light)">Guiguinto National Vocational High School</h3>
                        <p className="text-(--color-text-secondary)">Senior High School</p>
                        <p className="text-(--color-text-secondary)">Technical Vocation Livelihood (Programming)</p>
                        <p className="text-(--color-primary) font-bold">BEST IN WORK IMMERSION</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Background;