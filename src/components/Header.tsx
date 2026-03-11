import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Games", path: "/games" },
  { label: "About Us", path: "/about" },
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
  { label: "Cookies", path: "/cookies" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient">🦊 FoxPlay</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/games"
          className="hidden lg:inline-flex items-center gap-2 rounded-lg gradient-cta px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(28_100%_55%/0.5)]"
        >
          Play Free Now
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
            <X className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/games"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg gradient-cta px-5 py-2.5 text-center text-sm font-semibold text-secondary-foreground"
          >
            Play Free Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
