import { columns, Rumah } from "./column"
import { DataTable } from "./dataTable"

async function getData(): Promise<Rumah[]> {
  // Fetch data from your API here.
    return [
        {
            id: 1,
            alamat: "RT. 05 RW. 05 No. 1",
            kk: "gudang ijo",
            link: "https://maps.app.goo.gl/5hAipDC74jgsGzWQ7"
        },
        {
            id: 2,
            alamat: "RT. 05 RW. 05 No. 2",
            kk: "umar",
            link: "https://maps.app.goo.gl/H75xZDUaXtLN6jXP6"
        },
        {
            id: 3,
            alamat: "RT. 05 RW. 05 No. 3",
            kk: "inda",
            link: "https://maps.app.goo.gl/ruptiMS1k1zEDnqw7"
        },
        {
            id: 4,
            alamat: "RT. 05 RW. 05 No. 4",
            kk: "suminta",
            link: "https://maps.app.goo.gl/XmBv9ne4cFSAj2ae8"
        },
        {
            id: 5,
            alamat: "RT. 05 RW. 05 No. 5",
            kk: "h.dadang",
            link: "https://maps.app.goo.gl/8AyCiMvzi5z8ZcSw8"
        },
        {
            id: 6,
            alamat: "RT. 05 RW. 05 No. 6",
            kk: "irwan",
            link: "https://maps.app.goo.gl/BypfshktAx3QGUbT9"
        },
        {
            id: 7,
            alamat: "RT. 05 RW. 05 No. 7",
            kk: "inen",
            link: "https://maps.app.goo.gl/etUTnp2gy433N3Rf8"
        },
        {
            id: 8,
            alamat: "RT. 05 RW. 05 No. 8",
            kk: "yohana",
            link: "https://maps.app.goo.gl/eymeNxwfeKvhX4L8A"
        },
        {
            id: 9,
            alamat: "RT. 05 RW. 05 No. 9",
            kk: "dani",
            link: "https://maps.app.goo.gl/RXNJkeLiRSXHFaQFA"
        },
        {
            id: 10,
            alamat: "RT. 05 RW. 05 No. 10",
            kk: "asep abdullah",
            link: "https://maps.app.goo.gl/Dsx8j2bsqqQhazLD7"
        },
        {
            id: 11,
            alamat: "RT. 05 RW. 05 No. 11",
            kk: "limah",
            link: "https://maps.app.goo.gl/JgBLufepExvTMyDJ6"
        },
        {
            id: 12,
            alamat: "RT. 05 RW. 05 No. 12",
            kk: "anam",
            link: "https://maps.app.goo.gl/76qcP9WPLwbh14Gt5"
        },
        {
            id: 13,
            alamat: "RT. 05 RW. 05 No. 13",
            kk: "jumar",
            link: "https://maps.app.goo.gl/wmPFA4dAfvsRkPUT7"
        },
        {
            id: 14,
            alamat: "RT. 05 RW. 05 No. 14",
            kk: "ramadhan sugiharto",
            link: "https://maps.app.goo.gl/1s45bqg7DapJtzfi8"
        },
        {
            id: 15,
            alamat: "RT. 05 RW. 05 No. 15",
            kk: "siswanto",
            link: "https://maps.app.goo.gl/9L5KjEJ7BPruUGUZ8"
        },
        {
            id: 16,
            alamat: "RT. 05 RW. 05 No. 16",
            kk: "pirman",
            link: "https://maps.app.goo.gl/KYDYC3imM37wvjD29"
        },
        {
            id: 17,
            alamat: "RT. 05 RW. 05 No. 17",
            kk: "haji anwar (awang)",
            link: "https://maps.app.goo.gl/KR9Bk7HfEZY24U2T9"
        },
        {
            id: 18,
            alamat: "RT. 05 RW. 05 No. 18",
            kk: "adang",
            link: "https://maps.app.goo.gl/Kqx3TwR7wNvAnRLV6"
        },
        {
            id: 19,
            alamat: "RT. 05 RW. 05 No. 19",
            kk: "nadi",
            link: "https://maps.app.goo.gl/xv5tju8tTpdgVFWRA"
        },
        {
            id: 20,
            alamat: "RT. 05 RW. 05 No. 20",
            kk: "iyam",
            link: "https://maps.app.goo.gl/xv5tju8tTpdgVFWRA"
        },
        {
            id: 21,
            alamat: "RT. 05 RW. 05 No. 21",
            kk: "iis",
            link: "https://maps.app.goo.gl/xv5tju8tTpdgVFWRA"
        },
        {
            id: 22,
            alamat: "RT. 05 RW. 05 No. 22",
            kk: "tata saenan",
            link: "https://maps.app.goo.gl/3SzenpzNPBGmZ55G9"
        },
        {
            id: 23,
            alamat: "RT. 05 RW. 05 No. 23",
            kk: "oyah",
            link: "https://maps.app.goo.gl/Lwph9bva45pwi7Up6"
        },
        {
            id: 24,
            alamat: "RT. 05 RW. 05 No. 24",
            kk: "arip puji santoso",
            link: "https://maps.app.goo.gl/EXQ4Qbd8xeUvVNALA"
        },
        {
            id: 25,
            alamat: "RT. 05 RW. 05 No. 25",
            kk: "ntis r",
            link: "https://maps.app.goo.gl/Lwph9bva45pwi7Up6"
        },
        {
            id: 26,
            alamat: "RT. 05 RW. 05 No. 26",
            kk: "dadi",
            link: "-"
        },
        {
            id: 27,
            alamat: "RT. 05 RW. 05 No. 27",
            kk: "h. aneng",
            link: "https://maps.app.goo.gl/Lwph9bva45pwi7Up6"
        },
        {
            id: 28,
            alamat: "RT. 05 RW. 05 No. 28",
            kk: "rudi iskandar",
            link: "https://maps.app.goo.gl/Lwph9bva45pwi7Up6"
        },
        {
            id: 29,
            alamat: "RT. 05 RW. 05 No. 29",
            kk: "oyah",
            link: "-"
        },
        {
            id: 30,
            alamat: "RT. 05 RW. 05 No. 30",
            kk: "wardi",
            link: "https://maps.app.goo.gl/sGoJaoQaKcnJ6SXi9"
        },
        {
            id: 31,
            alamat: "RT. 05 RW. 05 No. 31",
            kk: "septi nugraha",
            link: "https://maps.app.goo.gl/sGoJaoQaKcnJ6SXi9"
        },
        {
            id: 32,
            alamat: "RT. 05 RW. 05 No. 32",
            kk: "inang",
            link: "https://maps.app.goo.gl/VR7Tk1uYk9zg8NUd8"
        },
        {
            id: 33,
            alamat: "RT. 05 RW. 05 No. 33",
            kk: "eri abdurahman",
            link: "https://maps.app.goo.gl/4JPc6XWKLMsswpFu8"
        },
        {
            id: 34,
            alamat: "RT. 05 RW. 05 No. 34",
            kk: "eka gumelar",
            link: "https://maps.app.goo.gl/aG46S9jXGv66e7nX8"
        },
        {
            id: 35,
            alamat: "RT. 05 RW. 05 No. 35",
            kk: "haji mamad",
            link: "https://maps.app.goo.gl/tS2MsRyC5Wxa5nLq5"
        },
        {
            id: 36,
            alamat: "RT. 05 RW. 05 No. 36",
            kk: "abeng",
            link: "https://maps.app.goo.gl/HYHybt6MafSih1j69"
        },
        {
            id: 37,
            alamat: "RT. 05 RW. 05 No. 37",
            kk: "arip rahman",
            link: "https://maps.app.goo.gl/ZKRurPUeeWUfaTDL9"
        },
        {
            id: 38,
            alamat: "RT. 05 RW. 05 No. 38",
            kk: "ika",
            link: "https://maps.app.goo.gl/Wjfe91XEeSft9sSn8"
        },
        {
            id: 39,
            alamat: "RT. 05 RW. 05 No. 39",
            kk: "majen",
            link: "https://maps.app.goo.gl/qGqEG4bPgDP3LJBL7"
        },
        {
            id: 40,
            alamat: "RT. 05 RW. 05 No. 40",
            kk: "hajah nunung",
            link: "https://maps.app.goo.gl/BwjyWuvdqGfErDJ26"
        },
        {
            id: 41,
            alamat: "RT. 05 RW. 05 No. 41",
            kk: "jojon masta",
            link: "https://maps.app.goo.gl/wiKufp88vgygrKuN9"
        },
        {
            id: 42,
            alamat: "RT. 05 RW. 05 No. 42",
            kk: "h.ugan",
            link: "-"
        },
        {
            id: 43,
            alamat: "RT. 05 RW. 05 No. 43",
            kk: "abil",
            link: "https://maps.app.goo.gl/nWyDwdVJQ38npLq89"
        },
        {
            id: 44,
            alamat: "RT. 05 RW. 05 No. 44",
            kk: "rahi",
            link: "https://maps.app.goo.gl/GD3ZxrSNY3cd5UVf9"
        },
        {
            id: 45,
            alamat: "RT. 05 RW. 05 No. 45",
            kk: "warung aci (usep)",
            link: "https://maps.app.goo.gl/oLE4zXNeSpzxCbjJ8"
        },
        {
            id: 46,
            alamat: "RT. 05 RW. 05 No. 46",
            kk: "dadi",
            link: "https://maps.app.goo.gl/5BD3Vk8i9uBWS5SE6"
        },
        {
            id: 47,
            alamat: "RT. 05 RW. 05 No. 47",
            kk: "sri sumarti",
            link: "https://maps.app.goo.gl/GgTTtdmaaXjjHWJ98"
        },
        {
            id: 48,
            alamat: "RT. 05 RW. 05 No. 48",
            kk: "hani",
            link: "https://maps.app.goo.gl/2q3SyySXCrQDRNaN8"
        },
        {
            id: 49,
            alamat: "RT. 05 RW. 05 No. 49",
            kk: "kontrakan hj. samiran",
            link: "https://maps.app.goo.gl/2jAQUtv4TCqnyktt8"
        },
        {
            id: 50,
            alamat: "RT. 05 RW. 05 No. 50",
            kk: "h saridi",
            link: "https://maps.app.goo.gl/QcLeN78oYbEsr5P69"
        },
        {
            id: 51,
            alamat: "RT. 05 RW. 05 No. 51",
            kk: "dona taufik rahman",
            link: "https://maps.app.goo.gl/QcLeN78oYbEsr5P69"
        },
        {
            id: 52,
            alamat: "RT. 05 RW. 05 No. 52",
            kk: "nanang hermawan",
            link: "https://maps.app.goo.gl/QcLeN78oYbEsr5P69"
        },
        {
            id: 53,
            alamat: "RT. 05 RW. 05 No. 53",
            kk: "asdan",
            link: "https://maps.app.goo.gl/ppgKNu5cadRDTpdcA"
        },
        {
            id: 54,
            alamat: "RT. 05 RW. 05 No. 54",
            kk: "rijal",
            link: "https://maps.app.goo.gl/wBXr3NfphMn3u2Hj7"
        },
        {
            id: 55,
            alamat: "RT. 05 RW. 05 No. 55",
            kk: "suhawan",
            link: "https://maps.app.goo.gl/TPWfhz4s2A1Qodj17"
        },
        {
            id: 56,
            alamat: "RT. 05 RW. 05 No. 56",
            kk: "kontrakan siti & edi",
            link: "https://maps.app.goo.gl/1cYWKauDwZhazs9H6"
        },
        {
            id: 57,
            alamat: "RT. 05 RW. 05 No. 57",
            kk: "maulana",
            link: "-"
        },
        {
            id: 58,
            alamat: "RT. 05 RW. 05 No. 58",
            kk: "agus siswanto",
            link: "https://maps.app.goo.gl/dKT6BEzNJPExv3918"
        },
        {
            id: 59,
            alamat: "RT. 05 RW. 05 No. 59",
            kk: "damanhuli",
            link: "https://maps.app.goo.gl/HjdP3pb5wNqHapgA8"
        },
        {
            id: 60,
            alamat: "RT. 05 RW. 05 No. 60",
            kk: "pesantren",
            link: "https://maps.app.goo.gl/1qaGMbN2tGbuCCMU8"
        },
        {
            id: 61,
            alamat: "RT. 05 RW. 05 No. 61",
            kk: "rohiman adja",
            link: "https://maps.app.goo.gl/H1ZdCDUnLVkE8uwP7"
        },
        {
            id: 62,
            alamat: "RT. 05 RW. 05 No. 62",
            kk: "ahmad nawawi",
            link: "https://maps.app.goo.gl/Grzx2MSdFrfXAgV3A"
        },
        {
            id: 63,
            alamat: "RT. 05 RW. 05 No. 63",
            kk: "kontrakan hj.mimi",
            link: "-"
        },
        {
            id: 64,
            alamat: "RT. 05 RW. 05 No. 64",
            kk: "zein",
            link: "https://maps.app.goo.gl/ctEDNUTLKYgraXQJ7"
        },
        {
            id: 65,
            alamat: "RT. 05 RW. 05 No. 65",
            kk: "rahmat lamusu",
            link: "https://maps.app.goo.gl/XnwxZkotXZS2zGx96"
        },
        {
            id: 66,
            alamat: "RT. 05 RW. 05 No. 66",
            kk: "rahmat hidayat",
            link: "https://maps.app.goo.gl/LLZUd9yoZL6DEGbS7"
        },
        {
            id: 67,
            alamat: "RT. 05 RW. 05 No. 67",
            kk: "agung wibowo",
            link: "https://maps.app.goo.gl/sN7KKJFde64y4dez9"
        },
        {
            id: 68,
            alamat: "RT. 05 RW. 05 No. 68",
            kk: "asep suhendra",
            link: "https://maps.app.goo.gl/pYvZoYmGT2jXyb4J9"
        },
        {
            id: 69,
            alamat: "RT. 05 RW. 05 No. 69",
            kk: "rizki yulianti",
            link: "https://maps.app.goo.gl/dmFafK25W1JXZYJZA"
        },
        {
            id: 70,
            alamat: "RT. 05 RW. 05 No. 70",
            kk: "tukang besi hj. njen",
            link: "https://maps.app.goo.gl/JaQ1USQCb2kC2sQW8"
        },
        {
            id: 71,
            alamat: "RT. 05 RW. 05 No. 71",
            kk: "idan",
            link: "https://maps.app.goo.gl/aaPjd3esDoz8nWTE6"
        },
        {
            id: 72,
            alamat: "RT. 05 RW. 05 No. 72",
            kk: "irin",
            link: "https://maps.app.goo.gl/bJJdT4cydmzZv7sCA"
        },
        {
            id: 73,
            alamat: "RT. 05 RW. 05 No. 73",
            kk: "iwan",
            link: "https://maps.app.goo.gl/oEKN2D4rM2FR8KZP9"
        },
        {
            id: 74,
            alamat: "RT. 05 RW. 05 No. 74",
            kk: "cici",
            link: "https://maps.app.goo.gl/zbcvsHrLoBm37jfg7"
        },
        {
            id: 75,
            alamat: "RT. 05 RW. 05 No. 75",
            kk: "rudi",
            link: "https://maps.app.goo.gl/Pbdk6uZ9hqtVYfx49"
        },
        {
            id: 76,
            alamat: "RT. 05 RW. 05 No. 76",
            kk: "ridwan saidi",
            link: "https://maps.app.goo.gl/1ArkpF38fRQyQvSC6"
        },
        {
            id: 77,
            alamat: "RT. 05 RW. 05 No. 77",
            kk: "naing saputra",
            link: "https://maps.app.goo.gl/HjKSKZcgMjW7GvYA7"
        },
        {
            id: 78,
            alamat: "RT. 05 RW. 05 No. 78",
            kk: "udin wahrudin",
            link: "https://maps.app.goo.gl/7tCibSo3YcfBDmwt9"
        },
        {
            id: 79,
            alamat: "RT. 05 RW. 05 No. 79",
            kk: "otong suwardi",
            link: "https://maps.app.goo.gl/MX9kTp8Xx3RmXFs89"
        },
        {
            id: 80,
            alamat: "RT. 05 RW. 05 No. 80",
            kk: "h. narimin",
            link: "https://maps.app.goo.gl/Q8xGuybTGhBtWfEv6"
        },
        {
            id: 81,
            alamat: "RT. 05 RW. 05 No. 81",
            kk: "neneng juarti",
            link: "https://maps.app.goo.gl/Nfgkg9nSnsNEu1ML9"
        },
        {
            id: 82,
            alamat: "RT. 05 RW. 05 No. 82",
            kk: "majlis ta'lim al barokah",
            link: "-"
        },
        {
            id: 83,
            alamat: "RT. 05 RW. 05 No. 83",
            kk: "naib",
            link: "https://maps.app.goo.gl/W9jMpywvmjoH7Ey58"
        },
        {
            id: 84,
            alamat: "RT. 05 RW. 05 No. 84",
            kk: "adih",
            link: "https://maps.app.goo.gl/61XDFDnNmjRBvKBP8"
        },
        {
            id: 85,
            alamat: "RT. 05 RW. 05 No. 85",
            kk: "khoerul anwar sadat",
            link: "https://maps.app.goo.gl/DhMYNNTSqCo4RAXj7"
        },
        {
            id: 86,
            alamat: "RT. 05 RW. 05 No. 86",
            kk: "haji mimi aminah/haji naang",
            link: "https://maps.app.goo.gl/S9HTXXSdyWQYhUtT7"
        },
        {
            id: 87,
            alamat: "RT. 05 RW. 05 No. 87",
            kk: "dede mulyana",
            link: "-"
        },
        {
            id: 88,
            alamat: "RT. 05 RW. 05 No. 88",
            kk: "agus supendi",
            link: "https://maps.app.goo.gl/LczNbmh9nxThmvQh7"
        },
        {
            id: 89,
            alamat: "RT. 05 RW. 05 No. 89",
            kk: "amin iskandar rt 05",
            link: "https://maps.app.goo.gl/qtvrMN4rFrqsvBP69"
        },
        {
            id: 90,
            alamat: "RT. 05 RW. 05 No. 90",
            kk: "aping",
            link: "https://maps.app.goo.gl/yqqdfVC1Ay4ShPVN7"
        },
        {
            id: 91,
            alamat: "RT. 05 RW. 05 No. 91",
            kk: "anan",
            link: "https://maps.app.goo.gl/ZE9eRpRDCcTXno1k8"
        },
        {
            id: 92,
            alamat: "RT. 05 RW. 05 No. 92",
            kk: "darsim",
            link: "https://maps.app.goo.gl/YCGwCZgUXuVtsq4E8"
        },
        {
            id: 93,
            alamat: "RT. 05 RW. 05 No. 93",
            kk: "suferi",
            link: "https://maps.app.goo.gl/YCGwCZgUXuVtsq4E8"
        },
        {
            id: 94,
            alamat: "RT. 05 RW. 05 No. 94",
            kk: "acang supriyadi",
            link: "https://maps.app.goo.gl/AiMypn7DMwpzHqD26"
        }
    ];
};

export default async function DataRumah() {
  const data = await getData()

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
