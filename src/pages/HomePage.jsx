// HomePage — Banner + 3 stat cards + Footer

import StatCard from "../components/StatCard";
import Footer from "../components/Footer";

export default function HomePage({ requestCount, setPage }) {
  return (
    <div style={styles.wrapper}>

      {/* ── Banner ── */}
      <div style={styles.banner}>
        <p style={styles.emoji}>🩸</p>
        <h1 style={styles.heading}>
          Save Lives.{" "}
          <span style={{ color: "#ef4444" }}>Donate Blood.</span>
        </h1>
        <p style={styles.subtext}>
          Connect with blood donors in your city instantly.
          Every drop counts — find the right donor at the right time.
        </p>
        <button style={styles.ctaBtn} onClick={() => setPage("donor")}>
          Find Donors →
        </button>
      </div>

      {/* ── 3 Stat Cards ── */}
      <div style={styles.statsRow}>
        <StatCard icon="👤" number="10+" label="Donors Available" color="#ef4444" />
        <StatCard icon="🌆" number="10+" label="Cities Covered"   color="#3b82f6" />
        <StatCard icon="📋" number={requestCount} label="Requests Sent" color="#10b981" />
      </div>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
  },
  banner: {
    background: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fecaca 100%)",
    padding: "80px 40px",
    textAlign: "center",
    borderBottom: "2px solid #fecaca",
  },
  emoji: {
    fontSize: 52,
    margin: "0 0 12px",
  },
  heading: {
    fontFamily: "Georgia, serif",
    fontSize: 46,
    fontWeight: 800,
    color: "#1a1a1a",
    margin: "0 0 16px",
  },
  subtext: {
    fontFamily: "Georgia, serif",
    fontSize: 17,
    color: "#6b7280",
    maxWidth: 540,
    margin: "0 auto 32px",
    lineHeight: 1.6,
  },
  ctaBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "14px 36px",
    fontFamily: "Georgia, serif",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(239,68,68,0.3)",
  },
  statsRow: {
    display: "flex",
    gap: 24,
    padding: "48px 40px",
    justifyContent: "center",
    background: "#fff",
    flexWrap: "wrap",
  },
};