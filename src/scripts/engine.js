const emojis =[
    "💕",
    "💕",
    "👋",
    "👋",
    "😂",
    "😂",
    "💻",
    "💻",
    "📖",
    "📖",
    "💵",
    "💵",
    "🔥",
    "🔥",
    "🍕",
    "🍕"
];
let openCards = [];

let shufleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shufleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
};

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }


    if(openCards.length == 2) {
        setTimeout(checkMatch, 500)
    }

    console.log(openCards);
}


function mostrarAlerta() {
  const alerta = document.createElement("div");

  alerta.innerText = "Você venceu, parabéns!";
  
  alerta.style.position = "fixed";
  alerta.style.top = "20px";
  alerta.style.right = "20px";
  alerta.style.padding = "20px";
  alerta.style.background = "linear-gradient(135deg, #ff4e50, #f9d423)";
  alerta.style.color = "white";
  alerta.style.borderRadius = "10px";
  alerta.style.fontWeight = "bold";
  alerta.style.fontSize = "2em";

  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 8000);
}


function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        mostrarAlerta();
    }
}

