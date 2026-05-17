import React, { useState } from 'react'

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

const ContactSection = () => {
    const [form, setForm] = useState({ name: "", phone: "", pest: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Hello Nepenthes Pest Control!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0APest Issue: ${form.pest}%0AMessage: ${form.message}`;
        window.open(`https://wa.me/919745039313?text=${msg}`, "_blank");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-emerald-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <p className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-3">Get In Touch</p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
                        Book a Free Inspection
                    </h2>
                    <p className="mt-4 text-emerald-300 max-w-lg mx-auto">
                        Describe your pest problem and we'll get back to you within the hour.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Contact form */}
                    <div className="bg-emerald-900/50 border border-emerald-700/30 rounded-3xl p-6 sm:p-8">
                        <h3 className="font-display text-xl font-bold text-cream mb-6">Send us a message</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-emerald-400 font-mono tracking-wide uppercase block mb-1.5">Your Name</label>
                                <input className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                    placeholder="Rahul Sharma"
                                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-xs text-emerald-400 font-mono tracking-wide uppercase block mb-1.5">Phone Number</label>
                                <input className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                    placeholder="98XXXXXXXX" type="tel"
                                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-xs text-emerald-400 font-mono tracking-wide uppercase block mb-1.5">Pest Problem</label>
                                <select className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                    value={form.pest} onChange={(e) => setForm({ ...form, pest: e.target.value })}>
                                    <option value="" className="bg-emerald-900">Select pest type...</option>
                                    {pestData.map((p) => (
                                        <option key={p.id} value={p.name} className="bg-emerald-900">{p.emoji} {p.name}</option>
                                    ))}
                                    <option value="Multiple" className="bg-emerald-900">Multiple / Not sure</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-emerald-400 font-mono tracking-wide uppercase block mb-1.5">Additional Details</label>
                                <textarea className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                                    rows={3} placeholder="Where in the house? How long? Any specific areas?"
                                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                            </div>
                            <button onClick={handleSubmit}
                                className={`btn-primary w-full py-3.5 rounded-xl font-bold transition-all ${submitted ? "bg-green-600 opacity-80" : ""}`}>
                                {submitted ? "✅ Opening WhatsApp..." : "💬 Send via WhatsApp"}
                            </button>
                            <p className="text-center text-emerald-500 text-xs">or call directly: <a href="tel:9745039313" className="text-amber-400 hover:underline">9745039313</a></p>
                        </div>
                    </div>

                    {/* Right side info */}
                    <div className="space-y-6">
                        {/* Call CTA */}
                        <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 border border-amber-500/20 rounded-3xl p-6 text-center">
                            <div className="text-5xl mb-3">📞</div>
                            <h3 className="font-display text-xl font-bold text-cream mb-1">Call for Instant Quote</h3>
                            <p className="text-emerald-300 text-sm mb-4">Talk directly with our certified technician</p>
                            <a href="tel:9745039313"
                                className="btn-primary inline-block px-8 py-3.5 rounded-full font-bold text-lg tracking-wide">
                                9745039313
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <a href="https://wa.me/919745039313" target="_blank" rel="noreferrer"
                            className="flex items-center gap-4 bg-green-900/30 border border-green-700/40 rounded-2xl p-5 hover:border-green-500/60 transition-all group">
                            <span className="text-4xl group-hover:scale-110 transition-transform">💬</span>
                            <div>
                                <div className="font-bold text-green-300">WhatsApp Us</div>
                                <div className="text-green-400/70 text-sm">Quick response guaranteed</div>
                            </div>
                            <span className="ml-auto text-green-400">→</span>
                        </a>

                        {/* Email */}
                        <a href="mailto:atanuadhikary118@gmail.com"
                            className="flex items-center gap-4 bg-emerald-900/40 border border-emerald-700/30 rounded-2xl p-5 hover:border-amber-500/40 transition-all group">
                            <span className="text-4xl group-hover:scale-110 transition-transform">✉️</span>
                            <div className="overflow-hidden">
                                <div className="font-bold text-cream">Email Us</div>
                                <div className="text-emerald-400 text-xs truncate">atanuadhikary118@gmail.com</div>
                            </div>
                            <span className="ml-auto text-amber-400">→</span>
                        </a>

                        {/* Atanu card */}
                        <div className="bg-emerald-900/40 border border-emerald-700/30 rounded-2xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-emerald-950 font-display font-black text-lg flex-shrink-0">
                                A
                            </div>
                            <div>
                                <div className="font-bold text-cream">Atanu Adhikary</div>
                                <div className="text-emerald-400 text-xs">Owner & Certified Technician</div>
                                <div className="text-amber-400 text-xs mt-0.5">📜 Licensed · 🌿 Eco-Trained</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection