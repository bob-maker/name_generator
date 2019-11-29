const button = document.querySelector("button");
const span = document.querySelector("span");
const form = document.querySelector("form");

button.addEventListener("click", function () {
    span.innerHTML = `${firstNames[random(firstNames)]} ${lastNames[random(lastNames)]} the ${adjectives[random(adjectives)]}`
});

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector("input")).value;
    const capitalText = text.charAt(0).toUpperCase() + text.slice(1);

    adjectives.push(capitalText);
    this.reset();
}

function random(array) {
    return Math.floor(Math.random() * array.length);
};

form.addEventListener("submit", addItem)

//  Arrays
const firstNames = [
    "Fred",
    "Bob",
    "Jake",
    "Amy",
    "Patrone",
    "Vontae",
    "Jian-Yang",
    "Hans",
    "Marcus",
    "Cornelius",
    "Austin",
    "Hagrid",
    "Gertrude",
    "Millicent"
];

const lastNames = [
    "Jones",
    "Burfict",
    "Cornwall",
    "Seinfeld",
    "Bluth",
    "Simpson",
    "Cosby",
    "Gordon",
    "Wayne",
    "Wonka",
    "Brody",
    "Fantasia",
    "Bondar",
    "Body"
];

const adjectives = [
    "Unready",
    "Unworthy",
    "Dim-witted",
    "Repugnant",
    "Disgusting",
    "Sloth-toed",
    "Burger-eyed",
    "Flat-faced",
    "Boomer",
    "Menopausal",
    "Ugly",
    "Slow",
    "Cantankerous",
    "Ornery",
    "Smelly",
    "Odorific",
    "Clean"
];