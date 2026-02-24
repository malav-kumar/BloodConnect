// StatCard — one of the 3 boxes shown on the Home page
// Props: icon, number, label, color

export default function StatCard({ icon, number, label, color }) {
  return (
    <div style={styles.card}>
      <span style={styles.icon}>{icon}</span>
      <span style={{ ...styles.number, color }}>{number}</span>
      <span style={styles.label}>{label}</span>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    border: "2px solid #f3f4f6",
    borderRadius: 16,
    padding: "32px 40px",
    textAlign: "center",
    flex: 1,
    maxWidth: 260,
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    fontSize: 36,
  },
  number: {
    fontFamily: "Georgia, serif",
    fontSize: 40,
    fontWeight: 800,
  },
  label: {
    fontFamily: "Georgia, serif",
    fontSize: 15,
    color: "#6b7280",
  },
};