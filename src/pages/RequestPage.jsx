// RequestPage — shows all donors the user has requested help from

export default function RequestPage({ requests }) {
  return (
    <div className="p-10 bg-[#fafafa] min-h-[calc(100vh-64px)]">
      <h2 className="font-serif text-[32px] font-extrabold text-[#1a1a1a] mb-1.5">
        My <span className="text-red-500">Requests</span>
      </h2>
      <p className="font-serif text-gray-500 mb-7">
        {requests.length} request{requests.length !== 1 ? "s" : ""} sent
      </p>

      {requests.length === 0 ? (
        <div className="text-center px-10 py-20 bg-white rounded-2xl border-2 border-dashed border-red-200">
          <p className="text-5xl mb-3">📋</p>
          <p className="font-serif text-xl font-bold text-gray-300 mb-2">No requests yet</p>
          <p className="font-serif text-gray-400 m-0">
            Go to the Donors page and click "Request Help" to get started.
          </p>
        </div>
      ) : (
        // ── Request List ──
        <div className="flex flex-col gap-4">
          {requests.map((donor) => (
            <div
              key={donor.id}
              className="bg-white border-2 border-green-100 rounded-2xl p-6 flex items-center gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              {/* Blood Group Badge */}
              <div className="bg-red-100 text-red-500 rounded-xl px-4 py-2.5 font-serif text-[22px] font-extrabold min-w-[60px] text-center">
                {donor.bloodGroup}
              </div>

              {/* Donor Info */}
              <div className="flex-1">
                <p className="font-serif text-[17px] font-bold text-[#1a1a1a] m-0">{donor.name}</p>
                <p className="font-serif text-[13px] text-gray-400 my-1">{donor.email}</p>
                <p className="font-serif text-[13px] text-gray-500 m-0">📍 {donor.city}</p>
              </div>

              {/* Status Tag */}
              <div className="bg-green-50 text-green-600 rounded-xl px-4 py-2 font-serif text-[13px] font-bold">
                Request Sent ✅
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}