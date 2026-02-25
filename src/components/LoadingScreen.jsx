// LoadingScreen — shown for 1 second when app first opens

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-4 z-[9999]">
      <span className="text-6xl">🩸</span>
      <h2 className="font-serif text-[28px] font-bold text-[#1a1a1a] m-0">
        Blood<span className="text-red-500">Connect</span>
      </h2>
      <p className="font-serif text-[15px] text-gray-400 m-0">
        Finding donors near you...
      </p>

      {/* Animated dots */}
      <div className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-red-500 animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}