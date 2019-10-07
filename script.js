let btn = document.getElementById('generateBtn');
btn.addEventListener('click', generateNpc);

let firstLineArray = [
    "physicalDescription",
    "age",
    "gender",
    "race",
    "exoticRace",
    "eyes",
    "mouth",
    "hair",
    "face",
    "scar",
    "tattoo",
    "jewelry",
    "jewelryMaterial",
    "clothing",
    "pets",
    "occupations",
];
let secondLineArray = [
    "moods",
    "jobs",
    "prejudices",
    "faiths",
    "quirks",
    "traits",
    "factions",
    "heraldicSigns",
    "motivations",
    "sideplots",
    "fears",
    "thougths",
    "titles",
    "secrets",
];
let thirdLineArray = [
    "hooks",
    "rumors1",
    "rumors2",
    "rumors3",
];

let firstLine = [];
let secondLine = [];
let thirdLine = [];

fetch("https://raw.githubusercontent.com/SeppeVerhavert/3-Line-NPC/master/tables.json")
    .then(response => response.json())
    .then(json => library = json);

function generateNpc() {
    generateFirstLine();
    // generateSecondLine();
    // generateThirdLine();
}

function generateFirstLine() {
    console.log(rollTable(library.physicalDescription));
    console.log(rollTable(library.age));
    console.log(rollTable(library.gender));
    console.log(rollTable(library.race));
    console.log(rollTable(library.occupations));
}

function rollTable(element) {
    tableroll = Math.floor(Math.random() * element.length);
    return element[tableroll];
}