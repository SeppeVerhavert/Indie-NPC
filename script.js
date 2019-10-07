let btn = document.getElementById('generateBtn');
btn.addEventListener('click', generateNpc);

fetch("https://raw.githubusercontent.com/SeppeVerhavert/3-Line-NPC/master/tables.json")
    .then(response => response.json())
    .then(json => library = json);

function generateNpc() {
    console.log(library);
}

function rolld(element) {
    let roll = parseInt(Math.floor(Math.random() * (element) + 1));
    return roll;
}

function rollTable(element) {
    tableroll = Math.floor(Math.random() * element.length);
    return element[tableroll];
}