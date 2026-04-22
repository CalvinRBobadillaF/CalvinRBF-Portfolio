import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">
                            Aspiring Developer & Technical Support Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a self-taught developer with a strong interest in technical support and problem-solving.
                            I have experience building frontend applications and working with APIs, while also developing
                            practical troubleshooting skills through hands-on projects and real-world scenarios.
                        </p>

                        <p className="text-muted-foreground">
                            My background in customer service and interpretation has helped me develop strong communication skills,
                            allowing me to explain technical issues clearly to non-technical users. I'm constantly learning and
                            improving, aiming to grow into a well-rounded technical professional.
                        </p>

                        <div className="flex flex-col justify-center sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="space-button">
                                Get in touch
                            </a>

                            {/* ✅ Download CV button */}
                            <a
                                href={`${import.meta.env.BASE_URL}Calvin_Bobadilla_CV.pdf`}
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive web applications using modern technologies like React and JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Technical Support</h4>
                                    <p className="text-muted-foreground">
                                        Troubleshooting issues, assisting users, and breaking down technical problems into simple solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Customer Communication</h4>
                                    <p className="text-muted-foreground">
                                        Strong ability to communicate clearly in English and Spanish, especially in fast-paced support environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}