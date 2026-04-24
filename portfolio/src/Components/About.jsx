import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faTailwindCss, faGitSquare, faGithubSquare, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';

const About = () => {
   
const skillsData = [
  {
      items: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
    ]
  },
  {
    items: [
      { name: "React", icon: faReact },
      { name: "Tailwind", icon: faTailwindCss },
      { name: "Node", icon: faNodeJs },
    ]
  },
  {
    items: [
      { name: "Java", icon: faJava },
      { name: "Git", icon: faGitSquare },
      { name: "Github", icon: faGithubSquare }
    ]
  }
];
   
    return (
        <section className="py-15 px-8 flex flex-col gap-25 lg:gap-8 md:flex-row lg:px-30 lg:py-10 scroll-mt-24" id='about'>
            <div className="flex flex-col gap-8 md:flex-1">
                <div className='flex items-center justify-center gap-4'>
                  <FontAwesomeIcon icon={faFileLines} className='text-2xl md:text-3xl lg:text-4xl text-(--color-primary)'/>
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">About Me</h2>
                </div>
                <div className="flex flex-col gap-4 lg:w-120 xl:w-150 lg:self-center">
                    <p>I enjoy breaking down how things work and turning that understanding into clean, functional code. I'm a frontend-focused developer with full-stack experience, building responsive and user-friendly applications using React and Tailwind CSS, with a strong focus on performance and usability.</p>
                    <p> Through building projects, I've explored multiple programming languages such as Java, C#, and Python, which have helped expand my skill set and strengthen my problem-solving abilities.</p>
                    <p> I'm always eager to learn, take on new challenges, and deepen my understanding of software development. </p>
                </div>
            </div>
            <div className='md:flex-1'>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center justify-center gap-4'>
                      <FontAwesomeIcon icon={faCode} className='text-2xl md:text-3xl lg:text-4xl text-(--color-primary)'/>
                      <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Tech Stack</h2>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {skillsData.map((skill, index) => 
                            <div key={index} className='flex flex-col gap-6'>
                                <div className='flex gap-4 items-center justify-center flex-wrap'>
                                   {skill.items.map((item, j) => 
                                     <div key={j} className='bg-(--color-surface) p-6 flex flex-col justify-center items-center gap-2 rounded-xl transition hover:-translate-y-2 hover:shadow-2xl'>
                                        <FontAwesomeIcon icon={item.icon} className='text-3xl md:text-5xl text-(--color-primary)'></FontAwesomeIcon>
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