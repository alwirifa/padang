// src/app/dashboard/laporan/page.tsx
"use client";

import React, { useState } from 'react';
import DateRangePicker from '@/components/dashboard/laporan/datepicker';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DashboardPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<{ startDate: Date | null, endDate: Date | null }>({ startDate: null, endDate: null });
  const router = useRouter();

  const handleDateRangeChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange({ startDate, endDate });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handlePrint = async () => {
    if (dateRange.startDate && dateRange.endDate) {
      const formattedStartDate = formatDate(dateRange.startDate);
      const formattedEndDate = formatDate(dateRange.endDate);
      const url = `https://giraffe-adjusted-severely.ngrok-free.app/api/admin/laporan?from_date=${formattedStartDate}&to_date=${formattedEndDate}`;

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",  // Adjust as needed
          },
        });

        if (response.status === 200) {
          console.log("Data fetched:", response.data);
          // Handle the fetched data or update the state
        } else {
          console.error("Unexpected status code:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      console.error('Start date or end date is missing.');
    }
  };

  return (
    <div className="bg-white h-full w-full p-6 font-sans flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Dashboard</h1>
        <p className="text-xl">Selamat Datang di Sistem Inventory Aset SIPlah</p>
      </div>

      <div className='flex flex-col gap-6 mt-6'>
        <DateRangePicker
          onDateRangeChange={handleDateRangeChange}
          onPrint={handlePrint}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
