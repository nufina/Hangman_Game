//Get element
var popup = document.getElementById("simplePopup");

//Get open button
var popupButton = document.getElementById("popupButton");

//Get close button
var closeButton = document.getElementsByClassName("closeButton")[0];


//Function to open popup
function openPopup() {
    "use strict";
    popup.style.display = "block";
}

//Function to close popup
function closePopup() {
    "use strict";
    popup.style.display = "none";
}


//Listen for open click
popupButton.addEventListener("click", openPopup);

//Listen for close click
closeButton.addEventListener("click", closePopup);



var easyCategories = ["Movie Title", "Eat and Drink", "Fashion Brand", "Entertainment Show", "Technology", "Celebrity"];

var hardCategories = ["Movie & Star", "Song & Artist", "Figure of Speech", "Eat & Drink", "History", "Technology"];

var easyCategoryWords = [["Julie and Julia", "The Fox and The Hound", "Dangal", "Imitation Game", "Alice In Wonderland", "Florence Foster Jenkins"], ["Liguria", "Gado-gado", "Bruschetta", "smoothie", "Chiken Fajitas", "Amarula"], ["Yves Saint Laurent", "Balenciaga", "Alexander McQueen", "Calvin Klein", "Dolce and Gabbana", "Tom Ford"], ["British Got Talent", "Ellen Degeneres Show", "The Oprah Winfrey Show", "Running Man", "The Tonight Show", "The voice"], ["Mozilla Firefox", "Phyton", "Github", "Stack Overflow", "AI", "Javascript"],  ["Saoirse Ronan", "Benedict Cumberbatch", "Timothee Chalamat", "Joseph Gordon Levitt", "Hugh Grant", "Anne Hathaway"]];

var hardCategoryWords = [["The Dark Knight, Cristian Bale", "Three Idiots, Aamir Khan", "Notting, Julia Roberts", "Doctor Strange, Benedict Cumberbatch", "The Post, Meryl Streep", "Wonder Woman, Gal Gadot"], ["Perfect , Ed Sheeran", "Blank Space, Taylor Swift", "Havana, Camila Cabelo", "The Lazy Song, Bruno Mars", "Firework, Katy Perry", "Heaven, Eric Clapton"], ["Time is Money", "Eats Like a Pig", "Heart of Stone", "As Sweet as Sugar", "She Sells Seashells", "I Came, I Saw, I Conquered"], ["Nasi Goreng", "Boeuf Bourguignon", "Goi cuon", "Mampoer", "Keto Taquitos", "Kimchi"], ["Egyptian Hieroglyphs", "Mesopotamia", "Han Dynasty", "Homo Sapiens", "Nagasaki Hirosima", "Algebra"], ["Angular JS", "GitHub", "Android", "API", "C", "Mongo DB"]];

//Get Category
var chosenEasyCategory = easyCategories[Math.floor(Math.random() * easyCategories.length)];

var chosenHardCategory = hardCategories[Math.floor(Math.random() * hardCategories.length)];

//Show Category
var showCategory = document.getElementById("showCategory").innerHTML = chosenEasyCategory;

//Get random word from easy category
var easyWord = function () {
    "use strict";
    if (chosenEasyCategory === easyCategories[0]) {
        return easyCategoryWords[0][Math.floor(Math.random() * easyCategoryWords[0].length)];
    } else if (chosenEasyCategory === easyCategories[1]) {
        return easyCategoryWords[1][Math.floor(Math.random() * easyCategoryWords[1].length)];
    } else if (chosenEasyCategory === easyCategories[2]) {
        return easyCategoryWords[2][Math.floor(Math.random() * easyCategoryWords[2].length)];
    } else if (chosenEasyCategory === easyCategories[3]) {
        return easyCategoryWords[3][Math.floor(Math.random() * easyCategoryWords[3].length)];
    } else if (chosenEasyCategory === easyCategories[4]) {
        return easyCategoryWords[4][Math.floor(Math.random() * easyCategoryWords[4].length)];
    } else if (chosenEasyCategory === easyCategories[5]) {
        return easyCategoryWords[5][Math.floor(Math.random() * easyCategoryWords[5].length)];
    }
};


//Create word array
var chosenWord = easyWord();
var space;
var chosenWordArray = [];
var i = 0;
for (i = 0; i < chosenWord.length; i += 1) {
    if (chosenWord[i] === " ") {
        chosenWordArray[i] = " ";
        space = 1;
    } else {
        chosenWordArray[i] = "_";
    }
}

var answerArray = chosenWordArray.join("");

var showEasyWord = document.getElementById("guessArray").innerHTML = answerArray;

//Create keyboard
function setLetter(letter) {
    "use strict";
    var getAlphabet = document.getElementById("guessArray");
    getAlphabet.innerHTML = getAlphabet.innerHTML + letter;
}

function getLetter(e) {
    "use strict";
    setLetter(this.getAttribute("data-letter"));
}

window.addEventListener("load", function (windowLoadE) {
    "use strict";
    var i, p, letter, button, keyboardBtn;
    keyboardBtn = document.getElementById("alphabet");
    
    i = 65;
    for (i = 65; i <= 90; i += 1) {
        if (i === 65 || i === 73 || i === 81 || i === 89) {
            p = document.createElement("p");
        }
        letter = String.fromCharCode(i);
        button = document.createElement("button");
        button.innerHTML = letter;
        button.setAttribute("data-letter", letter);
        button.onclick = getLetter;
        p.appendChild(button);
        if (i === 72 || i === 80 ||  i === 88 || i === 90) {
            keyboardBtn.appendChild(p);
        }
    }
});