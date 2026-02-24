// DonorCard — shows one donor's info
// Props: donor (object), onRequest (function), isRequested (boolean)

export default function DonorCard({ donor, onRequest, isRequested }) {
  const { name, email, city, bloodGroup, available } = donor;

  // Button label changes based on state
  const buttonLabel = isRequested
    ? "Request Sent ✅"
    : !available
    ? "Not Available"
    : "Request Help 🩸";

  const buttonDisabled = isRequested || !available;

  return (
    <div style={styles.card}>
      {/* Top row: Name + Blood Group badge */}
      <div style={styles.topRow}>
        <div>
          <p style={styles.name}>{name}</p>
          <p style={styles.email}>{email}</p>
        </div>
        <div style={styles.bloodBadge}>{bloodGroup}</div>
      </div>

      {/* City and Availability tags */}
      <div style={styles.tagsRow}>
        <span style={styles.cityTag}>📍 {city}</span>
        <span style={{
          ...styles.availTag,
          background: available ? "#f0fdf4" : "#fff5f5",
          color: available ? "#16a34a" : "#dc2626",
        }}>
          {available ? "✅ Available" : "❌ Unavailable"}
        </span>
      </div>

      {/* Request Button */}
      <button
        onClick={() => onRequest(donor)}
        disabled={buttonDisabled}
        style={{
          ...styles.button,
          background: isRequested ? "#f0fdf4" : !available ? "#f3f4f6" : "#ef4444",
          color: isRequested ? "#16a34a" : !available ? "#9ca3af" : "#fff",
          border: isRequested ? "2px solid #86efac" : !available ? "2px solid #e5e7eb" : "none",
          cursor: buttonDisabled ? "default" : "pointer",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    border: "2px solid #f3f4f6",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontFamily: "Georgia, serif",
    fontSize: 17,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
  },
  email: {
    fontFamily: "Georgia, serif",
    fontSize: 12,
    color: "#9ca3af",
    margin: "4px 0 0",
  },
  bloodBadge: {
    background: "#fee2e2",
    color: "#ef4444",
    borderRadius: 10,
    padding: "6px 14px",
    fontFamily: "Georgia, serif",
    fontSize: 18,
    fontWeight: 800,
  },
  tagsRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  cityTag: {
    background: "#f0fdf4",
    color: "#16a34a",
    borderRadius: 8,
    padding: "4px 12px",
    fontSize: 13,
    fontFamily: "Georgia, serif",
  },
  availTag: {
    borderRadius: 8,
    padding: "4px 12px",
    fontSize: 13,
    fontFamily: "Georgia, serif",
  },
  button: {
    marginTop: 4,
    borderRadius: 10,
    padding: "10px 0",
    fontFamily: "Georgia, serif",
    fontSize: 14,
    fontWeight: 700,
    width: "100%",
  },
};