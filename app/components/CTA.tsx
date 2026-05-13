export default function CTA() {
  return (
    <section className="bg-blue-600 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Ready to move faster?
        </h2>
        <p className="text-blue-200 text-lg mb-10">
          Join 2,000+ teams already using Flowly. Free forever for small teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all text-base"
          >
            Start for free
          </a>
          <a
            href="#"
            className="border border-blue-400 text-white hover:bg-blue-500 font-bold px-8 py-4 rounded-xl transition-all text-base"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
