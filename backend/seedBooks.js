
const mongoose = require('mongoose');

const { Book } = require('./models/bookModel');

mongoose.connect('mongodb://localhost:27017/online-library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const books = [
    {
        naslov: "Idiot",
        autor: ["Fjodor Mihailovič Dostojevski"],
        izdavac: "Laguna",
        godinaIzdanja: 1869,
        zanr: "Fikcija",
        isbn: "9788677013931",
        signatura: [
            { inventarskiBroj: "01000632004", status: "slobodan" },
            { inventarskiBroj: "01000632005", status: "slobodan" }
        ],
        fotografija: "https://www.laguna.rs/_img/korice/4432/idiot_i_tom-fjodor_mihailovic_dostojevski_v.jpg"
    },
    {
        naslov: "Rat i Mir",
        autor: ["Lav Nikolajevič Tolstoj"],
        izdavac: "Vulkan",
        godinaIzdanja: 1869,
        zanr: "Fikcija",
        isbn: "9788677013932",
        signatura: [
            { inventarskiBroj: "01000632006", status: "slobodan" },
            { inventarskiBroj: "01000632007", status: "slobodan" }
        ],
        fotografija: "https://delfi.rs/_img/artikli/2022/09/rat_i_mir_ii_vv.jpg"
    },
    {
        naslov: "Zavera budala",
        autor: ["Džon Kenedi Tul"],
        izdavac: "Laguna",
        godinaIzdanja: 1980,
        zanr: "Satira",
        isbn: "9788677013933",
        signatura: [
            { inventarskiBroj: "01000632008", status: "slobodan" },
            { inventarskiBroj: "01000632009", status: "slobodan" }
        ],
        fotografija: "https://www.laguna.rs/_img/korice/4488/zavera_budala-dzon_kenedi_tul_v.jpg"
    },
    {
        naslov: "Noćna škola",
        autor: ["K. Dž. Doerti"],
        izdavac: "Laguna",
        godinaIzdanja: 2013,
        zanr: "Triler",
        isbn: "9788677013934",
        signatura: [
            { inventarskiBroj: "01000632034", status: "slobodan" },
            { inventarskiBroj: "01000632056", status: "slobodan" }
        ],
        fotografija: "https://www.laguna.rs/_img/korice/2086/nocna_skola-k_dz_doerti_v.jpg"
    },
    {
        naslov: "Na putu",
        autor: ["Džek Keruak"],
        izdavac: "Vulkan",
        godinaIzdanja: 1957,
        zanr: "Roman",
        isbn: "9788677013935",
        signatura: [
            { inventarskiBroj: "010006320086", status: "slobodan" },
            { inventarskiBroj: "010006320187", status: "slobodan" }
        ],
        fotografija: "https://delfi.rs/_img/artikli/2015/10/na_putu_vv.jpg"
    },
    {
        naslov: "Stranac",
        autor: ["Alber Kami"],
        izdavac: "Vulkan",
        godinaIzdanja: 1942,
        zanr: "Egzistencijalizam",
        isbn: "9788677013936",
        signatura: [
            { inventarskiBroj: "01000632041", status: "slobodan" },
            { inventarskiBroj: "01000632062", status: "slobodan" }
        ],
        fotografija: "https://www.knjizare-vulkan.rs/files/images/slike_proizvoda/320228.jpg"
    }
];

async function seedBooks() {
    try {
        await Book.insertMany(books);
        console.log('Books added to the database successfully!');
        mongoose.disconnect(); 
    } catch (err) {
        console.error('Failed to insert books:', err);
    }
}

seedBooks();
