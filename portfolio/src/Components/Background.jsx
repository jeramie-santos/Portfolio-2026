const Background = () => {
    return (
        <section className="py-10 px-8 border-2 border-red-500 flex flex-col gap-8 items-center" id="work">
            <div className="flex-1 flex flex-col gap-8 w-80 md:w-md">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">Work Experience</h2>
                <div className="flex gap-8">
                    <div className="flex flex-col justify-between items-center">
                        <p>2026</p>
                        <div className="w-0.5 bg-black flex-1 my-2"></div>
                        <p>2024</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold md:text-xl">Associate Software Engineer</h3>
                        <p>Accenture Philippines</p>
                        <p>Full Stack Developer (Java, Spring Boot, MySQL ,HTML, CSS, JavaScript, React) - Developed a full-stack e-commerce website using React and Spring Boot, implementing product listing and cart functionality.</p>
                        <p>Technical Support Representative - Worked with Google Workspace at Accenture. Explained technical solutions in simple, non-technical terms to assist customers. Worked with team members to resolve cases and maintain high service quality.</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-8 w-80 md:w-md">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">Education</h2>
                <div className="flex gap-8">
                    <div className="flex flex-col justify-between items-center">
                        <p>2024</p>
                        <div className="w-0.5 bg-black flex-1 my-2"></div>
                        <p>2020</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold md:text-xl">Bulacan State University</h3>
                        <p>Bachelor of Science in Information Technology</p>
                        <p>Web and Mobile Application Development</p>
                        <p>Cum Laude</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col justify-between items-center">
                        <p>2020</p>
                        <div className="w-0.5 bg-black flex-1 my-2"></div>
                        <p>2018</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold md:text-xl">Guiguinto National Vocational High School</h3>
                        <p>Senior High School</p>
                        <p>Technical Vocation Livelihood | Programming</p>
                        <p>Best in Work Immersion</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Background;