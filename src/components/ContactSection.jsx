import { Locate, Mail, Phone } from "lucide-react"

export const ContactSection = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind that I could collaborate on? Are you interested in my skills
                    or want to just chat with me? Contact me!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* --- COLUMNA IZQUIERDA: Información de Contacto --- */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact information</h3> 
                        
                        <div className="space-y-6 justify-center">
                            
                            {/* Item 1: Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:calvinbobadillaf@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        calvinbobadillaf@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Item 2: Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+18292855312" className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 829-285-5312
                                    </a>
                                </div>
                            </div>

                            {/* Item 3: Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Locate className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    {/* Cambié la etiqueta <a> por un <span> ya que no es un enlace clickeable */}
                                    <span className="text-muted-foreground">
                                        Dominican Republic
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Formulario --- */}
                    <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        
                        <form className="space-y-6" onSubmit={(e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    const mailtoLink = `mailto:calvinbobadillaf@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`
    window.location.href = mailtoLink
}}>
                            {/* Input: Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                                    placeholder="John Doe" 
                                />
                            </div>

                            {/* Input: Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                                    placeholder="john@example.com" 
                                />
                            </div>

                            {/* Input: Phone */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                    type="text" 
                                    id="message" 
                                    name="message" 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none" 
                                    placeholder="Hello, i like to talk about..." 
                                />
                            </div>

                            {/* Botón de Enviar */}
                            <button 
                                type="submit" 
                                
                                className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors "
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}