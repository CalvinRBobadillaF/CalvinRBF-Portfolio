import { AlarmCheck, ArrowBigRightIcon } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'IApp',
        description: 'A super IA-Hub mixing ChatGPT, Gemini, and Claude all in one place!',
        image: `${import.meta.env.BASE_URL}projects/projectIapp.jpeg`,
        tags: ["React", "Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/IApp/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/IApp'
    },
    {
        id: 2,
        title: 'Weather-App',
        description: 'Your weather in an app.',
        image: `${import.meta.env.BASE_URL}projects/weatherapp.jpeg`,
        tags: ["Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/Weather-App/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/Weather-App'
    },
    {
        id: 3,
        title: 'Multimedia Records',
        description: 'All the internet multimedia in one place.',
        image: `${import.meta.env.BASE_URL}projects/multimediarecords.jpeg`,
        tags: ["Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/MultimediaRecords/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/MultimediaRecords'
    },
    {
        id: 4,
        title: 'Todo-App',
        description: 'Simple Todos solution.',
        image: `${import.meta.env.BASE_URL}projects/todoapp2.jpeg`,
        tags: ["React", "Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/Todo-App/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/Todo-App'
    },
    {
        id: 5,
        title: 'InterpreterAI',
        description: 'An app to translate in real time',
        image: `${import.meta.env.BASE_URL}projects/InterpreterAI.jpeg`,
        tags: ["React", "Javascript", "Python", "FastApi"],
        demoUrl: "https://calvinrbobadillaf.github.io/InterpreterAI/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/InterpreterAI'
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    These are my best projects that have allowed me to put into practice 
                    the knowledge I have gained.
                </p>

                {/* Añadido gap-8 para que las tarjetas no estén pegadas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-sm border border-white/10 hover:-translate-y-2 transition-all duration-300">
                            
                            {/* Contenedor de Imagen */}
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Contenedor de Texto (Fuera del div de la imagen) */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {/* CORRECCIÓN: project.tags en lugar de projects.tags */}
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href={project.demoUrl} className="text-primary hover:underline text-sm font-semibold">View Demo →</a>
                                    <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors">
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
                
            </div>
            <div className="text-center mt-12">
                    <a className="space-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/calvinrbobadillaf">
                        Check my github <ArrowBigRightIcon />
                    </a>

                </div>
        </section>
    );
}