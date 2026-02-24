// Footer — shown at the bottom of the Home page

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.brand}>🩸 BloodConnect</p>
      <p style={styles.tagline}>
        Connecting donors with those in need • 2025 • Made with ❤️
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "auto",
    background: "#1a1a1a",
    padding: "28px 40px",
    textAlign: "center",
  },
  brand: {
    fontFamily: "Georgia, serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#ef4444",
    margin: "0 0 8px",
  },
  tagline: {
    fontFamily: "Georgia, serif",
    fontSize: 14,
    color: "#9ca3af",
    margin: 0,
  },
};