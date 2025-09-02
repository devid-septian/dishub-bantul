import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';

// register komponen yang dipakai
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MyChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Laporan',
        data: [12, 19, 8, 15],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full">
      <h3 className='font-jost text-xl font-bold text-center mb-4 text-primary-dark'>Grafik Bulanan</h3>
      <Bar data={data} />
      <p className='text-center font-jost text-sm text-gray-500'>Total: 185 Laporan (4 Bulan)</p>
    </div>
  );
}
