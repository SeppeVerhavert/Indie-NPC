let btn = document.getElementById('generateBtn');
btn.addEventListener('click', generateNpc);

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
    let specialFeatures = [
        "eyes",
        "mouth",
        "hair",
        "face",
        "scar",
        "tattoo",
        "jewelry",
        "clothing",
        "pets",
    ];
    let description = rollTable(library.physicalDescription);
    let age = rollTable(library.age);
    let gender = rollTable(library.gender);
    let race = rollTable(library.race);
    if (race === "Monster or member of an exotic race") {
        race = rollTable(library.exoticRace);
    }
    let occupation = rollTable(library.occupations);
    let firstLine = "Is a " + description + " " + age + " " + gender + " " + race + ", currently " + occupation + ".";
    console.log(firstLine);
    let firstFeature = rollTable(specialFeatures);
    let secondFeature = rollTable(specialFeatures);
    let thirdFeature = rollTable(specialFeatures);
    console.log(rollTable(library[firstFeature]));
    console.log(rollTable(library[secondFeature]));
    console.log(rollTable(library[thirdFeature]));
}

function generateSecondLine() {
    console.log("second line");
    console.log(" ");
    console.log(rollTable(library.moods));
    console.log(rollTable(library.jobs));
    console.log(rollTable(library.prejudices));
    console.log(rollTable(library.faiths));
    console.log(rollTable(library.quirks));
    console.log(rollTable(library.traits));
    console.log(rollTable(library.factions));
    console.log(rollTable(library.heraldicSigns));
    console.log(rollTable(library.motivations));
    console.log(rollTable(library.sideplots));
    console.log(rollTable(library.fears));
    console.log(rollTable(library.thougths));
    console.log(rollTable(library.titles));
    console.log(rollTable(library.secrets));
}

function rollTable(element) {
    tableroll = Math.floor(Math.random() * element.length);
    return element[tableroll];
}