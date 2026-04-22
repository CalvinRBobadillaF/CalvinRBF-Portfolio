// src/data/skills.js

// 1. Importaciones de Frontend y Mobile
import htmlLogo from '../assets/html5-logo_svgstack_com_28511775598174.svg';
import cssLogo from '../assets/css-logo_svgstack_com_28131775598275.svg';
import jsLogo from '../assets/javascript-logo_svgstack_com_28641775598299.svg';
import tsLogo from '../assets/typescript-logo_svgstack_com_31481775598309.svg';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind-svgrepo-com.svg';
import reactNativeLogo from '../assets/reactts-svgrepo-com.svg';

// 2. Importaciones de Backend
import pythonLogo from '../assets/python-logo_svgstack_com_29121775598387.svg';
import fastApiLogo from '../assets/fastapi-svgrepo-com.svg';

// 3. Importaciones de Tools
import gitLogo from '../assets/git-logo-svg_svgstack_com_28381775598373.svg';
import githubLogo from '../assets/github-svgrepo-com.svg';
import vsCodeLogo from '../assets/vs-code-svgrepo-com.svg';
import terminalLogo from '../assets/terminal-svgrepo-com.svg';

// 4. Importaciones de Others
import englishLogo from '../assets/language-svgrepo-com.svg';
import spanishLogo from '../assets/language-svgrepo-com (1).svg';
import officeLogo from '../assets/icons8-microsoft-office-2019.svg';
import interpretationLogo from '../assets/language-alt-svgrepo-com.svg';
import iaLogo from '../assets/openai-svgrepo-com (1).svg';
import helpDeskLogo from '../assets/windows-applications-svgrepo-com.svg';

// Array de Skills
export const skills = [
    // Frontend
    { name: "HTML", category: "Frontend", logo: htmlLogo },
    { name: "CSS", category: "Frontend", logo: cssLogo },
    { name: "Javascript", category: "Frontend", logo: jsLogo },
    { name: "Typescript", category: "Frontend", logo: tsLogo },
    { name: "React", category: "Frontend", logo: reactLogo },
    { name: "Tailwind CSS", category: "Frontend", logo: tailwindLogo },
    { name: "React Native", category: "Mobile", logo: reactNativeLogo },

    // Backend
    { name: "Python", category: "Backend", logo: pythonLogo },
    { name: "FastAPI", category: "Backend", logo: fastApiLogo },

    // Tools
    { name: "Git", category: "Tools", logo: gitLogo },
    { name: "GitHub", category: "Tools", logo: githubLogo },
    { name: "VS Code", category: "Tools", logo: vsCodeLogo },
    { name: "Terminal", category: "Tools", logo: terminalLogo },

    // Others
    { name: "English C1", category: "Others", logo: englishLogo },
    { name: "Spanish Native", category: "Others", logo: spanishLogo },
    { name: "Microsoft Office", category: "Others", logo: officeLogo },
    { name: "Interpretation Skills", category: "Others", logo: interpretationLogo },
    { name: "IA Skills", category: "Others", logo: iaLogo },
    { name: "Help Desk Tier 1", category: "Others", logo: helpDeskLogo },
];