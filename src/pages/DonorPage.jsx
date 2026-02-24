// DonorPage — Filter bar + grid of DonorCards

import { useState } from "react";
import DonorCard from "../components/DonorCard";
import { BLOOD_GROUPS } from "../data/constants";

export default function DonorPage({ donors, loading, requests, onRequest }) {
  const [bloodFilter, setBloodFilter] = useState("");
  const [citySearch, setCitySearch] = useState("");

  // Filter donors based on dropdown and search input
  const filteredDonors = donors.filter((donor) => {
    const matchesBlood = !bloodFilter || donor.bloodGroup === bloodFilter;
    const matchesCity = !citySearch || donor.city.toLowerCase().includes(citySearch.toLowerCase());
    return matchesBlood && matchesCity;
  });

  const availableCount = filteredDonors.filter((d) => d.available).length;

  return (
    <div style={styles.page}>
      {/* ── Page Header ── */}
      <h2 style={styles.title}>
        Find <span style={{ color: "#ef4444" }}>Blood Donors</span>
      </h2>
      <p style={styles.subtitle}>{availableCount} donors currently available</p>

      {/* ── Filter Bar ── */}
      <div style={styles.filterRow}>
        <select
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
          style={styles.select}
        >
          <option value="">All Blood Groups</option>
          {BLOOD_GROUPS.map((bg) => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="🔍 Search by city..."
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* ── Donor Grid / States ── */}
      {loading ? (
        <div style={styles.centerMsg}>
          <p>⏳ Loading donors...</p>
        </div>
      ) : filteredDonors.length === 0 ? (
        <div style={styles.centerMsg}>
          <p>😕 No donors found. Try a different filter.</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {filteredDonors.map((donor) => (
            <DonorCard
              key={donor.id}
              donor={donor}
              isRequested={requests.some((r) => r.id === donor.id)}
              onRequest={onRequest}
            />
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
  filterRow: {
    display: "flex",
    gap: 12,
    marginBottom: 32,
    flexWrap: "wrap",
  },
  select: {
    border: "2px solid #e5e7eb",
    borderRadius: 10,
    padding: "10px 16px",
    fontFamily: "Georgia, serif",
    fontSize: 14,
    color: "#374151",
    background: "#fff",
    cursor: "pointer",
  },
  input: {
    border: "2px solid #e5e7eb",
    borderRadius: 10,
    padding: "10px 16px",
    fontFamily: "Georgia, serif",
    fontSize: 14,
    color: "#374151",
    background: "#fff",
    outline: "none",
    minWidth: 200,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: 20,
  },
  centerMsg: {
    textAlign: "center",
    padding: "60px 0",
    color: "#9ca3af",
    fontFamily: "Georgia, serif",
    fontSize: 18,
  },
};