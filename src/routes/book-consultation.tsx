import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, Check, Send, Video } from "lucide-react";
import { Section, FadeIn, GlowBackground } from "@/components/Section";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Rynolve" },
      { name: "description", content: "Book a free 30-minute strategy call with the Rynolve team." },
      { property: "og:title", content: "Book a Consultation — Rynolve" },
      { property: "og:description", content: "Free 30-minute call. Real recommendations. No obligation." },
    ],
  }),
  component: Booking,
});

const benefits = [
  "30-minute strategy call with a senior engineer",
  "Tailored recommendations for your project",
  "Roadmap, timeline & ballpark estimate",
  "Zero obligation — no sales pressure",
];

const slots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [slot, setSlot] = useState<string | null>(null);

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-16 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Book a call</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-balance">Free <span className="gradient-text">30-min strategy call</span></h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Talk to a senior engineer. Get real recommendations.</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn>
            <div className="glass rounded-2xl p-8 h-full">
              <Video className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-2xl font-bold">What you get</h2>
              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 30 minutes</p>
                <p className="flex items-center gap-2"><Video className="h-4 w-4 text-primary" /> Google Meet / Zoom</p>
                <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Within 48 hours</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass glow-border rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">You're booked!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll send a calendar invite shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <h2 className="text-2xl font-bold">Pick a time</h2>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Available slots (tomorrow)</label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {slots.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setSlot(s)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${slot === s ? "bg-primary text-primary-foreground" : "glass hover:bg-white/5"}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input required type="text" placeholder="Full name" className="w-full glass rounded-lg px-4 py-3 text-sm bg-transparent outline-none focus:shadow-glow-sm" />
                  <input required type="email" placeholder="Work email" className="w-full glass rounded-lg px-4 py-3 text-sm bg-transparent outline-none focus:shadow-glow-sm" />
                  <input type="text" placeholder="Company" className="w-full glass rounded-lg px-4 py-3 text-sm bg-transparent outline-none focus:shadow-glow-sm" />
                  <textarea placeholder="What would you like to discuss?" rows={3} className="w-full glass rounded-lg px-4 py-3 text-sm bg-transparent outline-none focus:shadow-glow-sm resize-none" />
                  <button type="submit" disabled={!slot} className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-violet via-primary to-accent hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed">
                    Confirm booking <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
