/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */

const myMain = document.querySelector("main");
const mySelect = document.querySelector("header select");

mySelect.value = "all";

createSelectOptions();

myIcons.forEach((icon)=> {
    icon.color = getRandomColor();
    createIconCard(icon);
});

mySelect.addEventListener("change",
    ()=>{
        myMain.innerHTML = "";

        if (mySelect.value === "all"){
            myIcons.forEach((icon)=> createIconCard(icon));
        } else {
            const myFilteredIcons = myIcons.filter((icon)=> icon.type === mySelect.value);
            myFilteredIcons.forEach((icon)=> createIconCard(icon));
        }
    }
);

// dichiarazione funzioni

function createSelectOptions(){
    const iconTypes = myIcons.map((icon) => {
        let type = icon.type;
        return type;
    });

    let iconUniqueTypes = [];
    iconTypes.forEach((type) => {
        if (!iconUniqueTypes.includes(type)){
            iconUniqueTypes.push(type);
        }
    });

    iconUniqueTypes.forEach((type) => {
        const myOption = document.createElement("option");
        myOption.value = type;
        mySelect.append(myOption);
        myOption.innerText = type;
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createIconCard(icon){
    const card = document.createElement("div");
    card.classList.add("iconCard");
    myMain.append(card);

    const myI = document.createElement("i");
    myI.className = `${icon.family} ${icon.prefix}${icon.name}`;
    myI.style.color = icon.color;

    const mySpan = document.createElement("span");
    mySpan.innerText = icon.name.toUpperCase();

    card.append(myI);
    card.append(mySpan);
}