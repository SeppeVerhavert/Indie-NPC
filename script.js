let btn = document.getElementById('generateBtn');
btn.addEventListener('click', generateNpc);

let firstLock = document.getElementById('firstLock');
let secondLock = document.getElementById('secondLock');
let thirdLock = document.getElementById('thirdLock');
firstLock.addEventListener('click', changeIcon);
secondLock.addEventListener('click', changeIcon);
thirdLock.addEventListener('click', changeIcon);

fetch("https://raw.githubusercontent.com/SeppeVerhavert/3-Line-NPC/master/tables.json")
    .then(response => response.json())
    .then(json => library = json);

function generateNpc() {
    showLocks();
    generateFirstLine();
    generateSecondLine();
    generateThirdLine();
}

function showLocks(){
    firstLock.style.display = "block";
    secondLock.style.display = "block";
    thirdLock.style.display = "block";
}

function generateFirstLine() {
    if (firstLock.classList.contains('fa-unlock')) {
        let firstline = document.getElementById('firstLine');
        firstline.innerHTML = "";
        let specialFeatures = [
            "eyes",
            "mouth",
            "hair",
            "smell",
            "face",
            "scar",
            "tattoo",
            "jewelry",
            "clothing",
            "pets",
            "weapons"
        ];
        let race = rollTable(library.race);
        if (race === "Monster or member of an exotic race") {
            race = rollTable(library.exoticRace);
        }
        let firstLineText = "Is " + rollTable(library.physicalDescription) + " " + rollTable(library.age) + " " + rollTable(library.gender) + " " + race + ", currently " + rollTable(library.occupations) + ". Has " + rollFeature(specialFeatures) + ", " + rollFeature(specialFeatures) + " and " + rollFeature(specialFeatures) + ".";
        firstline.innerHTML += firstLineText;
    } else {
        return
    }
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
    if (secondLock.classList.contains('fa-unlock')) {
        let secondline = document.getElementById('secondLine');
        secondline.innerHTML = "";
        let quirks = [
            "prejudices",
            "faiths",
            "crafts",
            "quirks",
            "quirks",
            "traits",
            "traits",
            "factions",
            "fears",
        ];
        let secondLineText = "Is " + rollTable(library.moods) + " " + rollTable(library.jobs) + ", who " + rollQuirk(quirks) + ". Also " + rollQuirk(quirks) + ".";
        secondline.innerHTML += secondLineText;
    } else {
        return;
    }
}

function rollQuirk(quirks) {
    let newQuirk = rollTable(quirks);
    quirks.splice(quirks.indexOf(newQuirk), 1);
    if (newQuirk === "faiths") {
        let quirk = rollTable(library[newQuirk]) + " " + rollTable(library.deities);
        return quirk;
    } else if (newQuirk === "factions") {
        let quirk = rollTable(library.sympathy) + " " + rollTable(library[newQuirk]);
        return quirk;
    } else if (newQuirk === "crafts") {
        let quirk = rollTable(library.comitment) + " " + rollTable(library[newQuirk]);
        return quirk;
    } else if (newQuirk === "prejudices") {
        let x = Math.floor(Math.random() * 5 + 1)
        if (x === 0) {
            let quirk = library.prejudice[x];
            return quirk;
        } else {
            if (x === 1) {
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejAge) + ")";
                return quirk;
            } else if (x === 2) {
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejClass) + ")";
                return quirk;
            } else if (x === 3) {
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejDeviants) + ")";
                return quirk;
            } else if (x === 4) {
                let quirk = library.prejudices[x] + " (" + rollTable(library.prejProfession) + ")";
                return quirk;
            } else if (x === 5) {
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
    if (thirdLock.classList.contains('fa-unlock')) {
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
    } else {
        return;
    }
}

function rollTable(element) {
    tableroll = Math.floor(Math.random() * element.length);
    return element[tableroll];
}

function changeIcon() {
    if (this.classList.contains('fa-unlock')) {
        this.classList.remove('fa-unlock');
        this.classList.add('fa-lock');
    } else {
        this.classList.remove('fa-lock');
        this.classList.add('fa-unlock');
    }
}