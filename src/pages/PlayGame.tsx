import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { allGames } from "@/data/games";

const PlayGame = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = allGames.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-2xl font-display font-bold"><h1 className="text-2xl font-display font-bold">Game not found</h1></h1>
        <Link to="/games" className="mt-4 text-primary underline">
          Back to Games
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center gap-4 border-b border-border/50 bg-card px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-lg border border-border/50 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <h1 className="font-display font-semibold text-foreground">{game.title}</h1>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {game.category}
        </span>
      </div>

      {/* Game iframe */}
      <div className="flex-1">
        <iframe
          src={game.url}
          title={game.title}
          className="h-full w-full border-0"
          style={{ minHeight: "calc(100vh - 57px)" }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default PlayGame;
