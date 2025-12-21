import React from "react";

export default function Footer() {
    return (
        <footer className="w-full mt-auto bg-gray-900/90 backdrop-blur border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-400 text-sm">

                {/* Left */}
                <p className="text-center sm:text-left">
                    © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Infosys Project</span>
                </p>

                {/* Right */}
                <p className="text-center sm:text-right text-xs sm:text-sm">
                    All Rights Reserved
                </p>

            </div>
        </footer>
    );
}
