"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnFiltersState,
    getFilteredRowModel
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import React from "react"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    })

    const placeholders = [
        "Cari...",
        "Suka Maju No. 3",
        "bojong gede No. 9",
        "tajur halang No. 4",
        "Warung Jambu No. 2",
        "Cilangkap No. 1",
        "Rawa Buntu No. 3"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(event) => {
                    table.getColumn("id")?.setFilterValue(event.target.value)
                }}
                onSubmit={onSubmit}
            />
            <div className="mt-5 rounded-xl overflow-hidden">
                <Table className="rounded-xl dark:bg-zinc-900 bg-zinc-100">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="capitalize">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Tidak ada data
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
