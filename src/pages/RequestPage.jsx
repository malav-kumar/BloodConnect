// RequestPage — shows all donors the user has requested help from

export default function RequestPage({ requests }) {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>
        My <span style={{ color: "#ef4444" }}>Requests</span>
      </h2>
      <p style={styles.subtitle}>
        {requests.length} request{requests.length !== 1 ? "s" : ""} sent
      </p>

      {requests.length === 0 ? (
        <div style={styles.emptyBox}>
          <p style={styles.emptyIcon}>📋</p>
          <p style={styles.emptyTitle}>No requests yet</p>
          <p style={styles.emptyText}>
            Go to the Donors page and click "Request Help" to get started.
          </p>
        </div>
      ) : (
        // ── Request List ──
        <div style={styles.list}>
          {requests.map((donor) => (
            <div key={donor.id} style={styles.requestCard}>
              {/* Blood Group Badge */}
              <div style={styles.bloodBadge}>{donor.bloodGroup}</div>

              {/* Donor Info */}
              <div style={styles.info}>
                <p style={styles.name}>{donor.name}</p>
                <p style={styles.email}>{donor.email}</p>
                <p style={styles.city}>📍 {donor.city}</p>
              </div>

              {/* Status Tag */}
              <div style={styles.statusTag}>Request Sent ✅</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    background: "#fafafa",
    minHeight: "calc(100vh - 64px)",
  },
  title: {
    fontFamily: "Georgia, serif",
    fontSize: 32,
    fontWeight: 800,
    color: "#1a1a1a",
    margin: "0 0 6px",
  },
  subtitle: {
    fontFamily: "Georgia, serif",
    color: "#6b7280",
    margin: "0 0 28px",
  },
  emptyBox: {
    textAlign: "center",
    padding: "80px 40px",
    background: "#fff",
    borderRadius: 20,
    border: "2px dashed #fecaca",
  },
  emptyIcon: {
    fontSize: 48,
    margin: "0 0 12px",
  },
  emptyTitle: {
    fontFamily: "Georgia, serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#d1d5db",
    margin: "0 0 8px",
  },
  emptyText: {
    fontFamily: "Georgia, serif",
    color: "#9ca3af",
    margin: 0,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  requestCard: {
    background: "#fff",
    border: "2px solid #d1fae5",
    borderRadius: 16,
    padding: 24,
    display: "flex",
    alignItems: "center",
    gap: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  },
  bloodBadge: {
    background: "#fee2e2",
    color: "#ef4444",
    borderRadius: 12,
    padding: "10px 16px",
    fontFamily: "Georgia, serif",
    fontSize: 22,
    fontWeight: 800,
    minWidth: 60,
    textAlign: "center",
  },
  info: {
    flex: 1,
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
    fontSize: 13,
    color: "#9ca3af",
    margin: "4px 0",
  },
  city: {
    fontFamily: "Georgia, serif",
    fontSize: 13,
    color: "#6b7280",
    margin: 0,
  },
  statusTag: {
    background: "#f0fdf4",
    color: "#16a34a",
    borderRadius: 10,
    padding: "8px 16px",
    fontFamily: "Georgia, serif",
    fontSize: 13,
    fontWeight: 700,
  },
};