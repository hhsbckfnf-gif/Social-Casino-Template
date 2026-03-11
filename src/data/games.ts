import ancientChina from "@/assets/games/ancient-china.jpg";
import fruitLoot from "@/assets/games/fruit-loot.jpg";
import toyBox from "@/assets/games/toy-box.jpg";
import kenoJackpot from "@/assets/games/keno-jackpot.jpg";
import blackjack from "@/assets/games/blackjack.jpg";
import roulette from "@/assets/games/roulette.jpg";
import goldNGems from "@/assets/games/gold-n-gems.jpg";
import fruitLootReboot from "@/assets/games/fruit-loot-reboot.jpg";
import goldNGems2 from "@/assets/games/gold-n-gems-2.jpg";
import americanBlackjack from "@/assets/games/american-blackjack.jpg";
import baccarat from "@/assets/games/baccarat.jpg";
import pompeii from "@/assets/games/pompeii.jpg";
import koiFortunes from "@/assets/games/koi-fortunes.jpg";
import cretaceousPark from "@/assets/games/cretaceous-park.jpg";
import diamondTimes from "@/assets/games/diamond-times.jpg";
import fireStorm from "@/assets/games/fire-storm.jpg";
import fortunesOfChina from "@/assets/games/fortunes-of-china.jpg";
import bloodMoney from "@/assets/games/blood-money.jpg";
import rainbowFarm from "@/assets/games/rainbow-farm.jpg";
import pharaohsGold from "@/assets/games/pharaohs-gold.jpg";

export interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
}

export const allGames: Game[] = [
  { id: "ancient-china", title: "Ancient China", category: "Slots", description: "Explore the riches of ancient dynasties with dragons and gold.", image: ancientChina, url: "https://demo.cg-casino.com?game_id=1036&language=en" },
  { id: "fruit-loot", title: "Fruit Loot", category: "Slots", description: "Classic fruit-themed fun with juicy wins and vibrant colors.", image: fruitLoot, url: "https://demo.cg-casino.com?game_id=1040&language=en" },
  { id: "toy-box", title: "Toy Box", category: "Slots", description: "A playful adventure with colorful toys and surprises.", image: toyBox, url: "https://demo.cg-casino.com?game_id=1041&language=en" },
  { id: "keno-jackpot", title: "Keno Jackpot", category: "Keno", description: "Pick your lucky numbers and chase the big jackpot.", image: kenoJackpot, url: "https://demo.cg-casino.com?game_id=1043&language=en" },
  { id: "blackjack", title: "Multi-Hand Blackjack", category: "Table Games", description: "Play multiple hands of classic blackjack for maximum thrills.", image: blackjack, url: "https://demo.cg-casino.com?game_id=1044&language=en" },
  { id: "roulette", title: "Roulette", category: "Table Games", description: "Spin the iconic wheel and place your bets on red or black.", image: roulette, url: "https://demo.cg-casino.com?game_id=1045&language=en" },
  { id: "gold-n-gems", title: "Gold n Gems", category: "Slots", description: "Uncover sparkling gems and golden treasures in every spin.", image: goldNGems, url: "https://demo.cg-casino.com?game_id=1048&language=en" },
  { id: "fruit-loot-reboot", title: "Fruit Loot Reboot", category: "Slots", description: "The classic reborn with neon style and futuristic flair.", image: fruitLootReboot, url: "https://demo.cg-casino.com?game_id=1052&language=en" },
  { id: "gold-n-gems-2", title: "Gold n Gems II", category: "Slots", description: "Even more treasure awaits in this glittering sequel.", image: goldNGems2, url: "https://demo.cg-casino.com?game_id=1053&language=en" },
  { id: "american-blackjack", title: "American Blackjack", category: "Table Games", description: "Classic American rules with a patriotic casino twist.", image: americanBlackjack, url: "https://demo.cg-casino.com?game_id=1054&language=en" },
  { id: "baccarat", title: "Baccarat", category: "Table Games", description: "The elegant card game of choice for high rollers.", image: baccarat, url: "https://demo.cg-casino.com?game_id=1059&language=en" },
  { id: "pompeii", title: "Pompeii", category: "Slots", description: "Ancient Roman adventure with volcanic eruptions and riches.", image: pompeii, url: "https://demo.cg-casino.com?game_id=1062&language=en" },
  { id: "koi-fortunes", title: "Koi Fortunes", category: "Slots", description: "Serene Japanese waters hide golden fortune beneath.", image: koiFortunes, url: "https://demo.cg-casino.com?game_id=1064&language=en" },
  { id: "cretaceous-park", title: "Cretaceous Park", category: "Slots", description: "Prehistoric dinosaur jungle adventure with massive rewards.", image: cretaceousPark, url: "https://demo.cg-casino.com?game_id=1068&language=en" },
  { id: "diamond-times", title: "Diamond Times", category: "Slots", description: "Luxury diamonds and glamour in this sparkling slot.", image: diamondTimes, url: "https://demo.cg-casino.com?game_id=1073&language=en" },
  { id: "fire-storm", title: "Fire Storm", category: "Slots", description: "Intense flames and blazing action with every spin.", image: fireStorm, url: "https://demo.cg-casino.com?game_id=1074&language=en" },
  { id: "fortunes-of-china", title: "Fortunes Of China", category: "Slots", description: "Red and gold prosperity with lucky Chinese symbols.", image: fortunesOfChina, url: "https://demo.cg-casino.com?game_id=1077&language=en" },
  { id: "blood-money", title: "Blood Money", category: "Slots", description: "Dark luxury and mystery in this thrilling slot game.", image: bloodMoney, url: "https://demo.cg-casino.com?game_id=1078&language=en" },
  { id: "rainbow-farm", title: "Rainbow Farm", category: "Slots", description: "Bright and cheerful farm fun under a lucky rainbow.", image: rainbowFarm, url: "https://demo.cg-casino.com?game_id=1079&language=en" },
  { id: "pharaohs-gold", title: "Pharaohs Gold", category: "Slots", description: "Egyptian pyramids and ancient pharaoh treasures await.", image: pharaohsGold, url: "https://demo.cg-casino.com?game_id=1080&language=en" },
];

export const featuredGameIds = [
  "ancient-china", "fruit-loot", "blackjack", "roulette",
  "gold-n-gems", "baccarat", "diamond-times", "fire-storm"
];

export const getFeaturedGames = () => allGames.filter(g => featuredGameIds.includes(g.id));
