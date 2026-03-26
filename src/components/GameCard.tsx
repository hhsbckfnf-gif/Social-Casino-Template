import { Link } from "react-router-dom";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  showPlayButton?: boolean;
}

const GameCard = ({ game, showPlayButton = false }: GameCardProps) => (
  <div className="game-card group relative overflow-hidden rounded-xl border border-border/50 gradient-card">
    <div className="aspect-square overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="game-card-overlay flex items-center justify-center">
        <Link
          to={`/play/${game.id}`}
          className="rounded-lg gradient-cta px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-110 hover:shadow-[0_0_30px_hsl(275_80%_60%/0.6)]"
        >
          Play Now
        </Link>
      </div>
    </div>
    <div className="p-4">
      <span className="text-xs font-medium text-primary">{game.category}</span>
      <h3 className="mt-1 font-display font-semibold text-foreground">{game.title}</h3>
      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{game.description}</p>
      {showPlayButton && (
        <Link
          to={`/play/${game.id}`}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg gradient-cta px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_hsl(275_80%_60%/0.4)]"
        >
          Play Now
        </Link>
      )}
    </div>
  </div>
);

export default GameCard;