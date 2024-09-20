const mongoose = require('mongoose');
const { Book } = require('./models/bookModel');

mongoose.connect('mongodb://localhost:27017/online-library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

async function addDescriptions() {
    const descriptions = [
        {
            naslov: "Tunel",
            autor: ["Ernesto Sabato"],
            izdavac: "Laguna",
            godinaIzdanja: 1948,
            zanr: "Roman",
            isbn: "9788677013937",
            signatura: [
                { inventarskiBroj: "01000632010", status: "slobodan" },
                { inventarskiBroj: "01000632011", status: "slobodan" }
            ],
            fotografija: "https://delfi.rs/_img/artikli/2019/03/tunel_vv.jpg",
            opis: "Roman 'Tunel' Ernesta Sabata je priča o opsesiji, ljubomori i mračnim dubinama ljudske psihe. Protagonista, slikar Huan Pablo Kastel, priznaje ubistvo žene koju je voleo i kroz introspektivnu priču vodi nas kroz složene emocije i psihološke konflikte. Sabato istražuje granice ljudske svesti, krivice i ljubavi, dok se Kastel suočava sa svojom patološkom potrebom za kontrolom. 'Tunel' je majstorski prikaz unutrašnje drame jednog čoveka, koji traži smisao u svetu koji mu stalno izmiče."
        },
        {
            naslov: "O junacima i grobovima",
            autor: ["Ernesto Sabato"],
            izdavac: "Laguna",
            godinaIzdanja: 1961,
            zanr: "Roman",
            isbn: "9788677013938",
            signatura: [
                { inventarskiBroj: "01000632012", status: "slobodan" },
                { inventarskiBroj: "01000632013", status: "slobodan" }
            ],
            fotografija: "https://delfi.rs/_img/artikli/2018/09/o_junacima_i_grobovima_vv.jpg",
            opis: "Ovaj roman Ernesta Sabata je epska saga o ljubavi, gubitku i identitetu, smeštena u kompleksnu društvenu i političku pozadinu Argentine. Kroz priče o Alehandri, Martinu i ostalim likovima, Sabato prepliće lične drame sa širim istorijskim događajima. Roman istražuje teme straha, moći i moralne dileme, dok istovremeno zadire u mračne aspekte nacionalnog identiteta i ljudske prirode. 'O junacima i grobovima' je slojevito delo koje kombinuje filozofske rasprave, psihološku analizu i istorijske reflekcije."
        },
        {
            naslov: "Alhemičar",
            autor: ["Paulo Koeljo"],
            izdavac: "Laguna",
            godinaIzdanja: 1988,
            zanr: "Filozofski roman",
            isbn: "9788677013939",
            signatura: [
                { inventarskiBroj: "01000632014", status: "slobodan" },
                { inventarskiBroj: "01000632015", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/2313/alhemicar-paulo_koeljo_v.jpg",
            opis: "'Alhemičar' je jedno od najpoznatijih dela Paula Koelja, koje prati putovanje mladog pastira Santjaga u potrazi za blagom. Njegovo putovanje nije samo fizičko, već i duhovno, i vodi ga kroz pustinje i gradove do samospoznaje. Koeljo kroz jednostavan, ali dubok stil pisanja istražuje teme sudbine, ljubavi i životnog smisla, te nas podseća da su snovi ostvarivi samo ako ih hrabro sledimo. 'Alhemičar' je knjiga koja inspiriše čitaoce širom sveta da prate svoje srce i pronađu sopstveni put ka sreći."
        },
        {
            naslov: "Jedanaest minuta",
            autor: ["Paulo Koeljo"],
            izdavac: "Laguna",
            godinaIzdanja: 2003,
            zanr: "Roman",
            isbn: "9788677013940",
            signatura: [
                { inventarskiBroj: "01000632016", status: "slobodan" },
                { inventarskiBroj: "01000632017", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/2610/jedanaest_minuta-paulo_koeljo_v.jpg",
            opis: "Kroz priču o mladoj Brazilki Mariji, 'Jedanaest minuta' Paula Koelja istražuje granice ljubavi i telesnosti. Marija napušta svoj rodni grad u potrazi za avanturom i boljim životom, ali završava kao prostitutka u Švajcarskoj. Kroz njeno putovanje, Koeljo postavlja pitanja o prirodi ljubavi, strasti i unutrašnjeg mira. Ovaj roman, iako često provokativan, osvetljava važnost samospoznaje i duhovnog buđenja u svetu punom iskušenja."
        },
        {
            naslov: "Nada",
            autor: ["Ante Tomić"],
            izdavac: "Laguna",
            godinaIzdanja: 2015,
            zanr: "Roman",
            isbn: "9788677013941",
            signatura: [
                { inventarskiBroj: "01000632018", status: "slobodan" },
                { inventarskiBroj: "01000632019", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/6308/nada-ante_tomic_v.jpg",
            opis: "Roman 'Nada' Ante Tomića je topla i emotivna priča o čoveku koji se suočava sa gubitkom, samoćom i neizvesnošću. Glavni junak, seoski učitelj, bori se da pronađe smisao u svetu koji se čini hladnim i nemilosrdnim. Kroz dirljive i često humoristične prizore svakodnevnog života, Tomić istražuje teme ljubavi, prijateljstva i nade, ukazujući na to da se u najtežim trenucima oslanjamo na jednostavne radosti života."
        },
        {
            naslov: "Estoril",
            autor: ["Dejan Tiago Stanković"],
            izdavac: "Laguna",
            godinaIzdanja: 2018,
            zanr: "Roman",
            isbn: "9788677013942",
            signatura: [
                { inventarskiBroj: "01000632020", status: "slobodan" },
                { inventarskiBroj: "01000632021", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/5409/estoril-dejan_tiago-stankovic_v.jpg",
            opis: "'Estoril' Dejana Tiaga Stankovića je fascinantan istorijski roman smešten u portugalski hotel tokom Drugog svetskog rata. Kroz priče gostiju hotela, autor nas vodi kroz mrežu špijunaže, diplomata, umetnika i izbeglica koji prolaze kroz Portugal u ovom turbulentnom periodu. 'Estoril' je roman o preživljavanju, ljubavi i slučajnim susretima koji mogu promeniti tok istorije. Stanković majstorski kombinuje fikciju i stvarne istorijske događaje, stvarajući bogatu i dinamičnu priču."
        },
        {
            naslov: "Kuća noći",
            autor: ["Ju Nesbe"],
            izdavac: "Laguna",
            godinaIzdanja: 2020,
            zanr: "Triler",
            isbn: "9788677013943",
            signatura: [
                { inventarskiBroj: "01000632022", status: "slobodan" },
                { inventarskiBroj: "01000632023", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/6212/kuca_noci-ju_nesbe_v.jpg",
            opis: "U 'Kući noći', Ju Nesbe donosi još jednu napetu priču punu misterija i iznenađenja. Detektiv Hari Hule se suočava sa novim slučajem koji uključuje mračnu i zagonetnu prošlost jedne porodice. Nesbe kroz složene likove i preokrete istražuje tamne strane ljudske prirode, dok nas vodi kroz mračne ulice i senke Osla. 'Kuća noći' je još jedan dokaz Nesbeovog majstorstva u stvaranju trilera koji čitaoce drže na ivici do samog kraja."
        },
        {
            naslov: "Slepi miš",
            autor: ["Ju Nesbe"],
            izdavac: "Laguna",
            godinaIzdanja: 1997,
            zanr: "Triler",
            isbn: "9788677013944",
            signatura: [
                { inventarskiBroj: "01000632024", status: "slobodan" },
                { inventarskiBroj: "01000632025", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/2875/slepi_mis-ju_nesbe_v.jpg",
            opis: "'Slepi miš' je prvi roman u serijalu o detektivu Hariju Huleu. Radnja se odvija u Australiji, gde Hari istražuje ubistvo norveške državljanke. Kroz misteriozne zaplete i neizvesne trenutke, Nesbe nas uvlači u svet kriminala, zavera i mračnih tajni. Ovaj roman je početak fascinantnog serijala koji je osvojio srca čitalaca širom sveta, a Harija Hulea postavio kao jednog od najzanimljivijih detektiva savremene literature."
        },
        {
            naslov: "Slonovi pamte",
            autor: ["Agata Kristi"],
            izdavac: "Laguna",
            godinaIzdanja: 1972,
            zanr: "Misterija",
            isbn: "9788677013945",
            signatura: [
                { inventarskiBroj: "01000632026", status: "slobodan" },
                { inventarskiBroj: "01000632027", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/4163/slonovi_pamte-agata_kristi_s.jpg",
            opis: "Roman 'Slonovi pamte' Agate Kristi donosi još jedan briljantan slučaj Herkula Poaroa. Ovog puta, Poaro istražuje stari slučaj dvostrukog ubistva, ali svedoci događaja su ljudi koji su bili prisutni pre mnogo godina. Agata Kristi kroz ovaj roman postavlja pitanja o sećanju i istini, dok Poaro traga za odgovorima među ljudima čija sećanja možda nisu tako pouzdana. Ovo je jedna od njenih kasnijih misterija, ali i dalje donosi napetost i intrigantne zaplete koji su zaštitni znak njenog pisanja."
        },
        {
            naslov: "I ne osta nijedan",
            autor: ["Agata Kristi"],
            izdavac: "Laguna",
            godinaIzdanja: 1939,
            zanr: "Misterija",
            isbn: "9788677013946",
            signatura: [
                { inventarskiBroj: "01000632028", status: "slobodan" },
                { inventarskiBroj: "01000632029", status: "slobodan" }
            ],
            fotografija: "https://www.laguna.rs/_img/korice/4205/i_ne_osta_nijedan-agata_kristi_v.jpg",
            opis: "'I ne osta nijedan' je jedan od najpoznatijih romana Agate Kristi. Deset stranaca pozvano je na izolovano ostrvo, gde se suočavaju sa svojim tajnama i prošlim grehovima. Kako ih misteriozni ubica eliminiše jednog po jednog, preživeli moraju otkriti ko je među njima ubica pre nego što i sami postanu žrtve. Kristi majstorski gradi napetost i paranoju, stvarajući nezaboravnu priču koja je do danas ostala jedan od najvažnijih klasika detektivske literature."
        }
    ];

    try {
        await Book.insertMany(descriptions);
        console.log('Books added with descriptions successfully!');
        mongoose.disconnect();
    } catch (err) {
        console.error('Failed to insert books:', err);
    }
}

addDescriptions();
