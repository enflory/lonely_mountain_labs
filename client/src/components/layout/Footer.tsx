import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-primary tracking-tight">Lonely Mountain Labs</span>
            <p className="text-sm text-muted-foreground">
              © 2025 Ethan Flory — Lonely Mountain Labs
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with curiousity, guided by mistakes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
