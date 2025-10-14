import React, { useEffect, useState, useRef } from "react";

// Type untuk laporan
type Laporan = {
  id: number;
  tanggal: string;
  judul: string;
  deskripsi: string;
};

const UserReport: React.FC = () => {
  // Dummy data laporan (100 item)
  const allData: Laporan[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    tanggal: `2025-08-${String((i % 30) + 1).padStart(2, "0")}`,
    judul: `Laporan ke-${i + 1}`,
    deskripsi: `Ini adalah deskripsi singkat untuk laporan nomor ${i + 1}.`,
  })).reverse(); // ⬅️ langsung dibalik, jadi terbaru duluan

  const [laporan, setLaporan] = useState<Laporan[]>([]);
  const [loading, setLoading] = useState(false);
  const laporanRef = useRef<HTMLDivElement | null>(null);

  const batchSize = 10; // load 10 laporan per scroll
  const [page, setPage] = useState(1);

  // Load batch data
  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      const nextData = allData.slice((page - 1) * batchSize, page * batchSize);
      setLaporan((prev) => [...prev, ...nextData]);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle infinite scroll
  const handleScroll = () => {
    const el = laporanRef.current;
    if (el && el.scrollTop + el.clientHeight >= el.scrollHeight - 5 && !loading) {
      if (laporan.length < allData.length) {
        loadData();
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-4 w-full max-h-[460px]">
      <h3 className='font-jost text-xl font-bold text-center mb-4 text-primary-dark'>Laporan Terbaru</h3>

        {/* List laporan */}
        <div
          ref={laporanRef}
          onScroll={handleScroll}
          className="space-y-4 max-h-[352px] overflow-y-auto"
        >
          {laporan.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-sm hover:bg-gray-50 transition"
            >
              <h3 className="font-bold font-jost text-primary-dark">{item.judul}</h3>
              <p className="text-sm text-gray-500 font-jost">{item.tanggal}</p>
              <p className="mt-2 text-gray-700 font-jost">{item.deskripsi}</p>
            </div>
          ))}

          {/* Loader */}
          {loading && (
            <div className="text-center py-3 text-gray-500 text-sm">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserReport;
