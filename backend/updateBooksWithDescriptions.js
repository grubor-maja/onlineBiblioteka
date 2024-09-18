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
            isbn: "9788677013931",
            opis: "Roman 'Idiot' Fjodora Mihailoviča Dostojevskog prati život kneza Miškina, čoveka izuzetne dobrote i naivnosti, koji se vraća u Rusiju nakon dugog lečenja u Švajcarskoj. Miškinova nevinost i iskrenost izazivaju šok i podozrenje kod okoline, što vodi u niz tragičnih događaja. Ovo delo je duboka i kompleksna analiza ljudske prirode, ljubavi i moralnih dilema, u kojoj Dostojevski postavlja večna pitanja o pravdi, sreći i ljudskom postojanju. Kroz složene i emocionalno bogate likove, pisac nas vodi kroz svet strasti, ponosa, ljubomore i iskušenja."
        },
        {
            isbn: "9788677013932",
            opis: "U epskom romanu 'Rat i mir', Lav Nikolajevič Tolstoj opisuje sudbine plemićkih porodica u doba Napoleonovih ratova. Kroz bogato isprepletane priče likova kao što su grof Bezuhov, knez Andrej Bolkonski i Nataša Rostova, Tolstoj stvara živopisnu sliku života u Rusiji u 19. veku. Roman istražuje teme ljubavi, gubitka, časti i slobode, postavljajući pitanja o smislu istorije, rata i sudbine. Ovaj monumentalni književni poduhvat nije samo priča o ratu i miru, već i duboka filozofska rasprava o ljudskom duhu, odgovornosti i borbi za sreću."
        },
        {
            isbn: "9788677013933",
            opis: "Upoznajte Ignacija Ž. Rajlija, intelektualca nezainteresovanog za ljubav i zaposlenje, plemenitog krstaša u ratu sa američkim snom. Običnim građanima Nju Orleansa čini se da je momak pomerio pameću. Ignacije se ne obazire na to. Korpulentni tridesetogodišnjak živi kod majke i posvećeno zapisuje svoj opus magnum u školskim sveskama koje krije ispod kreveta. Ali mama ima neprijatno iznenađenje za njega: Ignacije mora da pronađe posao. Ne posustavši pred izazovom, on novo zaposlenje koristi da nastavi svoju misiju protiv modernosti, rada, neznanja i poroka – a sada je naoružan gusarskom kapom i kolicima s hot-dogovima!"
        },
        {
            isbn: "9788677013934",
            opis: "Knjiga 'Noćna škola' autora K. Dž. Doertija vodi nas kroz misterioznu priču o mladoj Aliji koja ulazi u tajanstveni svet noćne škole. Naizgled obična škola krije mračne tajne i opasne ljude, a Alija ubrzo shvata da je njena budućnost neizvesna. Napetost raste dok otkriva zavere i laži koje prete da unište njen život i živote onih koje voli. 'Noćna škola' je knjiga puna preokreta, gde ništa nije onako kako izgleda. Autor vešto istražuje teme identiteta, poverenja i hrabrosti u suočavanju sa nepoznatim opasnostima."
        },
        {
            isbn: "9788677013935",
            opis: "'Na putu' Džeka Keruaka je kultni roman koji je postao manifest Bit generacije. Knjiga prati avanture Sal Paradiza i Dina Morijatija, dvojice prijatelja koji putuju američkim drumovima u potrazi za slobodom, smislom i autentičnim životnim iskustvima. Kroz haotična putovanja, divlje zabave i introspektivne trenutke, Keruak istražuje teme pobune, egzistencijalne nesigurnosti i strastvene žeđi za životom. Stil pisanja u romanu, sa brzim i ritmičkim rečenicama, odražava duh slobode i nemira, čineći ga jednim od najuticajnijih dela 20. veka."
        },
        {
            isbn: "9788677013936",
            opis: "'Stranac' Alberta Kamija je roman koji se bavi apsurdom i besmislom ljudskog postojanja. Glavni junak, Merso, živi jednostavnim i ravnodušnim životom, nesposoban da se uklopi u društvene norme i očekivanja. Nakon što nenamerno ubije čoveka, Merso biva uhapšen i suočen sa sudskim sistemom koji ga osuđuje ne zbog njegovog zločina, već zbog njegove indiferentnosti i nesposobnosti da izrazi kajanje. Kroz ovaj roman, Kami istražuje filozofiju apsurda, izazivajući nas da preispitamo svoja uverenja o moralu, pravdi i smislu života."
        }
    ];

    try {
        for (const desc of descriptions) {
            await Book.updateMany(
                { isbn: desc.isbn },
                { $set: { opis: desc.opis } }
            );
        }
        console.log('Books updated with descriptions successfully!');
        mongoose.disconnect();
    } catch (err) {
        console.error('Failed to update books:', err);
    }
}

addDescriptions();
