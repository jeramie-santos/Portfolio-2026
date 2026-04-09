import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faTailwindCss, faGitSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const About = () => {
   
const skillsData = [
  {
    title: "Core",
    items: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs }
    ]
  },
  {
    title: "Front-End Stack",
    items: [
      { name: "React", icon: faReact },
      { name: "Tailwind", icon: faTailwindCss }
    ]
  },
  {
    title: "Version Control",
    items: [
      { name: "Git", icon: faGitSquare },
      { name: "Github", icon: faGithubSquare }
    ]
  }
];
   
    return (
        <section className="py-10 px-8 border-2 flex flex-col gap-8 md:flex-row scroll-mt-24" id='about'>
            <div className="flex flex-col gap-8 md:flex-1 lg:items-center lg:justify-center">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">About Me</h2>
                <div className="flex flex-col gap-4">
                    <p> I'm a web developer based in the Philippines. </p>
                    <p>I enjoy breaking down how things work and turning that understanding into clean, functional code. I'm a frontend-focused developer with full-stack experience, building responsive and user-friendly applications using React and Tailwind CSS, with a strong focus on performance and usability.</p>
                    <p> Through building projects, I've explored multiple programming languages such as Java, C#, and Python, which have helped expand my skill set and strengthen my problem-solving abilities.</p>
                    <p> I'm always eager to learn, take on new challenges, and deepen my understanding of software development. </p>
                </div>
            </div>
            <div className='md:flex-1'>
                <div className='flex flex-col gap-6'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Tech Stack</h2>
                    <div className='flex flex-col gap-4'>
                        {skillsData.map((skill, index) => 
                            <div key={index} className='flex flex-col gap-4'>
                                <p className='text-center text-xl md:text-2xl'>{skill.title}</p>
                                <div className='flex gap-4 items-center justify-center flex-wrap'>
                                   {skill.items.map((item, j) => 
                                     <div key={j} className='px-6 py-4 border-2 flex flex-col justify-center items-center gap-2 rounded-xl'>
                                        <FontAwesomeIcon icon={item.icon} className='text-3xl md:text-5xl'></FontAwesomeIcon>
                                        {item.name}
                                    </div>
                                )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;