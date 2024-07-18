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
            alamat: "Gg. bojong gede No. 9",
            kk: "Bpk. Purnomo",
            link: "https://maps.app.goo.gl/zQS7fysk1mY6Na2r9",
        },
        {
            id: 3,
            alamat: "Gg. tajur halang No. 4",
            kk: "Bpk. Sugi",
            link: "https://maps.app.goo.gl/2Y8m4fZ8n9W6mQmB9",
        },
        {
            id: 4,
            alamat: "Gg. Warung Jambu No. 2",
            kk: "Bpk. Fajar",
            link: "https://maps.app.goo.gl/rU7VXSJd5QmjMDc17",
        },
        {
            id: 5,
            alamat: "Gg. Cilangkap No. 1",
            kk: "Bpk. Umar",
            link: "https://maps.app.goo.gl/2RRZug6XWzDNAkaA7",
        },
        {
            id: 6,
            alamat: "Gg. Rawa Buntu No. 3",
            kk: "Bpk. Hadi",
            link: "https://maps.app.goo.gl/RRVwGdjZFC5omfjW9",   
        }
    ];
}

export default async function DataRumah() {
  const data = await getData()

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
