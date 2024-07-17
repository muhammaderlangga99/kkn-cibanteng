import { columns, Rumah } from "./column"
import { DataTable } from "./dataTable"

async function getData(): Promise<Rumah[]> {
  // Fetch data from your API here.
    return [
        {
            id: 1,
            alamat: "Gg. Suka Maju No. 3",
            kk: "Bpk. Budi",
            link: "https://maps.app.goo.gl/JrX2UTEc7KtGrYrJ8",
        },
        {
            id: 2,
            alamat: "Gg. bojong gede No. 3",
            kk: "Bpk. Purnomo",
            link: "https://maps.app.goo.gl/zQS7fysk1mY6Na2r9",
        },
        {
            id: 3,
            alamat: "Gg. tajur halang No. 3",
            kk: "Bpk. Sugi",
            link: "https://maps.app.goo.gl/2Y8m4fZ8n9W6mQmB9",
        }
    ];
}

export default async function DataRumah() {
  const data = await getData()

    return (
        <div className="container mx-auto -translate-y-28 md:-translate-y-0">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
