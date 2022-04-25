setTimeout(() => onload());

function onload() {
    outputCatBreeds();
}

function outputCatBreeds() {
    var el = document.getElementById('cat-breeds');
    var firstCat = catBreeds[0];
    el.innerHTML = `
<div class="cat-card">
    <div class="cat-card--row">
        <span class="cat-card--strong">Name:</span> 
        ${firstCat.name}
    </div>
    <div class="cat-card--row">
        <span class="cat-card--strong">Origin:</span> 
        ${firstCat.origin}
    </div>
    <div class="cat-card--row">
        <span class="cat-card--strong">Life span:</span>
        ${firstCat.life_span}
    </div>
    <div class="cat-card--link">
        <a href="${firstCat.wikipedia_url}">More information</a>
    </div>
</div>`;
    console.log(catBreeds);
}

var catBreeds = [
    {
        "name": "Abyssinian",
        "origin": "Egypt",
        "life_span": "14 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
    },
    {
        "name": "Aegean",
        "origin": "Greece",
        "life_span": "9 - 12",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Aegean_cat"
    },
    {
        "name": "American Bobtail",
        "origin": "United States",
        "life_span": "11 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/American_Bobtail"
    },
    {
        "name": "American Curl",
        "origin": "United States",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/American_Curl"
    },
    {
        "name": "American Shorthair",
        "origin": "United States",
        "life_span": "15 - 17",
        "wikipedia_url": "https://en.wikipedia.org/wiki/American_Shorthair"
    },
    {
        "name": "American Wirehair",
        "origin": "United States",
        "life_span": "14 - 18",
        "wikipedia_url": "https://en.wikipedia.org/wiki/American_Wirehair"
    },
    {
        "name": "Arabian Mau",
        "origin": "United Arab Emirates",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Arabian_Mau"
    },
    {
        "name": "Australian Mist",
        "origin": "Australia",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Australian_Mist"
    },
    {
        "name": "Balinese",
        "origin": "United States",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Balinese_(cat)"
    },
    {
        "name": "Bambino",
        "origin": "United States",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Bambino_cat"
    },
    {
        "name": "Bengal",
        "origin": "United States",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_(cat)"
    },
    {
        "name": "Birman",
        "origin": "France",
        "life_span": "14 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Birman"
    },
    {
        "name": "Bombay",
        "origin": "United States",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Bombay_(cat)"
    },
    {
        "name": "British Longhair",
        "origin": "United Kingdom",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/British_Longhair"
    },
    {
        "name": "British Shorthair",
        "origin": "United Kingdom",
        "life_span": "12 - 17",
        "wikipedia_url": "https://en.wikipedia.org/wiki/British_Shorthair"
    },
    {
        "name": "Burmese",
        "origin": "Burma",
        "life_span": "15 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Burmese_(cat)"
    },
    {
        "name": "Burmilla",
        "origin": "United Kingdom",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Burmilla"
    },
    {
        "name": "California Spangled",
        "origin": "United States",
        "life_span": "10 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/California_Spangled"
    },
    {
        "name": "Chantilly-Tiffany",
        "origin": "United States",
        "life_span": "14 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Chantilly-Tiffany"
    },
    {
        "name": "Chartreux",
        "origin": "France",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Chartreux"
    },
    {
        "name": "Chausie",
        "origin": "Egypt",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Chausie"
    },
    {
        "name": "Cheetoh",
        "origin": "United States",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_cat#Cheetoh"
    },
    {
        "name": "Colorpoint Shorthair",
        "origin": "United States",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Colorpoint_Shorthair"
    },
    {
        "name": "Cornish Rex",
        "origin": "United Kingdom",
        "life_span": "11 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Cornish_Rex"
    },
    {
        "name": "Cymric",
        "origin": "Canada",
        "life_span": "8 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Cymric_(cat)"
    },
    {
        "name": "Cyprus",
        "origin": "Cyprus",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Cyprus_cat"
    },
    {
        "name": "Devon Rex",
        "origin": "United Kingdom",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Devon_Rex"
    },
    {
        "name": "Donskoy",
        "origin": "Russia",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Donskoy_(cat)"
    },
    {
        "name": "Dragon Li",
        "origin": "China",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Dragon_Li"
    },
    {
        "name": "Egyptian Mau",
        "origin": "Egypt",
        "life_span": "18 - 20",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Egyptian_Mau"
    },
    {
        "name": "European Burmese",
        "origin": "Burma",
        "life_span": "10 - 15"
    },
    {
        "name": "Exotic Shorthair",
        "origin": "United States",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Exotic_Shorthair"
    },
    {
        "name": "Havana Brown",
        "origin": "United Kingdom",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Havana_Brown"
    },
    {
        "name": "Himalayan",
        "origin": "United States",
        "life_span": "9 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Himalayan_(cat)"
    },
    {
        "name": "Japanese Bobtail",
        "origin": "Japan",
        "life_span": "14 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Japanese_Bobtail"
    },
    {
        "name": "Javanese",
        "origin": "United States",
        "life_span": "10 - 12",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Javanese_cat"
    },
    {
        "name": "Khao Manee",
        "origin": "Thailand",
        "life_span": "10 - 12",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Khao_Manee"
    },
    {
        "name": "Korat",
        "origin": "Thailand",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Korat"
    },
    {
        "name": "Kurilian",
        "origin": "Russia",
        "life_span": "15 - 20",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Kurilian_Bobtail"
    },
    {
        "name": "LaPerm",
        "origin": "Thailand",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/LaPerm"
    },
    {
        "name": "Maine Coon",
        "origin": "United States",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Maine_Coon"
    },
    {
        "name": "Malayan",
        "origin": "United Kingdom",
        "life_span": "12 - 18",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Asian_cat"
    },
    {
        "name": "Manx",
        "origin": "Isle of Man",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Manx_(cat)"
    },
    {
        "name": "Munchkin",
        "origin": "United States",
        "life_span": "10 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Munchkin_(cat)"
    },
    {
        "name": "Nebelung",
        "origin": "United States",
        "life_span": "11 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Nebelung"
    },
    {
        "name": "Norwegian Forest Cat",
        "origin": "Norway",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Norwegian_Forest_Cat"
    },
    {
        "name": "Ocicat",
        "origin": "United States",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Ocicat"
    },
    {
        "name": "Oriental",
        "origin": "United States",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Oriental_Shorthair"
    },
    {
        "name": "Persian",
        "origin": "Iran (Persia)",
        "life_span": "14 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Persian_(cat)"
    },
    {
        "name": "Pixie-bob",
        "origin": "United States",
        "life_span": "13 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Pixiebob"
    },
    {
        "name": "Ragamuffin",
        "origin": "United States",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Ragamuffin_cat"
    },
    {
        "name": "Ragdoll",
        "origin": "United States",
        "life_span": "12 - 17",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Ragdoll"
    },
    {
        "name": "Russian Blue",
        "origin": "Russia",
        "life_span": "10 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Russian_Blue"
    },
    {
        "name": "Savannah",
        "origin": "United States",
        "life_span": "17 - 20",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Savannah_cat"
    },
    {
        "name": "Scottish Fold",
        "origin": "United Kingdom",
        "life_span": "11 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Scottish_Fold"
    },
    {
        "name": "Selkirk Rex",
        "origin": "United States",
        "life_span": "14 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Selkirk_Rex"
    },
    {
        "name": "Siamese",
        "origin": "Thailand",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Siamese_(cat)"
    },
    {
        "name": "Siberian",
        "origin": "Russia",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Siberian_(cat)"
    },
    {
        "name": "Singapura",
        "origin": "Singapore",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Singapura_(cat)"
    },
    {
        "name": "Snowshoe",
        "origin": "United States",
        "life_span": "14 - 19",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Snowshoe_(cat)"
    },
    {
        "name": "Somali",
        "origin": "Somalia",
        "life_span": "12 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Somali_(cat)"
    },
    {
        "name": "Sphynx",
        "origin": "Canada",
        "life_span": "12 - 14",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Sphynx_(cat)"
    },
    {
        "name": "Tonkinese",
        "origin": "Canada",
        "life_span": "14 - 16",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Tonkinese_(cat)"
    },
    {
        "name": "Toyger",
        "origin": "United States",
        "life_span": "12 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Toyger"
    },
    {
        "name": "Turkish Angora",
        "origin": "Turkey",
        "life_span": "15 - 18",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Turkish_Angora"
    },
    {
        "name": "Turkish Van",
        "origin": "Turkey",
        "life_span": "12 - 17",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Turkish_Van"
    },
    {
        "name": "York Chocolate",
        "origin": "United States",
        "life_span": "13 - 15",
        "wikipedia_url": "https://en.wikipedia.org/wiki/York_Chocolate"
    }
];