import React from 'react'

const services = [
    {
        icon: "🏠", title: "Residential Pest Control",
        desc: "Complete home protection from all common pests. Family-safe and pet-friendly treatments tailored to your living space.",
        highlight: "Most Popular",
    },
    {
        icon: "🏢", title: "Commercial Pest Control",
        desc: "Discreet, scheduled pest management for offices, restaurants, warehouses, and retail spaces. AMC contracts available.",
        highlight: "AMC Available",
    },
    {
        icon: "🌿", title: "Eco / Herbal Treatment",
        desc: "100% herbal and CIB-approved chemical solutions. Ideal for homes with infants, elderly, or allergy sufferers.",
        highlight: "Eco-Friendly",
    },
    {
        icon: "🧪", title: "Sanitization & Disinfection",
        desc: "Deep sanitization using hospital-grade disinfectants. Effective against bacteria, fungi, and viruses.",
        highlight: "Post-COVID",
    },
    {
        icon: "🌱", title: "Pre-Construction Anti-Termite",
        desc: "Soil treatment before flooring and plastering to create a lasting chemical barrier against subterranean termites.",
        highlight: "New Builds",
    },
    {
        icon: "🌾", title: "Herbicide Management",
        desc: "Targeted weed control for gardens, farms, and vacant plots. Prevents regrowth without damaging desired plants.",
        highlight: "Garden Care",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 lg:py-28 relative"
            style={{ background: "linear-gradient(180deg, #19331d 0%, #0d1f10 100%)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <p className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-3">What We Do</p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
                        Our Services
                    </h2>
                    <p className="mt-4 text-emerald-300 max-w-xl mx-auto">
                        Comprehensive pest management using CIB-approved and herbal solutions. Licensed, insured, and trusted across Hooghly.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <div key={i}
                            className="service-card bg-emerald-900/50 border border-emerald-700/30 rounded-2xl p-6 group relative overflow-hidden">
                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,149,42,0.06), transparent 70%)" }} />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">{s.icon}</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono">
                                        {s.highlight}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg font-bold text-cream mb-2 group-hover:text-amber-300 transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-emerald-300 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center bg-emerald-900/60 border border-amber-500/20 rounded-3xl p-8 sm:p-10">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h3 className="font-display text-2xl font-bold text-cream mb-2">Annual Maintenance Contracts</h3>
                    <p className="text-emerald-300 max-w-lg mx-auto mb-6 text-sm">
                        Get year-round protection with our AMC plans. Scheduled visits, priority response, and significant savings on individual service costs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:9745039313" className="btn-primary px-8 py-3 rounded-full font-bold">
                            📞 Get AMC Quote
                        </a>
                        <a href="mailto:atanuadhikary118@gmail.com" className="btn-outline px-8 py-3 rounded-full font-semibold">
                            ✉️ Email Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection