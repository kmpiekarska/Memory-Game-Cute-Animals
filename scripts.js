const cards = [
  {
    title: "snail1",
    imgUrl: "img/snail1.png",
  },
  {
    title: "snail2",
    imgUrl: "img/snail2.png",
  },

  {
    title: "puppy1",
    imgUrl: "img/puppy1.png",
  },

  {
    title: "puppy2",
    imgUrl: "img/puppy2.png",
  },

  {
    title: "cat1",
    imgUrl: "img/cat1.png",
  },

  {
    title: "cat2",
    imgUrl: "img/cat2.png",
  },

  {
    title: "mouse1",
    imgUrl: "img/mouse1.png",
  },

  {
    title: "mouse2",
    imgUrl: "img/mouse2.png",
  },
  {
    title: "snail1",
    imgUrl: "img/snail1.png",
  },
  {
    title: "snail2",
    imgUrl: "img/snail2.png",
  },
  {
    title: "puppy1",
    imgUrl: "img/puppy1.png",
  },

  {
    title: "puppy2",
    imgUrl: "img/puppy2.png",
  },

  {
    title: "cat1",
    imgUrl: "img/cat1.png",
  },

  {
    title: "cat2",
    imgUrl: "img/cat2.png",
  },

  {
    title: "mouse1",
    imgUrl: "img/mouse1.png",
  },

  {
    title: "mouse2",
    imgUrl: "img/mouse2.png",
  },
];

cards.sort(() => 0.5 - Math.random());

const boardGrid = document.querySelector("#board");
const scoresDisplay = document.getElementById("scores");
let chosenCards = [];
let chosenCardsIds = [];
let scores = 0;

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/back.png");
    card.setAttribute("id", i);
    card.setAttribute("class", "card");
    card.addEventListener("click", flipCard);
    boardGrid.appendChild(card);
  }
}

createBoard();

function flipCard() {
  const cardId = this.getAttribute("id");
  chosenCards.push(cards[cardId].title);
  chosenCardsIds.push(cardId);
  this.setAttribute("src", cards[cardId].imgUrl);

  if (chosenCards.length === 2) {
    setTimeout(checkMatch, 400);
  }
}
function checkMatch() {
  const allImages = document.querySelectorAll("#board img");
  if (chosenCards[0] == chosenCards[1]) {
    alert("You got a pair! Great!");
    scores++;
    scoresDisplay.innerHTML = scores;

    allImages[chosenCardsIds[0]].setAttribute("src", "img/white.png");
    allImages[chosenCardsIds[0]].removeEventListener("click", flipCard);
    allImages[chosenCardsIds[1]].setAttribute("src", "img/white.png");
    allImages[chosenCardsIds[1]].removeEventListener("click", flipCard);
  } else {
    alert("Try again!");
    allImages[chosenCardsIds[0]].setAttribute("src", "img/back.png");
    allImages[chosenCardsIds[1]].setAttribute("src", "img/back.png");
  }
  chosenCardsIds = [];
  chosenCards = [];
}
function refreshGame() {
  location.reload();
}
