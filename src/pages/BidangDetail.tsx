import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"

type SubTask = {
  text: string
  checked: boolean
}

type AktivitasItem = {
  title: string
  priority: "Low" | "Medium" | "High"
  desc: string
  subtasks: SubTask[]
  date: string
  status: "Done" | "In Progress" | "Todo"
}

const aktivitasData: Record<string, AktivitasItem[]> = {
  angkutan: [
    {
      title: "Perizinan Angkutan Umum",
      priority: "High",
      desc: "Proses pengajuan dan penerbitan izin trayek bagi perusahaan angkutan umum agar dapat beroperasi secara resmi.",
      subtasks: [
        { text: "Pengumpulan dokumen perusahaan", checked: true },
        { text: "Verifikasi kendaraan di lapangan", checked: false },
        { text: "Penetapan izin trayek baru", checked: false },
      ],
      date: "2025-10-05",
      status: "In Progress",
    },
    {
      title: "Pemeriksaan Kendaraan",
      priority: "Medium",
      desc: "Pemeriksaan kelayakan teknis dan emisi kendaraan umum serta dinas secara berkala.",
      subtasks: [
        { text: "Pemeriksaan sistem rem", checked: true },
        { text: "Uji emisi gas buang", checked: true },
        { text: "Pembuatan laporan hasil uji", checked: false },
      ],
      date: "2025-10-07",
      status: "Todo",
    },
    {
      title: "Evaluasi Trayek",
      priority: "Low",
      desc: "Evaluasi efektivitas trayek yang sudah berjalan untuk optimalisasi pelayanan.",
      subtasks: [
        { text: "Analisis jumlah penumpang", checked: true },
        { text: "Pemetaan trayek alternatif", checked: false },
      ],
      date: "2025-10-10",
      status: "Done",
    },
  ],
  "perlengkapan jalan": [
    {
      title: "Pemeliharaan Rambu Jalan",
      priority: "High",
      desc: "Kegiatan perawatan dan pengecekan kondisi rambu lalu lintas di berbagai titik kota.",
      subtasks: [
        { text: "Inspeksi rambu rusak", checked: true },
        { text: "Penggantian tiang rambu", checked: false },
        { text: "Pengecatan ulang simbol", checked: false },
      ],
      date: "2025-09-30",
      status: "In Progress",
    },
  ],
  "lalu lintas": [
    {
      title: "Pengaturan Arus Kendaraan",
      priority: "High",
      desc: "Penyesuaian arus lalu lintas untuk mengurai kemacetan di jam sibuk.",
      subtasks: [
        { text: "Pemetaan titik kemacetan", checked: true },
        { text: "Penerapan jalur satu arah", checked: true },
        { text: "Evaluasi dampak pengaturan", checked: false },
      ],
      date: "2025-10-06",
      status: "Done",
    },
  ],
  sekretariat: [
    {
      title: "Rapat Koordinasi Mingguan",
      priority: "Medium",
      desc: "Koordinasi lintas bidang untuk membahas progres kegiatan mingguan.",
      subtasks: [
        { text: "Persiapan agenda rapat", checked: true },
        { text: "Pelaksanaan rapat koordinasi", checked: true },
        { text: "Pembuatan notulensi rapat", checked: false },
      ],
      date: "2025-10-08",
      status: "In Progress",
    },
  ],
  "upt pengujian kendaraan": [
    {
      title: "Pelaksanaan Uji KIR",
      priority: "High",
      desc: "Pengujian kelayakan kendaraan angkutan barang dan penumpang di UPT.",
      subtasks: [
        { text: "Pemeriksaan fisik kendaraan", checked: true },
        { text: "Uji sistem rem & lampu", checked: true },
        { text: "Penerbitan kartu uji KIR", checked: false },
      ],
      date: "2025-10-09",
      status: "In Progress",
    },
  ],
}

function BidangDetail() {
  const { namaBidang } = useParams<{ namaBidang: string }>()
  const bidangKey = decodeURIComponent(namaBidang || "").toLowerCase()
  const aktivitasList = aktivitasData[bidangKey] || []

  const [selectedAktivitas, setSelectedAktivitas] = useState<AktivitasItem | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 6
  const totalPages = Math.ceil(aktivitasList.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = aktivitasList.slice(startIndex, startIndex + itemsPerPage)

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1)

  // Function buat style badge status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Done":
        return "bg-green-100 text-green-700 border border-green-400"
      case "In Progress":
        return "bg-yellow-100 text-yellow-700 border border-yellow-400"
      case "Todo":
        return "bg-gray-100 text-gray-700 border border-gray-400"
      default:
        return "bg-gray-100 text-gray-700 border border-gray-400"
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      {/* HERO */}
      <section className="bg-cover bg-hero-image text-black lg:pt-[250px] pt-[150px] lg:pb-[50px] pb-[50px] text-center">
        <h1 className="text-2xl sm:text-4xl font-bold font-jost capitalize">
          Bidang {namaBidang?.replace(/-/g, " ")}
        </h1>
      </section>

      {/* GRID AKTIVITAS */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold font-jost mb-8 text-left">
          Daftar Aktivitas
        </h2>

        {aktivitasList.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((aktivitas, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold font-jost">
                      {aktivitas.title}
                    </h3>
                    
                  </div>

                  <div className="text-sm text-gray-600 mb-3 space-y-1">
                    <p>📅 {new Date(aktivitas.date).toLocaleDateString("id-ID")}</p>
                    <p>
                      Priority:{" "}
                      <span
                        className={
                          aktivitas.priority === "High"
                            ? "text-red-600"
                            : aktivitas.priority === "Medium"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }
                      >
                        {aktivitas.priority}
                      </span>
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{aktivitas.desc}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedAktivitas(aktivitas)}
                      className="bg-primary-dark hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition"
                    >
                      Lihat Detail
                    </button>
                    <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusBadge(
                          aktivitas.status
                        )}`}
                      >
                      {aktivitas.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-700 text-white hover:bg-blue-800"
                  }`}
                >
                  ← Sebelumnya
                </button>

                <span className="text-gray-700 font-medium">
                  Halaman {currentPage} dari {totalPages}
                </span>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-700 text-white hover:bg-blue-800"
                  }`}
                >
                  Selanjutnya →
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Tidak ada aktivitas di bidang ini.
          </p>
        )}
      </section>

      <Footer />

      {/* MODAL POPUP DETAIL */}
      {selectedAktivitas && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
          onClick={() => setSelectedAktivitas(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold font-jost mb-2">
              {selectedAktivitas.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedAktivitas.desc}</p>

            <ul className="space-y-2">
              {selectedAktivitas.subtasks.map((sub, subIdx) => (
                <li
                  key={subIdx}
                  className="flex items-start gap-3 p-2 bg-gray-50 rounded-md"
                >
                  <input
                    type="checkbox"
                    checked={sub.checked}
                    readOnly
                    className="mt-1 w-5 h-5 accent-green-600"
                  />
                  <span
                    className={`text-gray-700 ${
                      sub.checked ? "line-through text-green-700" : ""
                    }`}
                  >
                    {sub.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedAktivitas(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default BidangDetail
