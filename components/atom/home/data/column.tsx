"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Rumah = {
  id: number,
  alamat: string,
  kk: string,
  link: string,
}

export const columns: ColumnDef<Rumah>[] = [
    {
        accessorKey: "id",
        header: "Nomor",
        cell: ({ row }) => {
            const id = row.getValue("id") as number;
            return <p className="text-center">{id}</p>
        }
    },
    {
        accessorKey: "alamat",
        header: "Alamat",
        cell: ({ row }) => {
            const alamat = row.getValue("alamat") as string;
            return <p className="w-36">{alamat}</p>
        }
    },
    {
        accessorKey: "kk",
        header: "Penghuni",
    },
    {
        accessorKey: "link",
        header: "Link",
        cell: ({ row }) => {
            const link = row.getValue("link") as string;
            return <a href={link} className="text-blue-500">gmaps</a>
        }
        // bungkus isi cell dengan tag <a> untuk membuat link
    
    },
];
