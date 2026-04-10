import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faSquare } from '@fortawesome/free-solid-svg-icons';


import weather from "../assets/Weather-App.jpg"

const Projects = () => {

const featuredProjects = [
  {
    title: "Weather App",
    description: "Sleek modern responsive weather app. Uses openweathermap.org API for data fetching.",
    image: weather,
    tech: ["React", "Tailwind"],
    liveLink: "https://react-weather-nine-gray.vercel.app/",
    githubLink: "https://github.com/jeramie-santos/React-Weather"
  },
  {
    title: "Admin Dashboard",
    description: "Sleek modern responsive weather app. Uses openweathermap.org API for data fetching",
    image: weather,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://react-weather-nine-gray.vercel.app/",
    githubLink: "https://github.com/jeramie-santos/React-Weather"
  },
  {
    title: "E-commerce",
    description: "Sleek modern responsive weather app. Uses openweathermap.org API for data fetching",
    image: weather,
    tech: ["React", "Tailwind", "Springboot"],
    liveLink: "https://react-weather-nine-gray.vercel.app/",
    githubLink: "https://github.com/jeramie-santos/React-Weather"
  }
];

    return (
        <section className="py-15 px-8 flex flex-col gap-8 lg:py-20 scroll-mt-24 lg:px-30" id='project'>
            <div className="flex flex-col items-center gap-4">
                <div className='flex items-center justify-center gap-4'>
                    <FontAwesomeIcon icon={faLaptopCode} className='text-2xl md:text-3xl lg:text-4xl text-(--color-primary)'/>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Featured Projects</h2>
                </div>
                <p className='text-lg md:text-2xl'>Selection of my recent work and personal projects.</p>
            </div>
            <div className="grid grid-cols-1 grid-rows-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project, index) => 
                    <div key={index} className="bg-(--color-surface) flex flex-col rounded-3xl shadow-xl hover:shadow-2xl md:max-w-md lg:max-w-lg justify-self-center overflow-hidden">
                        <div className="flex-1">
                            <img src={weather} alt="Weather-App" className="w-full h-55 object-cover"/>
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-4 lg:p-6">
                            <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
                            <p className='text-sm md:text-md text-(--color-text-secondary)'>{project.description}</p>
                            <div>
                                <ul className="flex gap-4 flex-wrap">
                                    {project.tech.map((item, j) => 
                                        <li key={j} className="border border-(--color-primary-dark) border-sm p-2 rounded-full text-sm md:text-md text-(--color-primary-light)">{item}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="flex gap-2 md:gap-4 items-center">
                                <a href={project.liveLink} target='blank' className="py-2 px-4  rounded-lg text-md text-sm md:text-md text-(--color-bg) bg-(--color-primary) hover:cursor-pointer hover:bg-(--color-primary-light)">View Project</a> 
                                <a href={project.githubLink} target='blank' className='flex items-center text-md'> <FontAwesomeIcon icon={faGithub} className="text-2xl text-(--color-primary) hover:cursor-pointer hover:text-(--color-primary-light)"/> </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects;