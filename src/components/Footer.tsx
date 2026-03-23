import { Link } from "react-router-dom";
import gamcareImg from "@/assets/gamcare.png";
import gambleawareImg from "@/assets/gambleaware.png";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <span className="text-xl font-display font-bold text-gradient"><span className="text-xl font-display font-bold text-gradient">🦊 PriceLyxo</span></span>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Premium social casino entertainment. 100% free to play. No real money gambling. 18+ only.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Games", path: "/games" },
              { label: "About Us", path: "/about" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms & Conditions", path: "/terms" },
              { label: "Cookie Policy", path: "/cookies" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Responsible Gaming</h4>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <img src={gamcareImg} alt="GamCare" className="h-8 w-auto object-contain" />
            </a>
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <img src={gambleawareImg} alt="GambleAware" className="h-8 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FoxPlay. This website is for entertainment purposes only. No real money gambling. No prizes or items of real-world value. 18+ only. Play responsibly.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
