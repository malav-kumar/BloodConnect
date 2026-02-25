// Navbar — shown on every page
// Props: page (current page), setPage (function to change page)

export default function Navbar({ page, setPage }) {
  const navLinks = ["home", "donor", "request"];

  const labelMap = {
    home: "Home",
    donor: "Donors",
    request: "Requests",
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b-2 border-red-100 flex items-center justify-between px-10 h-16 shadow-[0_2px_12px_rgba(239,68,68,0.08)]">
      {/* Logo — left side */}
      <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setPage("home")}>
        <span className="text-2xl">🩸</span>
        <span className="font-serif text-xl font-bold text-[#1a1a1a]">
          Blood<span className="text-red-500">Connect</span>
        </span>
      </div>

      {/* Nav Links — right side */}
      <div className="flex gap-2">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setPage(link)}
            className={`rounded-lg px-5 py-2 font-serif text-sm font-semibold cursor-pointer transition-colors
              ${page === link
                ? "bg-red-500 text-white border-none"
                : "bg-transparent text-gray-700 border border-gray-200"
              }`}
          >
            {labelMap[link]}
          </button>
        ))}
      </div>
    </nav>
  );
}