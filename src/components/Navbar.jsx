import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PitcherPlantIcon = ({ size = 40, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M40 8 C35 8 28 12 26 20 L24 35 C22 42 20 50 22 58 C24 70 32 82 40 85 C48 82 56 70 58 58 C60 50 58 42 56 35 L54 20 C52 12 45 8 40 8Z" fill="#c8952a" opacity="0.9" />
        <path d="M40 8 C35 8 30 14 30 20 L30 35 C30 42 32 50 34 58 C36 70 38 80 40 85 C42 80 44 70 46 58 C48 50 50 42 50 35 L50 20 C50 14 45 8 40 8Z" fill="#e8c060" opacity="0.6" />
        <ellipse cx="40" cy="35" rx="14" ry="5" fill="#1e3d22" />
        <path d="M26 35 C26 35 20 33 18 28 C16 23 20 16 26 18" stroke="#3d7d3d" strokeWidth="2" fill="none" />
        <path d="M54 35 C54 35 60 33 62 28 C64 23 60 16 54 18" stroke="#3d7d3d" strokeWidth="2" fill="none" />
        <path d="M40 5 C40 5 38 1 34 2 C30 3 30 7 33 8" stroke="#c8952a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="6" r="2" fill="#c8952a" />
    </svg>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Home", "Services", "Problem", "Location", "Contact"];
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "navbar-glass py-2" : "py-4"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-3 group">
                    <PitcherPlantIcon size={42} className="transition-transform duration-300 group-hover:rotate-12" />
                    <div>
                        <div className="font-display font-bold text-lg sm:text-xl leading-tight text-gradient">NEPENTHES</div>
                        <div className="text-xs text-emerald-400 tracking-widest uppercase font-mono">Pest Control</div>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <a key={l} href={`#${l.toLowerCase()}`}
                            className="text-sm font-body text-emerald-200 hover:text-amber-400 transition-colors duration-200 tracking-wide">
                            {l}
                        </a>
                    ))}
                    <a href="tel:9745039313"
                        className="btn-primary px-5 py-2 rounded-full text-sm font-bold">
                        📞 Call Now
                    </a>
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 group" aria-label="Toggle menu">
                    <span className={`block h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                    <span className={`block h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
                    <span className={`block h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mobile-menu-enter navbar-glass border-t border-emerald-700/40">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {links.map((l) => (
                            <a key={l} href={`#${l.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-base text-cream/80 hover:text-amber-400 transition-colors font-body py-1 border-b border-emerald-800/40">
                                {l}
                            </a>
                        ))}
                        <a href="tel:9745039313" className="btn-primary text-center px-5 py-3 rounded-full text-sm font-bold mt-2">
                            📞 Call: 9745039313
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar