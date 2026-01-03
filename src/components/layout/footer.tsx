export function Footer() {
    return (
        <footer className="bg-muted/30 border-t py-12 mt-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                <p className="text-muted-foreground mb-6">Aspiring Software Engineer</p>

                <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="px-4 py-1.5 rounded-full border bg-background text-sm font-medium">
                        Open to Internships
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="px-4 py-1.5 rounded-full border bg-background text-sm font-medium">
                        Available Now
                    </span>
                </div>

                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
