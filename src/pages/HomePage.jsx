// HomePage — Banner + 3 stat cards + Footer

import StatCard from "../components/StatCard";
import Footer from "../components/Footer";

export default function HomePage({ requestCount, setPage }) {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col">

      {/* ── Banner ── */}
      <div className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 px-10 py-20 text-center border-b-2 border-red-200">
        <p className="text-[52px] mb-3">🩸</p>
        <h1 className="font-serif text-[46px] font-extrabold text-[#1a1a1a] mb-4">
          Save Lives.{" "}
          <span className="text-red-500">Donate Blood.</span>
        </h1>
        <p className="font-serif text-[17px] text-gray-500 max-w-[540px] mx-auto mb-8 leading-relaxed">
          Connect with blood donors in your city instantly.
          Every drop counts — find the right donor at the right time.
        </p>
        <button
          onClick={() => setPage("donor")}
          className="bg-red-500 text-white border-none rounded-xl px-9 py-3.5 font-serif text-base font-bold cursor-pointer shadow-[0_4px_20px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-colors"
        >
          Find Donors →
        </button>
      </div>

      {/* ── 3 Stat Cards ── */}
      <div className="flex flex-wrap gap-6 px-10 py-12 justify-center bg-white">
        <StatCard icon="👤" number="10+" label="Donors Available" color="#ef4444" />
        <StatCard icon="🌆" number="10+" label="Cities Covered"   color="#3b82f6" />
        <StatCard icon="📋" number={requestCount} label="Requests Sent" color="#10b981" />
      </div>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}