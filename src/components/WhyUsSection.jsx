import React from 'react'

const WhyUsSection = () => {
    const points = [
        { icon: "🌿", title: "Eco-Friendly First", desc: "We prioritize herbal and CIB-approved solutions to protect your family and the environment." },
        { icon: "📜", title: "Certified & Licensed", desc: "Atanu Adhikary is a certified pest control technician with hands-on field experience." },
        { icon: "🔒", title: "Fully Insured", desc: "Licensed and insured so you're covered if anything goes wrong during treatment." },
        { icon: "⚡", title: "Fast Response", desc: "Same-day or next-day service available. Call now to book your slot." },
        { icon: "💰", title: "Free Quote", desc: "No hidden charges. Get a transparent price before we begin any treatment." },
        { icon: "🔄", title: "Follow-Up Guarantee", desc: "We revisit until the problem is fully resolved — at no extra charge." },
    ];

    return (
        <section className="py-20 lg:py-24 bg-emerald-950/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-3">Why Choose Us</p>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
                            The Nepenthes Difference
                        </h2>
                        <p className="text-emerald-300 mb-8 leading-relaxed">
                            Just like the pitcher plant that naturally traps pests, we use nature-inspired, effective methods to rid your home of unwanted guests — without harming your loved ones.
                        </p>
                        <a href="tel:9745039313" className="btn-primary inline-block px-8 py-3 rounded-full font-bold">
                            Book a Service Today
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex gap-3 p-4 rounded-xl bg-emerald-900/40 border border-emerald-700/20 hover:border-amber-500/30 transition-colors">
                                <span className="text-2xl mt-0.5 flex-shrink-0">{p.icon}</span>
                                <div>
                                    <div className="font-bold text-cream text-sm mb-1">{p.title}</div>
                                    <div className="text-emerald-300 text-xs leading-relaxed">{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUsSection