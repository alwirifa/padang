"use client"

"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <label className="text-lg">Silahkan pilih tanggal untuk data yang dibutuhkan.</label>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="start-date" className="text-md font-semibold">Dari Tanggal</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
              setStartDate(date);
            }}
            dateFormat="dd/MM/yyyy"
            className="px-4 py-2 border rounded-md"
            placeholderText="Pilih Tanggal"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="end-date" className="text-md font-semibold">Hingga Tanggal</label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
              setEndDate(date);
            }}
            dateFormat="dd/MM/yyyy"
            className="px-4 py-2 border rounded-md"
            placeholderText="Pilih Tanggal"
          />
        </div>
        <button className="bg-green-200 text-black font-semibold px-4 py-2 rounded-md mt-6">PRINT</button>
      </div>
    </div>
  );
};

export default DateRangePicker;
