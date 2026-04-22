// src/data/projects.js

// Importación de imágenes
import iappImg from '../assets/projects/projectIapp.jpeg';
import weatherImg from '../assets/projects/weatherapp.jpeg';
import multimediaImg from '../assets/projects/multimediarecords.jpeg';
import todoImg from '../assets/projects/todoapp2.jpeg';
import interpreterImg from '../assets/projects/InterpreterAI.jpeg';

export const projects = [
    {
        id: 1,
        title: 'IApp',
        description: 'A super IA-Hub mixing ChatGPT, Gemini, and Claude all in one place!',
        image: iappImg,
        tags: ["React", "Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/IApp/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/IApp'
    },
    {
        id: 2,
        title: 'Weather-App',
        description: 'Your weather in an app.',
        image: weatherImg,
        tags: ["Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/Weather-App/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/Weather-App'
    },
    {
        id: 3,
        title: 'Multimedia Records',
        description: 'All the internet multimedia in one place.',
        image: multimediaImg,
        tags: ["Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/MultimediaRecords/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/MultimediaRecords'
    },
    {
        id: 4,
        title: 'Todo-App',
        description: 'Simple Todos solution.',
        image: todoImg,
        tags: ["React", "Javascript", "CSS", "HTML"],
        demoUrl: "https://calvinrbobadillaf.github.io/Todo-App/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/Todo-App'
    },
    {
        id: 5,
        title: 'InterpreterAI',
        description: 'An app to translate in real time',
        image: interpreterImg,
        tags: ["React", "Javascript", "Python", "FastApi"],
        demoUrl: "https://calvinrbobadillaf.github.io/InterpreterAI/",
        githubUrl: 'https://github.com/CalvinRBobadillaF/InterpreterAI'
    },
];