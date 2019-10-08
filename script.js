let btn = document.getElementById('generateBtn');
btn.addEventListener('click', generateNpc);

let thirdLineArray = [
    "hooks",
    "rumors1",
    "rumors2",
    "rumors3",
];

fetch("https://raw.githubusercontent.com/SeppeVerhavert/3-Line-NPC/master/tables.json")
    .then(response => response.json())
    .then(json => library = json);

function generateNpc() {
    generateFirstLine();
    // generateSecondLine();
    // generateThirdLine();
}

function generateFirstLine() {
    let firstline = document.getElementById('firstLine');
    firstline.innerHTML = "";
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
    let race = rollTable(library.race);
    if (race === "Monster or member of an exotic race") {
        race = rollTable(library.exoticRace);
    }
    let firstLineText = "Is a " + rollTable(library.physicalDescription) + " " + rollTable(library.age) + " " + rollTable(library.gender) + " " + race + ", currently " + rollTable(library.occupations) + ". Has " + rollFeature(specialFeatures) + ", " + rollFeature(specialFeatures) + " and "+ rollFeature(specialFeatures) + ".";
    firstline.innerHTML += firstLineText;
}

function rollFeature(specialFeatures) {
    let newFeature = rollTable(specialFeatures);
    specialFeatures.splice(specialFeatures.indexOf(newFeature),1);
    if (newFeature === "jewelry"){
        let feature = rollTable(library.jewelryMaterial) + " " + rollTable(library[newFeature]);
        return feature;
    } else {
        let feature = rollTable(library[newFeature]);
        return feature;
    }
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