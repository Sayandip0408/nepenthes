import React from 'react'

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

const Footer = () => {
    return (
        <footer className="bg-emerald-950 border-t border-emerald-800/60 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <PitcherPlantIcon size={36} />
                            <div>
                                <div className="font-display font-bold text-lg text-gradient">NEPENTHES</div>
                                <div className="text-xs text-emerald-500 tracking-widest font-mono">PEST CONTROL</div>
                            </div>
                        </div>
                        <p className="text-emerald-400 text-sm leading-relaxed mb-4">
                            Eco-friendly pest solutions for homes and businesses in Hooghly. Licensed, insured, and nature-conscious.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://wa.me/919745039313" target="_blank" rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-green-900/40 border border-green-700/40 flex items-center justify-center text-lg hover:scale-110 transition-transform">💬</a>
                            <a href="tel:9745039313"
                                className="w-9 h-9 rounded-full bg-emerald-800/40 border border-emerald-700/40 flex items-center justify-center text-lg hover:scale-110 transition-transform">📞</a>
                            <a href="mailto:atanuadhikary118@gmail.com"
                                className="w-9 h-9 rounded-full bg-emerald-800/40 border border-emerald-700/40 flex items-center justify-center text-lg hover:scale-110 transition-transform">✉️</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-cream text-sm mb-4 tracking-wide">Services</h4>
                        <ul className="space-y-2 text-emerald-400 text-sm">
                            {["Cockroach Control", "Termite Treatment", "Mosquito Control", "Rodent Control", "Bedbug Treatment", "Sanitization"].map((s) => (
                                <li key={s}><a href="#services" className="hover:text-amber-400 transition-colors">{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-bold text-cream text-sm mb-4 tracking-wide">Quick Links</h4>
                        <ul className="space-y-2 text-emerald-400 text-sm">
                            {["Home", "Our Services", "Identify Your Pest", "Location", "Contact Us"].map((l, i) => (
                                <li key={l}>
                                    <a href={["#home", "#services", "#problem", "#location", "#contact"][i]}
                                        className="hover:text-amber-400 transition-colors">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-cream text-sm mb-4 tracking-wide">Contact</h4>
                        <ul className="space-y-3 text-emerald-400 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">📍</span>
                                <span>Haridradanga Main Rd, Chandannagar, Hooghly, West Bengal</span>
                            </li>
                            <li>
                                <a href="tel:9745039313" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <span>📞</span> 9745039313
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">🕐</span>
                                <span>Mon–Sun: 8 AM – 8 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-emerald-800/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-emerald-600">
                    <p>© {new Date().getFullYear()} Nepenthes Pest Control. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        <span className="text-amber-600">🌿</span> Licensed · Insured · Eco-Conscious
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer