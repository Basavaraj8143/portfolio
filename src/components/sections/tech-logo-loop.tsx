"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiMysql,
    SiDocker, SiGit, SiFirebase, SiDjango, SiRedis,
    SiJavascript, SiHtml5, SiCss3, SiLinux, SiAmazonwebservices,
    SiFigma
} from "react-icons/si";

const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
    { node: <SiNextdotjs className="text-black" />, title: "Next.js" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS" },
    { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js" },
    { node: <SiPython className="text-[#3776AB]" />, title: "Python" },
    { node: <SiDjango className="text-[#092E20]" />, title: "Django" },
    { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB" },
    { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL" },
    { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL" },
    { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase" },
    { node: <SiRedis className="text-[#DC382D]" />, title: "Redis" },
    { node: <SiDocker className="text-[#2496ED]" />, title: "Docker" },
    { node: <SiGit className="text-[#F05032]" />, title: "Git" },
    { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
    { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5" },
    { node: <SiCss3 className="text-[#1572B6]" />, title: "CSS3" },
    { node: <SiLinux className="text-black" />, title: "Linux" },
    { node: <SiAmazonwebservices className="text-[#232F3E]" />, title: "AWS" },
    { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma" },
];

export function TechLogoLoop() {
    return (
        <section className="py-8 bg-white border-y border-gray-100 overflow-hidden">
            <div style={{ height: 52 }}>
                <LogoLoop
                    logos={techLogos}
                    speed={30}
                    direction="left"
                    logoHeight={32}
                    gap={52}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Tech stack logos"
                />
            </div>
        </section>
    );
}
