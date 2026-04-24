import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faGears, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


import weather from "../assets/Weather-App.jpg"
import dashboard from "../assets/Admin-Dashboard.jpg"

const Projects = () => {

const featuredProjects = [
  {
    title: "Weather App",
    projectStatus: "done",
    description: "Sleek modern responsive weather app. Uses openweathermap.org API for data fetching.",
    image: weather,
    tech: ["React", "Tailwind"],
    liveLink: "https://react-weather-nine-gray.vercel.app/",
    githubLink: "https://github.com/jeramie-santos/React-Weather"
  },
  {
    title: "Admin Dashboard",
    projectStatus: "done",
    description: "Sleek, responsive dashboard for tracking analytics, managing users, and monitoring real-time activity.",
    image: dashboard,
    tech: ["React", "Tailwind"],
    liveLink: "https://admin-dashboard-gamma-gold.vercel.app/",
    githubLink: "https://github.com/jeramie-santos/React-Admin-Dashboard"
  },
  {
    title: "Simple Chat",
    projectStatus: "work-in-progress",
    description: "A simple chatting system.",
    image: "",
    tech: ["React", "Tailwind", "Express" ,"MongoDB"],
    liveLink: "https://github.com/jeramie-santos/react-simple-chat",
    githubLink: ""
  },
];

    return (
        <section className="py-15 px-8 flex flex-col gap-8 lg:py-20 lg:px-30 lg:gap-10 scroll-mt-24" id='project'>
            <div className="flex flex-col items-center gap-4">
                <div className='flex items-center justify-center gap-4'>
                    <FontAwesomeIcon icon={faLaptopCode} className='text-2xl md:text-3xl lg:text-4xl text-(--color-primary)'/>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Featured Projects</h2>
                </div>
                <p className='text-base md:text-lg text-(--color-text-secondary)'>Selection of my recent work and personal projects.</p>
            </div>
            <div className="grid gap-10 justify-center grid-cols-[repeat(auto-fit,minmax(280px,320px))]">
                {featuredProjects.map((project, index) => 
                    <div key={index} className="bg-(--color-surface) flex flex-col rounded-3xl shadow-xl hover:shadow-2xl justify-self-center overflow-hidden">
                        <div className="flex-1">
                            {project.image == "" ? <div className="flex flex-col items-center justify-center w-full h-55"> <FontAwesomeIcon icon={faGears} className='text-6xl'/> </div>
                            : <img src={project.image} alt={project.title} className="w-full h-55 object-cover"/> }
                            
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-4 lg:p-6">
                            <div className='flex-1 flex flex-col gap-4 justify-around'>
                                <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
                                {project.projectStatus === "work-in-progress" && (
                                <span className="w-fit text-xs font-semibold px-3 py-1 rounded-full bg-(--color-text-secondary) text-(--color-surface)">
                                    In Progress
                                </span>
                                )}
                                <p className='text-sm md:text-sm text-(--color-text-secondary)'>{project.description}</p>
                                <div>
                                    <ul className="flex gap-4 flex-wrap">
                                        {project.tech.map((item, j) => 
                                            <li key={j} className="border border-(--color-primary-dark) border-sm w-fit px-3 py-1 rounded-full text-sm md:text-sm text-(--color-primary-light)">{item}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex gap-2 md:gap-4 items-center">
                                <a href={project.liveLink} target='blank' className="py-2 px-4 rounded-lg text-sm md:text-sm text-(--color-bg) bg-(--color-primary) hover:cursor-pointer hover:bg-(--color-primary-light) flex items-center gap-1" rel="noopener noreferrer" aria-label={`To view the project ${project.title} live`}> {project.projectStatus == "work-in-progress" ? "View Code" : "View Project"} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs'/></a>
                                {project.projectStatus == "work-in-progress" ? "" : <a href={project.githubLink} target='blank' className='flex items-center text-sm' rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} className="text-2xl text-(--color-primary) hover:cursor-pointer hover:text-(--color-primary-light)"/> </a>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects;