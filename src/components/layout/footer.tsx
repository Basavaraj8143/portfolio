export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Portfolio</h3>
                <p className="text-gray-500 mb-6">Aspiring Software Engineer</p>

                <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700">
                        Open to Internships
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700">
                        Available Now
                    </span>
                </div>

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
