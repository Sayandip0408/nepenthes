import React, { useState, useRef, useEffect } from 'react'

const pestData = [
    {
        id: "cockroach", name: "Cockroaches", emoji: "🪳",
        problem: "Found cockroaches in your kitchen or bathroom?",
        detail: "Cockroaches spread bacteria, contaminate food, and trigger allergies. They hide in cracks, under appliances, and inside drains.",
        treatment: "We use gel baiting + residual spray treatment targeting harborage zones. Safe for kitchen use. Results visible within 24–48 hours.",
        duration: "Service takes ~2 hrs. Avoid mopping for 48 hrs post-treatment.",
        severity: "High",
    },
    {
        id: "termite", name: "Termites", emoji: "🐛",
        problem: "Seeing mud tubes or hollow wood in your home?",
        detail: "Termites silently destroy wooden structures, furniture, and walls. Subterranean termites cause the most damage and are often undetected for years.",
        treatment: "Anti-termite soil treatment + wood treatment using CIB-approved chemicals. We drill, inject, and seal entry points for long-lasting protection.",
        duration: "Pre-construction or post-construction treatment available. 1–2 day process.",
        severity: "Critical",
    },
    {
        id: "mosquito", name: "Mosquitoes", emoji: "🦟",
        problem: "Mosquitoes ruining your sleep and outdoor time?",
        detail: "Mosquitoes carry dengue, malaria, and chikungunya. Breeding grounds include stagnant water in pots, drains, and AC trays.",
        treatment: "Fogging + larvicidal treatment. We target breeding zones and resting areas. Herbal solutions available for safe indoor use.",
        duration: "Service in 1–2 hrs. Vacate premises for 2–3 hrs post-fogging.",
        severity: "High",
    },
    {
        id: "rodent", name: "Rodents", emoji: "🐀",
        problem: "Hearing scratching at night or finding gnaw marks?",
        detail: "Rats and mice spread leptospirosis, damage wiring, contaminate food, and gnaw through walls and furniture.",
        treatment: "Bait stations + glue traps + exclusion treatment to seal entry points. Snap traps for severe infestations.",
        duration: "Weekly follow-up visits for 2–3 weeks to ensure full control.",
        severity: "High",
    },
    {
        id: "bedbug", name: "Bedbugs", emoji: "🛏️",
        problem: "Waking up with unexplained bite marks?",
        detail: "Bedbugs hide in mattress seams, headboards, and furniture. They feed at night and reproduce rapidly.",
        treatment: "Heat treatment + residual chemical spray covering all harborage areas. Mattress encasements recommended post-treatment.",
        duration: "2–4 hr service. Wash all linens in hot water before treatment.",
        severity: "Medium",
    },
    {
        id: "fly", name: "Flies", emoji: "🪰",
        problem: "Flies swarming your kitchen or garbage area?",
        detail: "Houseflies spread typhoid, cholera, and food-borne illnesses. Drain flies breed in pipes and wet organic matter.",
        treatment: "ULV misting + fly light traps + drain treatment. We identify and treat breeding sources.",
        duration: "Treatment in 1 hr. Results immediate.",
        severity: "Medium",
    },
    {
        id: "ant", name: "Ants", emoji: "🐜",
        problem: "Ant trails in your home or garden?",
        detail: "Carpenter ants damage wood structures. Fire ants sting painfully. Sugar ants contaminate food.",
        treatment: "Gel bait + residual spray along trails and entry points. Colony elimination with slow-acting baits.",
        duration: "1 hr service. Avoid wiping bait areas for 48 hrs.",
        severity: "Low",
    },
    {
        id: "silverfish", name: "Silverfish", emoji: "🐠",
        problem: "Finding damage to books, wallpaper, or fabric?",
        detail: "Silverfish feed on starch, paper, and fabrics. They thrive in humid areas like bathrooms and storage rooms.",
        treatment: "Residual spray + sticky traps in affected areas. Dehumidification advice provided.",
        duration: "1 hr service. Keep treated areas dry.",
        severity: "Low",
    },
];

// const severityColor = {
//     Critical: "bg-red-900/60 text-red-300 border-red-800",
//     High: "bg-amber-900/60 text-amber-300 border-amber-800",
//     Medium: "bg-yellow-900/60 text-yellow-300 border-yellow-800",
//     Low: "bg-green-900/60 text-green-300 border-green-800",
// };

const severityColor = {
    Low: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    Medium: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
    High: "bg-red-500/15 text-red-300 border border-red-500/30",
};

