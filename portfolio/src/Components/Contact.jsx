const Contact = () => {
    
    const emailSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
    
        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("emailAddress"),
            message: formData.get("message")
        }

        console.log(data);
    }
    
    return (
        <section className="bg-(--color-surface) py-10 px-8 flex flex-col items-center gap-8 scroll-mt-24" id="contact">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Contact Me</h2>
            <div className="px-4 py-6 w-80 rounded-lg md:w-md lg:w-200">
                <form className="flex flex-col gap-4" onSubmit={emailSubmit}>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:flex-1">
                            <label htmlFor="fullName" className="text-lg">Full Name</label>
                            <input type="text" id="fullName" name="fullName"  className="bg-(--color-bg) border py-2 px-4 rounded-lg border-(--color-primary) focus:outline-none focus:border-(--color-primary-light)" required/>
                        </div>
                        <div className="flex flex-col gap-2 lg:flex-1">
                            <label htmlFor="emailAddress" className="text-lg">Email Address</label>
                            <input type="email" id="emailAddress" name="emailAddress" className="bg-(--color-bg) border py-2 px-4 rounded-lg border-(--color-primary) focus:outline-none focus:border-(--color-primary-light)" required/>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-lg">Your Message</label>
                            <textarea id="message" name="message" className="bg-(--color-bg) border py-2 px-4 rounded-lg h-80 border-(--color-primary) focus:outline-none focus:border-(--color-primary-light)" required></textarea>
                        </div>
                    </div>
                    <div className="flex lg:justify-end">
                        <button className="flex-1 py-4 rounded-lg lg:w-30 lg:flex-none bg-(--color-primary) hover:cursor-pointer hover:bg-(--color-primary-dark) text-(--color-bg)" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;