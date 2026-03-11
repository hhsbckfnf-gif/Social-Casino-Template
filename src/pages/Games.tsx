import { useState } from "react";
import GameCard from "@/components/GameCard";
import { allGames } from "@/data/games";

const categories = ["All", "Slots", "Table Games", "Keno"];

const Games = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allGames : allGames.filter((g) => g.category === activeCategory);

  return (
    <>
      <section className="relative section-glow py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold text-foreground lg:text-5xl">
              Our <span className="text-gradient">Games</span>
            </h1>
            <p className="mt-3 text-muted-foreground">All games are 100% free to play. No real money. No deposits.</p>
          </div>

          {/* Category filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-cta text-secondary-foreground shadow-[0_0_15px_hsl(28_100%_55%/0.3)]"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((game) => (
              <GameCard key={game.id} game={game} showPlayButton />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Games;
