"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ErrorNotify({ message, clearMessage, duration = 5000 }) {
    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            clearMessage("");
        }, duration);

        return () => clearTimeout(timer);
    }, [message, duration, clearMessage]);

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2
                               px-6 py-4 bg-rose-700/90 text-white
                               rounded-2xl shadow-2xl
                               border border-rose-400/40
                               backdrop-blur-md z-50"
                >
                    <div className="flex items-center gap-3">
                        {/* Error Icon */}
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
                            />
                        </svg>

                        <div>
                            <div className="font-semibold leading-tight">Error</div>
                            <div className="text-sm opacity-90">{message}</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
