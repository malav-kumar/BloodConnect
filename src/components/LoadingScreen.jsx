// LoadingScreen — shown for 1 second when app first opens

export default function LoadingScreen() {
  return (
    <div style={styles.wrapper}>
      <span style={styles.icon}>🩸</span>
      <h2 style={styles.title}>
        Blood<span style={{ color: "#ef4444" }}>Connect</span>
      </h2>
      <p style={styles.subtitle}>Finding donors near you...</p>

      {/* Animated dots */}
      <div style={styles.dotsRow}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Keyframe animation injected via style tag */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    zIndex: 9999,
  },
  icon: {
    fontSize: 56,
  },
  title: {
    fontFamily: "Georgia, serif",
    fontSize: 28,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
  },
  subtitle: {
    fontFamily: "Georgia, serif",
    fontSize: 15,
    color: "#9ca3af",
    margin: 0,
  },
  dotsRow: {
    display: "flex",
    gap: 8,
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#ef4444",
    animation: "bounce 1s ease-in-out infinite",
  },
};