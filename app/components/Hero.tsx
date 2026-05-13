export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden px-6 pb-32">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/30 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Now in public beta — free for teams up to 5
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Work smarter.
          <br />
          <span className="text-blue-400">Ship faster.</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Flowly brings your tasks, docs, and team together in one clean workspace —
          so you can focus on what matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 text-base"
          >
            Start for free
          </a>
          <a
            href="#features"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base"
          >
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Trusted by 2,000+ teams
          </span>
        </div>

        {/* App mockup */}
        <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="flex-1 bg-slate-700 rounded-md h-5 mx-4 text-xs text-slate-400 flex items-center px-3">
              app.flowly.io/dashboard
            </span>
          </div>
          <div className="bg-slate-800/80 h-64 md:h-96 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
              {[
                { label: "In Progress", accent: "border-l-blue-500", cards: ["Design system update", "Auth flow", "API docs"] },
                { label: "Review", accent: "border-l-yellow-500", cards: ["Mobile nav", "Dashboard v2"] },
                { label: "Done", accent: "border-l-green-500", cards: ["User onboarding", "Analytics", "Billing page", "SSO"] },
              ].map(({ label, accent, cards }) => (
                <div key={label} className="space-y-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{label}</p>
                  {cards.map((card, j) => (
                    <div
                      key={j}
                      className={`bg-slate-700 border-l-2 ${accent} rounded-lg p-3`}
                      style={{ opacity: 1 - j * 0.1 }}
                    >
                      <div className="h-2 bg-slate-500 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-slate-600 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
