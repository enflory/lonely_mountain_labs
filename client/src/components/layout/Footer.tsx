export default function Footer() {
  return (
    <footer
      className="border-t border-[#d4c9af] font-mono text-[11px] text-muted-foreground"
      style={{ padding: "32px 56px", letterSpacing: "0.08em" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; 2026 Ethan Flory &middot; Lonely Mountain Labs</span>
        <span>Built with curiosity, guided by mistakes.</span>
      </div>
    </footer>
  );
}
