"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "Perfect for small teams getting started.",
    cta: "Get started free",
    ctaStyle: "border border-gray-200 text-gray-800 hover:bg-gray-50",
    features: ["Up to 5 members", "3 projects", "Basic automations", "7-day history"],
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 18,
    yearly: 14,
    description: "For growing teams that need more power.",
    cta: "Start free trial",
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
    features: ["Unlimited members", "Unlimited projects", "Advanced automations", "90-day history", "Priority support", "Custom integrations"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "Custom plans for large organisations.",
    cta: "Contact sales",
    ctaStyle: "border border-gray-200 text-gray-800 hover:bg-gray-50",
    features: ["Everything in Pro", "Dedicated account manager", "SSO & SAML", "SLA guarantee", "Custom contracts", "On-premise option"],
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 mt-4 text-lg">No hidden fees. Cancel anytime.</p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? "bg-white shadow text-gray-900" : "text-gray-400"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${yearly ? "bg-white shadow text-gray-900" : "text-gray-400"}`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-green-600 font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all ${
                plan.highlighted
                  ? "border-blue-600 shadow-xl shadow-blue-100 relative"
                  : "border-gray-100"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-gray-900 font-black text-xl mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                {plan.monthly === null ? (
                  <p className="text-4xl font-black text-gray-900">Custom</p>
                ) : (
                  <p className="text-4xl font-black text-gray-900">
                    ${yearly ? plan.yearly : plan.monthly}
                    <span className="text-base font-medium text-gray-400">/mo</span>
                  </p>
                )}
              </div>

              <a
                href="#"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
