import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden leaf-pattern">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, #c8952a, transparent)" }} />
                <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-8"
                    style={{ background: "radial-gradient(circle, #2d6030, transparent)" }} />
                {[...Array(12)].map((_, i) => (
                    <div key={i}
                        className="absolute w-1 h-1 rounded-full bg-amber-500 opacity-30"
                        style={{
                            left: `${10 + i * 8}%`,
                            top: `${20 + (i % 4) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animation: `float ${4 + i % 3}s ease-in-out infinite`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-300/10 text-amber-400 text-xs font-mono tracking-widest animate-fadeUp">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        LICENSED · INSURED · ECO-CONSCIOUS
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight animate-fadeUp delay-100">
                        <span className="text-cream">Nature's Way</span>
                        <br />
                        <span className="text-gradient">to Protect</span>
                        <br />
                        <span className="text-cream">Your Space</span>
                    </h1>

                    <p className="text-emerald-200 text-base md:text-lg leading-relaxed max-w-lg animate-fadeUp delay-200">
                        Eco-friendly pest solutions for homes and businesses across Hooghly.
                        CIB-approved treatments. Certified technician. Safe for your family.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp delay-300">
                        <a href="tel:9745039313"
                            className="btn-primary px-8 py-4 rounded-full text-base font-bold text-center animate-pulse-ring">
                            📞 Get Free Quote
                        </a>
                        <a href="#services"
                            className="btn-outline px-8 py-4 rounded-full text-base font-semibold text-center">
                            Our Services →
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-4 animate-fadeUp delay-400 pt-2">
                        {["✅ CIB Approved", "🌿 Herbal Solutions", "⭐ Certified Tech", "🔒 Insured"].map((b) => (
                            <span key={b} className="text-sm text-emerald-300 flex items-center gap-1">{b}</span>
                        ))}
                    </div>
                </div>

                {/* Right – animated pitcher plant illustration */}
                <div className="flex justify-center items-center animate-fadeUp delay-300">
                    <div className="relative">
                        {/* Glow blob */}
                        <div className="absolute inset-0 blob-shape w-72 h-72 sm:w-96 sm:h-96 opacity-20"
                            style={{ background: "radial-gradient(circle, #c8952a, #2d6030)" }} />
                        <div className="animate-float relative z-10">
                            <svg viewBox="0 0 260 340" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="w-56 sm:w-72 lg:w-80 drop-shadow-2xl">
                                {/* Stem */}
                                <path d="M130 30 C125 60 120 100 118 130" stroke="#3d7d3d" strokeWidth="4" strokeLinecap="round" />
                                {/* Leaf left */}
                                <path d="M118 80 C90 70 60 90 55 110 C50 130 70 145 95 135 C115 125 120 100 118 80Z"
                                    fill="#2d6030" opacity="0.8" />
                                {/* Leaf right */}
                                <path d="M120 95 C145 78 175 88 182 108 C189 128 172 148 148 140 C128 133 118 112 120 95Z"
                                    fill="#3d7d3d" opacity="0.7" />
                                {/* Pitcher body */}
                                <path d="M118 130 C100 135 86 148 82 168 C76 198 80 230 90 255 C100 278 115 295 130 298 C145 295 160 278 170 255 C180 230 184 198 178 168 C174 148 160 135 142 130 Z"
                                    fill="#c8952a" />
                                <path d="M118 130 C100 135 86 148 82 168 C76 198 80 230 90 255 C100 278 115 295 130 298 C145 295 160 278 170 255 C180 230 184 198 178 168 C174 148 160 135 142 130 Z"
                                    fill="url(#pitcherGrad)" />
                                {/* Pitcher highlight */}
                                <path d="M115 145 C108 155 104 170 106 190 C108 210 115 228 124 240"
                                    stroke="#e8c060" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                                {/* Pitcher rim */}
                                <ellipse cx="130" cy="133" rx="22" ry="7" fill="#1e3d22" />
                                <ellipse cx="130" cy="130" rx="22" ry="6" fill="#2d6030" />
                                {/* Lid */}
                                <path d="M108 125 C115 100 145 100 152 125 C145 118 115 118 108 125Z"
                                    fill="#3d7d3d" />
                                {/* Tendril */}
                                <path d="M152 125 C165 115 170 95 158 85 C148 77 138 82 142 92"
                                    stroke="#c8952a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                {/* Water drops inside */}
                                <ellipse cx="118" cy="260" rx="18" ry="6" fill="#1e3d22" opacity="0.4" />
                                <defs>
                                    <linearGradient id="pitcherGrad" x1="82" y1="130" x2="184" y2="298" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#e8c060" stopOpacity="0.4" />
                                        <stop offset="50%" stopColor="#c8952a" stopOpacity="0" />
                                        <stop offset="100%" stopColor="#8b5e1a" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        {/* Info bubble */}
                        <div className="absolute -bottom-4 -right-4 sm:right-0 bg-emerald-800/90 border border-amber-300 rounded-2xl px-4 py-3 text-xs backdrop-blur-sm">
                            <div className="text-amber-400 font-bold text-sm">Nepenthes</div>
                            <div className="text-emerald-300">Nature's pest trap 🪴</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-xs text-emerald-400 tracking-widest font-mono">SCROLL</span>
                <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent animate-pulse" />
            </div> */}
        </section>
    )
}

export default Hero