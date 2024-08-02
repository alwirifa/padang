
import BarangMasukTable from "@/components/dashboard/barang-masuk/table";
import Link from "next/link";
import React from "react";


const data = [
  {
    no: 1,
    tanggalMasuk: "07-01-2024",
    namaBarang: "Laptop",
    namaSupplier: "PT. Maju Perkasa Abadi",
    jumlahMasuk: 5,
    satuan: "Device",
  },
  {
    no: 2,
    tanggalMasuk: "10-04-2024",
    namaBarang: "Pulpen",
    namaSupplier: "PT. Pantero Selaras",
    jumlahMasuk: 15,
    satuan: "Pack",
  },
  {
    no: 3,
    tanggalMasuk: "05-05-2024",
    namaBarang: "Kertas",
    namaSupplier: "CV. Sumber Baru",
    jumlahMasuk: 10,
    satuan: "Rim",
  },
  {
    no: 4,
    tanggalMasuk: "15-06-2024",
    namaBarang: "Tinta",
    namaSupplier: "Toko Unggul Jaya",
    jumlahMasuk: 3,
    satuan: "Box",
  },
  {
    no: 5,
    tanggalMasuk: "08-02-2024",
    namaBarang: "Map",
    namaSupplier: "CV. Perdana Mentari",
    jumlahMasuk: 20,
    satuan: "Pcs",
  },
];

const UsersPage: React.FC = () => {
  return (
    <div className="bg-white h-full w-full font-sans flex flex-col">
      <div className="w-full flex justify-between items-center">
        <Link
          href={"/dashboard"}
          className="flex items-center justify-center gap-2"
        >
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9748 14.1407H8.79205L13.4079 9.47738C13.8015 9.07968 13.9874 8.60528 13.9874 8.08444C13.9874 7.0912 13.1751 6.06567 11.9892 6.06567C11.4586 6.06567 10.9961 6.26048 10.6104 6.65111L2.65957 14.6838C2.33187 15.0148 1.99817 15.4236 1.99817 16.1595C1.99817 16.8953 2.27692 17.2496 2.64359 17.6201L10.6104 25.6678C10.9961 26.0585 11.4586 26.2533 11.9892 26.2533C13.1761 26.2533 13.9874 25.2278 13.9874 24.2345C13.9874 23.7137 13.8015 23.2393 13.4079 22.8416L8.79205 18.1782H27.9748C29.0778 18.1782 29.973 17.2738 29.973 16.1595C29.973 15.0451 29.0778 14.1407 27.9748 14.1407Z"
              fill="black"
            />
          </svg>

          <p className="font-bold">Dashboard</p>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center justify-center gap-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.8678 2.34973C7.52554 2.34973 2.37817 7.55006 2.37817 13.9576C2.37817 20.3652 7.52554 25.5655 13.8678 25.5655C20.2101 25.5655 25.3575 20.3652 25.3575 13.9576C25.3575 7.55006 20.2101 2.34973 13.8678 2.34973ZM18.4637 15.1184H15.0168V18.6008C15.0168 19.2392 14.4998 19.7616 13.8678 19.7616C13.2359 19.7616 12.7189 19.2392 12.7189 18.6008V15.1184H9.27196C8.64003 15.1184 8.123 14.596 8.123 13.9576C8.123 13.3192 8.64003 12.7968 9.27196 12.7968H12.7189V9.31446C12.7189 8.67603 13.2359 8.15367 13.8678 8.15367C14.4998 8.15367 15.0168 8.67603 15.0168 9.31446V12.7968H18.4637C19.0956 12.7968 19.6126 13.3192 19.6126 13.9576C19.6126 14.596 19.0956 15.1184 18.4637 15.1184Z"
              fill="#1D1D1D"
            />
          </svg>

          <p className="font-bold underline">Barang Masuk</p>
        </Link>
      </div>
      <BarangMasukTable data={data} />
    </div>
  );
};

export default UsersPage;
