import { useState } from "react"
import { cn } from "../lib/util"

const skills = [

    //Frontend
    {
        name: "HTML", category: "Frontend", logo: 'src/assets/html5-logo_svgstack_com_28511775598174.svg'
    },
    {
        name: "CSS", category: "Frontend", logo: 'src/assets/css-logo_svgstack_com_28131775598275.svg '
    },
    {
        name: "Javascript", category: "Frontend", logo: 'src/assets/javascript-logo_svgstack_com_28641775598299.svg '
    },
    {
        name: "Typescript", category: "Frontend", logo: 'src/assets/typescript-logo_svgstack_com_31481775598309.svg '
    },
    {
        name: "React", category: "Frontend", logo: 'src/assets/react.svg '
    },
    {
        name: "Tailwind CSS", category: "Frontend", logo: 'src/assets/tailwind-svgrepo-com.svg'
    }/*,
    {
        name: "Next.js", category: "Frontend", logo: 'src/assets/nextjs-logo_svgstack_com_28891775598344.svg '
    },*/,
    {
        name: "React Native ", category: "Mobile", logo: 'src/assets/reactts-svgrepo-com.svg'
    },



    //Backend
    {
        name: "Python", category: "Backend", logo: 'src/assets/python-logo_svgstack_com_29121775598387.svg '
    },
    {
        name: "FastAPI", category: "Backend", logo: 'src/assets/fastapi-svgrepo-com.svg'
    },/*
    {
        name: "Flask", category: "Backend", logo: 'src/assets/flask-programming-logo_svgstack_com_28321775598453.svg '
    },
    {
        name: "MySQL", category: "Backend", logo: 'src/assets/mysql-logo-svgrepo-com.svg'
    },
    {
        name: "SQL", category: "Backend", logo: 'src/assets/sql-database-sql-azure-svgrepo-com.svg'
    },
    {
        name: "Node.js", category: "Backend", logo: 'src/assets/node-js-svgrepo-com.svg '
    },
    */

    //Tools

    {
        name: "Git", category: "Tools", logo: 'src/assets/git-logo-svg_svgstack_com_28381775598373.svg '
    },
    {
        name: "GitHub", category: "Tools", logo: 'src/assets/github-svgrepo-com.svg '
    },/*
    {
        name: "Figma", category: "Tools", logo: 'src/assets/figma-svgrepo-com.svg '
    },*/
    {
        name: "VS Code", category: "Tools", logo: 'src/assets/vs-code-svgrepo-com.svg'
    },
    {
        name: "Terminal", category: "Tools", logo: 'src/assets/terminal-svgrepo-com.svg'
    },

    //Other/

    {
        name: "English C1", category: "Others", logo: 'src/assets/language-svgrepo-com.svg'
    },
    {
        name: "Spanish Native", category: "Others", logo: ' src/assets/language-svgrepo-com (1).svg'
    },
    {
        name: "Microsoft Office", category: "Others", logo: 'src/assets/icons8-microsoft-office-2019.svg'
    },
    {
        name: "Interpretation Skills", category: "Others", logo: ' src/assets/language-alt-svgrepo-com.svg'
    },
    {
        name: "IA Skills", category: "Others", logo: 'src/assets/openai-svgrepo-com (1).svg'
    },
    {
        name: "Help Desk Tier 1", category: "Others", logo: 'src/assets/windows-applications-svgrepo-com.svg'
    },
]

const categories = ["All", "Frontend", "Backend", "Mobile", "Tools", "Others"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All")

    const filterSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

    return <section id="skills" className="py-24 px-4 relative bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}  onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-start  gap-4">

                            <div >
                            <img 
                                    src={skill.logo} 
                                     alt={`${skill.name}`} 
                                        className="w-12 h-12 object-contain " // Tamaño controlado con Tailwind
                                    />
                            

                            </div>
                            <div className="  mb-4">
                                
                                
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                                
                        </div>
                    ))}
                </div>
            </div>
    </section>
}