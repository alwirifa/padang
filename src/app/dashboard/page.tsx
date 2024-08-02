import React from "react";
import Card from "@/components/dashboard/card";
import Table from "./table";

interface TableData {
  no: number;
  tanggalRequest: string;
  namaBarang: string;
  jumlah: number;
  satuan: string;
  action: boolean; // true for checkmark, false for cross
}

const data: TableData[] = [
  { no: 1, tanggalRequest: "07-02-2024", namaBarang: "Laptop", jumlah: 1, satuan: "Device", action: true },
  { no: 2, tanggalRequest: "07-02-2024", namaBarang: "Pulpen", jumlah: 1, satuan: "Pack", action: true },
  { no: 3, tanggalRequest: "07-02-2024", namaBarang: "Kertas", jumlah: 1, satuan: "Rim", action: true },
  { no: 4, tanggalRequest: "07-02-2024", namaBarang: "Tinta", jumlah: 1, satuan: "Box", action: true },
  { no: 5, tanggalRequest: "07-02-2024", namaBarang: "Map", jumlah: 1, satuan: "Pcs", action: true },
  // ... data lainnya
];

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-white h-full w-full p-6 font-sans flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold underline">Dashboard</h1>
        <p className="text-xl">
          Selamat Datang di Sistem Inventory Aset SIPlah
        </p>
      </div>
      <Card />

      <Table data={data} />
    </div>
  );
};

export default DashboardPage;
