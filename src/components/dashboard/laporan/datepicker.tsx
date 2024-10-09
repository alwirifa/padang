// src/components/dashboard/laporan/datepicker.tsx
"use client";

import React, { useState } from 'react';

interface DateRangePickerProps {
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
  onPrint: () => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateRangeChange, onPrint }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value ? new Date(event.target.value) : null;
    setStartDate(date);
    onDateRangeChange(date, endDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value ? new Date(event.target.value) : null;
    setEndDate(date);
    onDateRangeChange(startDate, date);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="date"
        onChange={handleStartDateChange}
        className="border rounded p-2"
      />
      <input
        type="date"
        onChange={handleEndDateChange}
        className="border rounded p-2"
      />
      <button
        onClick={onPrint}
        className="bg-blue-500 text-white rounded p-2"
      >
        Print
      </button>
    </div>
  );
};

export default DateRangePicker;
