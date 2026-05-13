const testimonials = [
  {
    name: "Ana Rodrigues",
    role: "Head of Product, Nexora",
    initials: "AR",
    color: "bg-blue-500",
    quote:
      "Flowly cut our planning meetings in half. Everything is just… there. No more 'where did you put that doc?' moments.",
  },
  {
    name: "James O'Brien",
    role: "CTO, Stackr",
    initials: "JO",
    color: "bg-violet-500",
    quote:
      "We tried six tools before Flowly. Nothing came close. The automations alone saved us 5+ hours a week.",
  },
  {
    name: "Lena Müller",
    role: "Engineering Manager, Brixo",
    initials: "LM",
    color: "bg-emerald-500",
    quote:
      "Onboarding new engineers used to take days. Now they're productive on day one. Flowly is a game-changer.",
  },
  {
    name: "Carlos Mendes",
    role: "Founder, Launchpad",
    initials: "CM",
    color: "bg-orange-500",
    quote:
      "As a solo founder scaling to a team, Flowly gave me the structure I needed without the overhead.",
  },
  {
    name: "Priya Shah",
    role: "Design Lead, Orbit Studio",
    initials: "PS",
    color: "bg-pink-500",
    quote:
      "The design team lives in Flowly. Feedback cycles, handoffs, revisions — all tracked, all visible.",
  },
  {
    name: "Tom Eriksson",
    role: "VP Engineering, Pulsar",
    initials: "TE",
    color: "bg-cyan-500",
    quote:
      "Enterprise-grade security without the enterprise complexity. Finally, a tool that respects our time.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-900 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Loved by teams worldwide
          </h2>
          <p className="text-slate-400 mt-4 text-lg">2,000+ teams ship faster with Flowly.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-800 rounded-2xl p-7 border border-slate-700 hover:border-slate-500 hover:shadow-xl transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
