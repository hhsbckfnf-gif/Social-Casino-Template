import { useState } from "react";
import { toast } from "sonner";
import dragonWinking from "@/assets/dragon-winking.png";

const About = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative section-glow py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground lg:text-5xl">
            About <span className="text-gradient">Vault Nexora</span>
          </h1>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] scale-90" />
              <img src={dragonWinking} alt="Vault Nexora Mascot" className="relative z-10 w-48 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Our Story</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Vault Nexora was built on a single belief: great entertainment should be free and accessible to everyone. We set out to create a premium social casino experience that captures the thrill of the casino floor — without any financial stakes. Every game, every feature, every detail reflects our passion for delivering world-class fun.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 gradient-card p-6">
            <h2 className="text-xl font-display font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our mission at Vault Nexora is simple: deliver high-quality, free social casino entertainment that players can enjoy without risk. All in-game currencies are virtual and hold no real-world monetary value. We champion responsible gaming and welcome only users aged 18 and above.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 gradient-card p-6">
            <h2 className="text-xl font-display font-bold text-foreground">Responsible Gaming Commitment</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Vault Nexora is strictly a social casino entertainment platform. There is no real money gambling, no prizes of real-world value, and no opportunity to win or lose money. We are dedicated to maintaining a safe, transparent, and enjoyable environment for every player who walks through our virtual doors.
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border/50 gradient-card p-6">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="rounded-lg gradient-cta px-8 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(275_80%_60%/0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;