const ProblemSection = () => {
    const [active, setActive] = useState(null);
    const detailRef = useRef(null);
    const selected = pestData.find((p) => p.id === active);

    // Auto-scroll to detail panel whenever a pest is selected
    useEffect(() => {
        if (active && detailRef.current) {
            // Small delay lets the panel render before scrolling
            setTimeout(() => {
                detailRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }, 50);
        }
    }, [active]);

    const handlePestClick = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <section id="problem" className="py-20 lg:py-28 bg-green-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-3">Identify Your Issue</p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream amber-line inline-block">
                        What's Your Problem?
                    </h2>
                    <p className="mt-4 text-green-300 max-w-xl mx-auto">
                        Tap any pest below to learn about the threat and how we eliminate it.
                    </p>
                </div>

                {/* Pest grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {pestData.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => handlePestClick(p.id)}
                            className={`group flex flex-col items-center gap-2 py-4 px-3 rounded-2xl border transition-all duration-300 text-center backdrop-blur-sm
            ${active === p.id
                                    ? "bg-gradient-to-br from-lime-300 via-emerald-300 to-green-400 border-lime-200 text-green-950 shadow-lg shadow-green-900/20 scale-[1.02]"
                                    : "bg-gradient-to-br from-[#16351f]/90 to-[#214d2e]/90 border-emerald-700/40 text-emerald-50 hover:border-lime-400/50 hover:bg-[#285437]/90 hover:-translate-y-1"
                                }`}
                        >
                            <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                                {p.emoji}
                            </span>

                            <span className="text-sm font-bold font-body tracking-wide">
                                {p.name}
                            </span>

                            <span
                                className={`text-[11px] px-2.5 py-1 rounded-full border font-medium
                ${active === p.id
                                        ? "bg-green-950/15 text-green-950 border-green-900/10"
                                        : severityColor[p.severity]
                                    }`}
                            >
                                {p.severity}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Detail panel */}
                {selected && (
                    <div
                        ref={detailRef}
                        className="animate-fadeUp bg-gradient-to-br from-[#16351f]/95 via-[#1c4429]/95 to-[#214d2e]/95 border border-emerald-500/20 rounded-[2rem] p-6 sm:p-8 lg:p-10 grid md:grid-cols-2 gap-8 shadow-2xl shadow-black/20 backdrop-blur-md"
                    >
                        {/* Left */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-300/20 to-emerald-400/20 border border-lime-300/10 flex items-center justify-center">
                                    <span className="text-4xl">{selected.emoji}</span>
                                </div>

                                <div>
                                    <h3 className="font-display text-2xl font-bold text-emerald-50">
                                        {selected.name}
                                    </h3>

                                    <span
                                        className={`inline-flex mt-1 text-xs px-2.5 py-1 rounded-full border font-medium ${severityColor[selected.severity]}`}
                                    >
                                        {selected.severity} Risk
                                    </span>
                                </div>
                            </div>

                            <div className="bg-red-500/10 border border-red-400/15 rounded-2xl p-4 backdrop-blur-sm">
                                <p className="text-red-300 font-semibold text-sm mb-1">
                                    ⚠️ Are you facing this?
                                </p>

                                <p className="text-emerald-50/75 text-sm leading-relaxed">
                                    {selected.problem}
                                </p>
                            </div>

                            <p className="text-emerald-100/80 text-sm leading-7">
                                {selected.detail}
                            </p>
                        </div>

                        {/* Right */}
                        <div className="space-y-5">
                            <h4 className="font-display text-lg font-semibold text-lime-300 flex items-center gap-2">
                                💊 Our Treatment Approach
                            </h4>

                            <div className="bg-emerald-900/30 rounded-2xl p-5 border border-emerald-400/10">
                                <p className="text-emerald-50/80 text-sm leading-7">
                                    {selected.treatment}
                                </p>
                            </div>

                            <div className="flex items-start gap-3 bg-lime-400/5 border border-lime-300/10 rounded-2xl p-4">
                                <span className="text-lg">⏱️</span>

                                <p className="text-lime-200 text-sm leading-relaxed">
                                    {selected.duration}
                                </p>
                            </div>

                            <a
                                href="tel:9745039313"
                                className="group relative overflow-hidden block text-center px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-lime-300 to-emerald-400 text-green-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-lime-500/20"
                            >
                                <span className="relative z-10">
                                    📞 Book Treatment for {selected.name}
                                </span>
                            </a>
                        </div>
                    </div>
                )}

                {!selected && (
                    <div className="text-center py-8 text-green-500 text-sm font-mono animate-pulse">
                        ↑ Tap a pest to see treatment details
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProblemSection