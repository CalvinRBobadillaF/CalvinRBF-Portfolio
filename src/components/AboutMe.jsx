import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 fo ">
                <h3 className="text-2xl font-bold">
                    Passionate web developer & Tech Creator
                </h3>

                <p className="text-muted-foreground">With over 3 years of experience in web development and more than 4 years in tech related areas,
                    I specialize in creating response, accesible, and beatifull web application
                    using on-demand and new technologies.
                </p>

                <p className="text-muted-foreground">I like to create elegant and interesting solutions to complex problems, and i'm constantly
                    learning new technologies and techniques to stay at the forefront of the ever evolving tech-world.
                </p>

                <div className="flex flex-col justify-center sm:flex-row gap-4 pt-4">
                    <a href="#contact" className="space-button">
                        {" "}
                    Get in touch
                    </a>

                    <a href="#contact" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        {" "}
                    Download CV
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10"> 
                        <Code className="h-6 w-6 text-primary" /> </div>
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                           Creating responsive websites and web applications with 
                           modern frameworks 
                        </p>
                    </div>
                    </div>
                    
                </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10"> 
                        <User className="h-6 w-6 text-primary" /> </div>
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                           Designing intuitive user interfaces and seamless user experiences.
                        </p>
                    </div>
                    </div>
                    
                </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10"> 
                        <Briefcase className="h-6 w-6 text-primary" /> </div>
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">Project Management</h4>
                        <p className="text-muted-foreground">
                           Leading projects from conception to completion with agile methodologies.
                        </p>
                    </div>
                    </div>
                    
                </div>
            </div>

            </div>
        </div>
    </section>
}