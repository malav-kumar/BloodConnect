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
    <div className="p-10 bg-[#fafafa] min-h-[calc(100vh-64px)]">
      {/* ── Page Header ── */}
      <h2 className="font-serif text-[32px] font-extrabold text-[#1a1a1a] mb-1.5">
        Find <span className="text-red-500">Blood Donors</span>
      </h2>
      <p className="font-serif text-gray-500 mb-7">{availableCount} donors currently available</p>

      {/* ── Filter Bar ── */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
          className="border-2 border-gray-200 rounded-xl px-4 py-2.5 font-serif text-sm text-gray-700 bg-white cursor-pointer"
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
          className="border-2 border-gray-200 rounded-xl px-4 py-2.5 font-serif text-sm text-gray-700 bg-white outline-none min-w-[200px]"
        />
      </div>

      {/* ── Donor Grid / States ── */}
      {loading ? (
        <div className="text-center py-16 text-gray-400 font-serif text-lg">
          <p>⏳ Loading donors...</p>
        </div>
      ) : filteredDonors.length === 0 ? (
        <div className="text-center py-16 text-gray-400 font-serif text-lg">
          <p>😕 No donors found. Try a different filter.</p>
        </div>
      ) : (
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
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