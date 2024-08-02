import React from "react";

interface TableData {
  no: number;
  tanggalRequest: string;
  namaBarang: string;
  jumlah: number;
  satuan: string;
  action: boolean; // true for checkmark, false for cross
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-full mt-12">
      <table className="min-w-full bg-white border rounded-xl">
        <thead>
          <tr className="font-bold">
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-bold text-gray-500 uppercase">
              NO
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-bold text-gray-500 uppercase">
              Tanggal Request
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-bold text-gray-500 uppercase">
              Nama Barang
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-bold text-gray-500 uppercase">
              Jumlah
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-bold text-gray-500 uppercase">
              Satuan
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-bold text-gray-500 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-4 whitespace-nowrap">{item.no}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.tanggalRequest}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.namaBarang}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.jumlah}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.satuan}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-4">
              
                  <span className="text-green-500">
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.7153 0.682669L11.5412 23.8244C11.2191 24.2897 10.7353 24.3821 10.3317 24.0108C10.2505 23.9184 10.2505 23.9184 10.169 23.8244L0.751115 9.51625C0.670603 9.42383 0.751115 9.33142 0.751115 9.33142C0.831281 9.239 0.911793 9.33142 0.911793 9.33142L10.7451 17.5905L26.3124 0.310203C26.3926 0.216586 26.5543 0.216586 26.6345 0.310203C26.7153 0.402219 26.7153 0.588652 26.7153 0.682669Z"
                        fill="#11ED8A"
                      />
                    </svg>
                  </span> 
       
                  <span className="text-red-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.26666 1.76007C1.87686 1.14997 2.86626 1.14997 3.47646 1.76007L11.7466 10.0303L20.0167 1.76007C20.6269 1.14997 21.6163 1.14997 22.2265 1.76007C22.8366 2.37027 22.8366 3.35967 22.2265 3.96987L13.9563 12.24L22.2265 20.5101C22.8366 21.1203 22.8366 22.1097 22.2265 22.7199C21.6163 23.33 20.6269 23.33 20.0167 22.7199L11.7466 14.4497L3.47646 22.7199C2.86626 23.33 1.87686 23.33 1.26666 22.7199C0.656557 22.1097 0.656557 21.1203 1.26666 20.5101L9.53686 12.24L1.26666 3.96987C0.656557 3.35967 0.656557 2.37027 1.26666 1.76007Z"
                        fill="#E82525"
                        stroke="#E82525"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span> 
          
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
