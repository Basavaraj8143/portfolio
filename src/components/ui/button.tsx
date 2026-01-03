import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonOptions {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function buttonVariants({ variant = "primary", size = "md", className }: ButtonOptions = {}) {
    return cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
            "bg-foreground text-background hover:opacity-90 shadow-lg hover:-translate-y-1": variant === "primary",
            "border-2 border-input bg-foreground text-background hover:bg-background hover:text-foreground border-foreground hover:-translate-y-1": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
        },
        className
    );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonOptions {
    asChild?: boolean; // Kept for compatibility if needed, but ignored in implementation
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonVariants({ variant, size, className })}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
