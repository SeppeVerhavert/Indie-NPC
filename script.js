let btn = document.getElementById('generateBtn');
btn.addEventListener('click', generateNpc);

fetch("https://raw.githubusercontent.com/SeppeVerhavert/3-Line-NPC/master/tables.json")
    .then(response => response.json())
    .then(json => library = json);

function generateNpc() {
    generateFirstLine();
    generateSecondLine();
    generateThirdLine();
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
    let firstLineText = "Is a " + rollTable(library.physicalDescription) + " " + rollTable(library.age) + " " + rollTable(library.gender) + " " + race + ", currently " + rollTable(library.occupations) + ". Has " + rollFeature(specialFeatures) + ", " + rollFeature(specialFeatures) + " and " + rollFeature(specialFeatures) + ".";
    firstline.innerHTML += firstLineText;
}

function rollFeature(specialFeatures) {
    let newFeature = rollTable(specialFeatures);
    specialFeatures.splice(specialFeatures.indexOf(newFeature), 1);
    if (newFeature === "jewelry") {
        let feature = rollTable(library.jewelryMaterial) + " " + rollTable(library[newFeature]);
        return feature;
    } else {
        let feature = rollTable(library[newFeature]);
        return feature;
    }
}

function generateSecondLine() {
    let secondline = document.getElementById('secondLine');
    secondline.innerHTML = "";
    let quirks = [
        "prejudices",
        "faiths",
        "quirks",
        "quirks",
        "traits",
        "traits",
        "factions",
        "fears",
    ];
    let secondLineText = "Is " + rollTable(library.moods) + " " + rollTable(library.jobs) + ", who " + rollQuirk(quirks) + ". Also " + rollQuirk(quirks) + ".";
    secondline.innerHTML += secondLineText;
}

function rollQuirk(quirks) {
    let newQuirk = rollTable(quirks);
    quirks.splice(quirks.indexOf(newQuirk, 1));
    if (newQuirk === "faiths") {
        let quirk = rollTable(library[newQuirk]) + " " + rollTable(library.deities);
        return quirk;
    } else if (newQuirk === "factions") {
        let quirk = rollTable(library.sympathy) + " " + rollTable(library[newQuirk]);
        return quirk;
    } else if (newQuirk === "prejudices") {
        let x = Math.floor(Math.random() * 5 + 1)
        if (x === 0) {
            let quirk = library.prejudice[x];
            return quirk;
        } else {
            if(x === 1){
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejAge) + ")";
                return quirk;
            } else if(x === 2){
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejClass) + ")";
                return quirk;
            } else if(x === 3){
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejDeviants) + ")";
                return quirk;
            } else if(x === 4){
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejProfession) + ")";
                return quirk;
            } else if(x === 5){
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejRace) + ")";
                return quirk;
            } 
        }
    } else {
        let quirk = rollTable(library[newQuirk]);
        return quirk;
    }
}

function generateThirdLine() {
    let thirdline = document.getElementById('thirdLine');
    thirdline.innerHTML = "";
    let hook = [
        "sideplots",
        "secrets",
        "motivations"
    ];
    let newHook = rollTable(hook);
    let thirdLineText = rollTable(library[newHook]) + ".";
    thirdline.innerHTML += thirdLineText;
}

function rollTable(element) {
    tableroll = Math.floor(Math.random() * element.length);
    return element[tableroll];
}