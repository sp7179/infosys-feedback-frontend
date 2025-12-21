"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessNotify({ message }) {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 
                               px-6 py-4 bg-emerald-600/90 text-white 
                               rounded-2xl shadow-2xl 
                               border border-emerald-400/40 
                               backdrop-blur-md z-50"
                >
                    <div className="flex items-center gap-3">
                        {/* Check Icon */}
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
                                d="M5 13l4 4L19 7"
                            />
                        </svg>

                        <div>
                            <div className="font-semibold leading-tight">Success</div>
                            <div className="text-sm opacity-90">{message}</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
