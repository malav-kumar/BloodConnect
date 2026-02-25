export default function DonorCard({ donor, onRequest, isRequested }) {
  const { name, email, city, bloodGroup, available } = donor;

  const buttonLabel = isRequested
    ? "Request Sent ✅"
    : !available
    ? "Not Available"
    : "Request Help 🩸";

  const buttonDisabled = isRequested || !available;

  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
      {/* Top row: Name + Blood Group badge */}
      <div className="flex justify-between items-start">
        <div>
          <p className="font-serif text-[17px] font-bold text-gray-900 m-0">{name}</p>
          <p className="font-serif text-xs text-gray-400 mt-1 mb-0">{email}</p>
        </div>
        <div className="bg-red-100 text-red-500 rounded-xl px-3.5 py-1.5 font-serif text-lg font-extrabold">
          {bloodGroup}
        </div>
      </div>

      {/* City and Availability tags */}
      <div className="flex flex-wrap gap-2">
        <span className="bg-green-50 text-green-600 rounded-lg px-3 py-1 text-sm font-serif">
          📍 {city}
        </span>
        <span
          className={`rounded-lg px-3 py-1 text-sm font-serif ${
            available
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {available ? "✅ Available" : "❌ Unavailable"}
        </span>
      </div>

      {/* Request Button */}
      <button
        onClick={() => onRequest(donor)}
        disabled={buttonDisabled}
        className={`mt-1 rounded-xl py-2.5 w-full font-serif text-sm font-bold border-2 transition-opacity
          ${
            isRequested
              ? "bg-green-50 text-green-600 border-green-300"
              : !available
              ? "bg-gray-100 text-gray-400 border-gray-200"
              : "bg-red-500 text-white border-transparent hover:bg-red-600"
          }
          ${buttonDisabled ? "cursor-default" : "cursor-pointer"}
        `}
      >
        {buttonLabel}
      </button>
    </div>
  );
}