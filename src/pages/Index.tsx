import { Link } from "react-router-dom";
import { Shield, Smartphone, Gamepad2, Zap, CreditCard, Star, AlertTriangle } from "lucide-react";
import dragonHero from "@/assets/dragon-hero.png";
import dragonSitting from "@/assets/dragon-sitting.png";
import dragonFlying from "@/assets/dragon-flying.png";
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
  { icon: Star, title: "Free Entertainment", desc: "Dive into premium casino games at zero cost. Pure excitement, no strings attached." },
  { icon: Zap, title: "Instant Browser Play", desc: "No downloads or installs. Jump straight into the action from any browser." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Perfectly optimized for every screen size. Play on the go, anytime." },
  { icon: Gamepad2, title: "Massive Game Library", desc: "Slots, blackjack, roulette, poker and many more thrilling titles." },
  { icon: CreditCard, title: "No Deposits Ever", desc: "No credit card, no payments, no hidden fees. Always 100% free." },
  { icon: Shield, title: "Stunning Visuals", desc: "High-quality graphics, smooth animations, and immersive gameplay." },
];

const Index = () => {
  const featured = getFeaturedGames();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero min-h-[85vh] flex items-center">
        <div className="hero-glow absolute inset-0" />

        {/* Animated particles */}
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="bg-primary/30"
              style={{
                left: `${8 + i * 8}%`,
                width: `${2 + (i % 3) * 2}px`,
                height: `${2 + (i % 3) * 2}px`,
                animationDuration: `${6 + (i % 5) * 2}s`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* Glow streaks */}
        <div className="hero-streak top-[20%] left-[10%]" style={{ animationDelay: '0s' }} />
        <div className="hero-streak top-[50%] left-[30%]" style={{ animationDelay: '3s', width: '300px' }} />
        <div className="hero-streak top-[70%] left-[60%]" style={{ animationDelay: '5s', width: '150px' }} />

        {/* Large glow orbs for depth */}
        <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[15%] w-[400px] h-[400px] rounded-full bg-secondary/6 blur-[130px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
          <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-8 lg:items-center">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="relative inline-block">
                <div className="absolute -inset-x-8 -inset-y-4 bg-primary/5 blur-[60px] rounded-full" />
                <h1 className="relative text-4xl font-display font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl glow-text">
                  Play Free{" "}
                  <span className="text-gradient">Social Casino</span>{" "}
                  Games
                </h1>
              </div>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0 sm:text-xl">
                Step into a world of premium casino-style entertainment. No real money, no risk — just pure fun and excitement. 100% free to play.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/games"
                  className="rounded-xl gradient-cta px-10 py-4 text-center text-lg font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(275_80%_60%/0.6)] animate-glow-pulse"
                >
                  Play Free Now
                </Link>
                <Link
                  to="/games"
                  className="rounded-xl border-2 border-primary/40 bg-primary/5 px-10 py-4 text-center text-lg font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(275_80%_60%/0.2)]"
                >
                  Browse Games
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-5 py-2.5 text-xs font-semibold text-primary backdrop-blur-sm shadow-[0_0_15px_hsl(275_80%_60%/0.1)]"
                  >
                    <badge.icon className="h-4 w-4" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Dragon */}
            <div className="relative flex-shrink-0 lg:flex-shrink-0">
              {/* Multi-layered glow behind dragon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/15 blur-[80px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-secondary/10 blur-[60px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent/12 blur-[40px]" />

              <img
                src={dragonHero}
                alt="VaultGridex Dragon Mascot"
                className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[460px] drop-shadow-[0_10px_30px_rgba(120,50,200,0.3)] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
              {/* Ground shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-[50%] bg-black/40 blur-2xl" />
              {/* Glow ring at base */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[50%] h-4 rounded-[50%] bg-primary/20 blur-xl" />
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
              className="inline-flex rounded-xl gradient-cta px-8 py-3.5 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(275_80%_60%/0.5)]"
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
                className="rounded-xl border border-border/50 gradient-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_hsl(275_80%_60%/0.1)]"
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

      {/* MID PAGE FEATURE - Dragon Flying */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px] scale-90" />
              <img
                src={dragonFlying}
                alt="Flying Dragon"
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
                className="mt-6 inline-flex rounded-xl gradient-cta px-8 py-3.5 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(275_80%_60%/0.5)]"
              >
                Start Playing Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND FEATURE - Dragon Sitting */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-[80px] scale-90" />
              <img
                src={dragonSitting}
                alt="Dragon with coins and cards"
                className="relative z-10 w-64 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:w-72 lg:w-80"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-display font-bold text-foreground lg:text-4xl">
                Your Lucky{" "}
                <span className="text-gradient">Companion</span>
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0">
                Meet your royal dragon guide! Explore a kingdom of slots, card games, and table classics. Every game is crafted for maximum enjoyment with beautiful visuals and smooth gameplay. No real money needed — just endless entertainment.
              </p>
              <Link
                to="/games"
                className="mt-6 inline-flex rounded-xl gradient-cta px-8 py-3.5 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(275_80%_60%/0.5)]"
              >
                Explore Games
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
            VaultGridex is a social casino entertainment platform for users aged 18 and over. This is not real money gambling. There are no prizes or items of real-world value. Virtual coins and credits are for entertainment purposes only and cannot be exchanged for real money.
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