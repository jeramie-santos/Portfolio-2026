const Background = () => {
    return (
        <div className="py-10 px-8 border-2 border-red-500 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">Work Experience</h2>
                <div className="flex gap-4">
                    <div className="flex flex-col justify-between items-center">
                        <p>2026</p>
                        <div className="w-0.5 bg-black flex-1 my-2"></div>
                        <p>2024</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">Associate Software Engineer</h3>
                        <p>Accenture Philippines</p>
                        <ul className="flex flex-col gap-2">
                            <li>Full Stack Developer (Java, Spring Boot, MySQL ,HTML, CSS, JavaScript, React) - Developed a full-stack e-commerce website using React and Spring Boot, implementing product listing and cart functionality.</li>
                            <li>Technical Support Representative - Worked with Google Workspace at Accenture. Explained technical solutions in simple, non-technical terms to assist customers. Worked with team members to resolve cases and maintain high service quality.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">Education</h2>
            </div>
        </div>
    )
}

export default Background;