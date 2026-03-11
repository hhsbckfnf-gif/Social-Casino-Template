import { Link } from "react-router-dom";
import { Shield, Smartphone, Gamepad2, Zap, CreditCard, Star, AlertTriangle } from "lucide-react";
import foxMascot from "@/assets/fox-mascot.png";
import foxJackpot from "@/assets/fox-jackpot.png";
import gamcareImg from "@/assets/gamcare.png";
import gambleawareImg from "@/assets/gambleaware.png";
import GameCard from "@/components/GameCard";
import { getFeaturedGames } from "@/data/games";

const trustBadges = [
  { icon: Shield, label: "18+" },
  { icon: Gamepad2, label: "Free Play" },
  { icon: CreditCard, label: "No Real Money" },
  { icon: AlertTriangle, label: "Play Responsibly" },
];

const whyPlay = [
  { icon: Star, title: "Free Entertainment", desc: "Enjoy premium casino games with zero cost. Pure fun, no strings attached." },
  { icon: Zap, title: "Instant Browser Play", desc: "No downloads needed. Play directly in your browser instantly." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Optimized for all devices. Play anywhere, anytime." },
  { icon: Gamepad2, title: "Huge Game Variety", desc: "Slots, blackjack, roulette, and more exciting games." },
  { icon: CreditCard, title: "No Deposits Required", desc: "No credit card or payment information needed ever." },
  { icon: Shield, title: "Smooth Experience", desc: "High-quality graphics and seamless gameplay." },
];

const Index = () => {
  const featured = getFeaturedGames();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="hero-glow absolute inset-0" />
        {/* Decorative glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-[100px]" />

        <div className="container relative mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-display font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Play Free{" "}
                <span className="text-gradient">Social Casino</span>{" "}
                Games
              </h1>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0">
                Enjoy premium casino-style games for entertainment only. No real money gambling. 100% free to play.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/games"
                  className="rounded-xl gradient-cta px-8 py-3.5 text-center font-bold text-secondary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(28_100%_55%/0.5)] animate-glow-pulse"
                >
                  Play Free Now
                </Link>
                <Link
                  to="/games"
                  className="rounded-xl border border-primary/30 bg-primary/5 px-8 py-3.5 text-center font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/50"
                >
                  Browse Games
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary"
                  >
                    <badge.icon className="h-3.5 w-3.5" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Fox */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] scale-75" />
              <img
                src={foxMascot}
                alt="FoxPlay Mascot"
                className="relative z-10 w-64 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:w-72 lg:w-80 animate-float"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full bg-black/30 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED GAMES */}
      <section className="relative section-glow py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground lg:text-4xl">
              Featured <span className="text-gradient">Games</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Our most popular free-to-play casino games</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/games"
              className="inline-flex rounded-xl gradient-cta px-8 py-3.5 font-bold text-secondary-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(28_100%_55%/0.5)]"
            >
              View All Games
            </Link>
          </div>
        </div>
      </section>

      {/* WHY PLAY HERE */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground lg:text-4xl">
              Why Play <span className="text-gradient">Here</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPlay.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/50 gradient-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_hsl(28_100%_55%/0.1)]"
              >
                <div className="inline-flex rounded-lg bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID PAGE FEATURE */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-secondary/10 blur-[80px] scale-90" />
              <img
                src={foxJackpot}
                alt="Jackpot Fox"
                className="relative z-10 w-64 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:w-72 lg:w-80"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-display font-bold text-foreground lg:text-4xl">
                Free Entertainment,{" "}
                <span className="text-gradient">Endless Fun</span>
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0">
                Experience the thrill of casino-style games without spending a penny. Our social casino platform offers premium entertainment with stunning graphics, exciting gameplay, and a huge variety of games — all completely free. No deposits, no purchases, just pure fun.
              </p>
              <Link
                to="/games"
                className="mt-6 inline-flex rounded-xl gradient-cta px-8 py-3.5 font-bold text-secondary-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(28_100%_55%/0.5)]"
              >
                Start Playing Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMING */}
      <section className="border-t border-border/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground lg:text-4xl">
            Responsible <span className="text-gradient">Gaming</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            FoxPlay is a social casino entertainment platform for users aged 18 and over. This is not real money gambling. There are no prizes or items of real-world value. Virtual coins and credits are for entertainment purposes only and cannot be exchanged for real money.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {["18+ Only", "No Real Money", "Entertainment Only", "No Prizes"].map((text) => (
              <span key={text} className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
                {text}
              </span>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-8">
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <img src={gamcareImg} alt="GamCare" className="h-10 w-28 object-contain" />
            </a>
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <img src={gambleawareImg} alt="GambleAware" className="h-10 w-28 object-contain" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
