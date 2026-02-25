// StatCard — one of the 3 boxes shown on the Home page
// Props: icon, number, label, color

export default function StatCard({ icon, number, label, color }) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl px-10 py-8 text-center flex-1 max-w-[260px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col items-center gap-2">
      <span className="text-4xl">{icon}</span>
      <span className="font-serif text-[40px] font-extrabold" style={{ color }}>{number}</span>
      <span className="font-serif text-[15px] text-gray-500">{label}</span>
    </div>
  );
}