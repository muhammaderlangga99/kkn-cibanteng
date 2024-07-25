"use client"

import { ColumnDef } from "@tanstack/react-table"
import { IconLocationFill } from '@irsyadadl/paranoid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


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
        accessorKey: "alamat",
        header: "Alamat",
        cell: ({ row }) => {
            const alamat = row.getValue("alamat") as string;
            return <p className="w-36">{alamat}</p>
        }
    },
    {
        accessorKey: "link",
        header: "Lokasi",
        cell: ({ row }) => {
            const link = row.getValue("link") as string;
            const alamat = row.getValue("alamat") as string;
            return (
                <a href={link} className="bg-zinc-200 dark:text-white dark:bg-zinc-800 px-3 md:px-2 py-1.5 shadow-lg flex justify-center md:inline-block rounded-full">
                    <IconLocationFill className="size-4 inline-block mr-1" />gmaps</a>
            );
        },
        // bungkus isi cell dengan tag <a> untuk membuat link
    },
    {
        accessorKey: "kk",
        header: "Penghuni",
        cell: ({ row }) => {
            const kk = row.getValue("kk") as string;
            return <p className="w-36 md:w-auto">{kk}</p>
        }
    },
];
