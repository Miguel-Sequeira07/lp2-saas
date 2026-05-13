import { Zap, LayoutDashboard, Users, Bell, Lock, BarChart2 } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description: "Everything in one place. Tasks, docs, deadlines — one clean view for your whole team.",
  },
  {
    icon: Zap,
    title: "Instant Automations",
    description: "Automate repetitive work with simple rules. No code, no friction.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together live. See edits, comments, and updates as they happen.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Only get notified about what matters. Flowly learns your focus patterns.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant. SSO, 2FA, and role-based access out of the box.",
  },
  {
    icon: BarChart2,
    title: "Actionable Insights",
    description: "Track velocity, spot bottlenecks, and make data-driven decisions with ease.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Everything your team needs
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            Powerful tools, zero bloat. Built for teams that move fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-slate-800/60 rounded-2xl p-7 border border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
