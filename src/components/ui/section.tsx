import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)}>
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
