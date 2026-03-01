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
    { node: <SiReact className="text-green-500" />, title: "React" },
    { node: <SiNextdotjs className="text-green-700" />, title: "Next.js" },
    { node: <SiTypescript className="text-teal-600" />, title: "TypeScript" },
    { node: <SiTailwindcss className="text-teal-500" />, title: "Tailwind CSS" },
    { node: <SiNodedotjs className="text-green-600" />, title: "Node.js" },
    { node: <SiPython className="text-green-500" />, title: "Python" },
    { node: <SiDjango className="text-green-800" />, title: "Django" },
    { node: <SiMongodb className="text-green-600" />, title: "MongoDB" },
    { node: <SiPostgresql className="text-teal-600" />, title: "PostgreSQL" },
    { node: <SiMysql className="text-teal-700" />, title: "MySQL" },
    { node: <SiFirebase className="text-green-500" />, title: "Firebase" },
    { node: <SiRedis className="text-green-700" />, title: "Redis" },
    { node: <SiDocker className="text-teal-500" />, title: "Docker" },
    { node: <SiGit className="text-green-600" />, title: "Git" },
    { node: <SiJavascript className="text-green-500" />, title: "JavaScript" },
    { node: <SiHtml5 className="text-teal-600" />, title: "HTML5" },
    { node: <SiCss3 className="text-green-600" />, title: "CSS3" },
    { node: <SiLinux className="text-green-700" />, title: "Linux" },
    { node: <SiAmazonwebservices className="text-teal-600" />, title: "AWS" },
    { node: <SiFigma className="text-green-500" />, title: "Figma" },
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
