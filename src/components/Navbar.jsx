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
    <nav style={styles.navbar}>
      {/* Logo — left side */}
      <div style={styles.logo} onClick={() => setPage("home")}>
        <span style={styles.logoIcon}>🩸</span>
        <span style={styles.logoText}>
          Blood<span style={{ color: "#ef4444" }}>Connect</span>
        </span>
      </div>

      {/* Nav Links — right side */}
      <div style={styles.navLinks}>
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setPage(link)}
            style={{
              ...styles.navBtn,
              background: page === link ? "#ef4444" : "transparent",
              color: page === link ? "#fff" : "#374151",
              border: page === link ? "none" : "1.5px solid #e5e7eb",
            }}
          >
            {labelMap[link]}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "2px solid #fee2e2",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    height: 64,
    boxShadow: "0 2px 12px rgba(239,68,68,0.08)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  logoIcon: {
    fontSize: 24,
  },
  logoText: {
    fontFamily: "Georgia, serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#1a1a1a",
  },
  navLinks: {
    display: "flex",
    gap: 8,
  },
  navBtn: {
    borderRadius: 8,
    padding: "8px 20px",
    fontFamily: "Georgia, serif",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
};