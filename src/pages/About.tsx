import { useState } from "react";
import { toast } from "sonner";
import foxSlots from "@/assets/fox-slots.png";

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
            About <span className="text-gradient">FoxPlay</span>
          </h1>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] scale-90" />
              <img src={foxSlots} alt="FoxPlay" className="relative z-10 w-48 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Our Story</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                FoxPlay was created with one mission: to bring the excitement of casino-style games to everyone — completely free. We believe entertainment should be accessible, safe, and fun. Our platform offers a premium gaming experience without any financial risk.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 gradient-card p-6">
            <h2 className="text-xl font-display font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We are committed to providing high-quality, free social casino entertainment. Our games use virtual coins and credits that have no real-world monetary value. We promote responsible gaming and ensure all users are 18 or older.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 gradient-card p-6">
            <h2 className="text-xl font-display font-bold text-foreground">Responsible Gaming Commitment</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              FoxPlay is strictly a social casino. There is no real money gambling, no prizes of real-world value, and no opportunity to win or lose money. We are dedicated to providing a safe, enjoyable entertainment environment for all our users.
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
                className="rounded-lg gradient-cta px-8 py-3 font-semibold text-secondary-foreground transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(28_100%_55%/0.4)]"
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
