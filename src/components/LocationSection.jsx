import React from 'react'

const LocationSection = () => {
    const areas = ["Hooghly", "Chinsurah", "Chandannagar", "Serampore", "Arambagh",
        "Tarakeswar", "Balagarh", "Dhaniakhali", "Goghat", "Pursurah"];

    return (
        <section id="location" className="py-20 lg:py-28"
            style={{ background: "linear-gradient(180deg, #0d1f10 0%, #19331d 100%)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-3">Service Area</p>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream">We Come to You</h2>
                    <p className="mt-4 text-emerald-300 max-w-lg mx-auto">
                        Based in Meria, Akna, Hooghly — we serve the entire Hooghly district and surrounding areas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Map embed */}
                    <div className="rounded-3xl overflow-hidden border border-emerald-700/40 shadow-2xl h-72 sm:h-96">
                        <iframe
                            title="Nepenthes Pest Control Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d505.53929208658917!2d88.37583354383217!3d22.8846141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89100196b6455%3A0xbf6921dae04ae1f7!2sChandannagar!5e1!3m2!1sen!2sin!4v1779021830120!5m2!1sen!2sin"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        <div className="bg-emerald-900/60 border border-emerald-700/30 rounded-2xl p-6 space-y-4">
                            <h3 className="font-display text-xl font-bold text-cream">Our Office</h3>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">📍</span>
                                <div>
                                    <p className="text-cream font-semibold">Haridradanga Main Rd, Chandannagar</p>
                                    <p className="text-emerald-300 text-sm">Hooghly, West Bengal, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <a href="tel:9745039313" className="text-amber-400 hover:text-amber-300 font-bold text-lg">9745039313</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">✉️</span>
                                <a href="mailto:atanuadhikary118@gmail.com"
                                    className="text-amber-400 hover:text-amber-300 text-sm break-all">atanuadhikary118@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">🕐</span>
                                <p className="text-emerald-200 text-sm">Mon–Sun: 8:00 AM – 8:00 PM</p>
                            </div>
                        </div>

                        {/* Service areas */}
                        <div>
                            <h4 className="text-sm font-bold text-amber-400 mb-3 font-mono tracking-wide uppercase">Areas We Cover</h4>
                            <div className="flex flex-wrap gap-2">
                                {areas.map((a) => (
                                    <span key={a}
                                        className="px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/40 text-emerald-200 text-xs hover:border-amber-500/40 hover:text-amber-300 transition-colors cursor-default">
                                        {a}
                                    </span>
                                ))}
                                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs">
                                    + more
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationSection