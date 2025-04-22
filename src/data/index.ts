import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaGithub
} from 'react-icons/fa'
import { SiJavascript ,SiTypescript, SiTailwindcss, SiGit, SiVercel, SiMongodb, SiPostgresql, SiDocker, SiNetlify } from 'react-icons/si'
import { IconType } from 'react-icons'

interface Skill {
    name: string
    icon: IconType
    color: string
}

export const skills: Skill[] = [
    { name: 'HTML', icon: FaHtml5, color: '#74C0FC' },
    { name: 'CSS', icon: FaCss3, color: '#B197FC' },
    { name: 'CSS Module', icon: FaCss3, color: '#B197FC' },
    { name: 'JavaScript', icon: SiJavascript, color: '#FFD43B' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    { name: 'React', icon: FaReact, color: '#61DBFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
    { name: 'MongoDB', icon: SiMongodb, color: '#63E6BE' },
    { name: 'Postgresql', icon: SiPostgresql, color: '#3178c6' },
    { name: 'Docker', icon: SiDocker, color: '#3178c6' },    
    { name: 'Github', icon: FaGithub, color: '#FAFAFA' },
    { name: 'Git', icon: SiGit, color: '#e5740b' },
    { name: 'Vercel', icon: SiVercel, color: '#FAFAFA' },
    { name: 'Netlify', icon: SiNetlify, color: '#63E6BE' },
];

export const sections: string[] = ['Home', 'About Me', 'Projects', 'Skills', 'Contact'];

