const main = document.getElementById("main");

const search = () => {
    const input = document.getElementById("search-input");
    const errer = document.getElementById("error");

    const inputvalue = parseInt(input.value);
    // console.log(inputvalue);


    //   errer handing for string value 
    if (isNaN(inputvalue) || inputvalue == '') {
        errer.innerText = "please give me number";
        input.value = '';
        main.innerHTML = '';
    } else if (inputvalue <= 0) {
        errer.innerText = "Pleade give a positive Numbar";
        input.value = '';
    } else if (inputvalue >= 50) {
        errer.innerText = " please give me small  Numbar";
        input.value = '';
    } else {
    //  arrer handlaing this handaling like that when you put the input before will clear all innerHtml
        main.innerHTML='';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputvalue}`)
            .then(Res => Res.json())
            .then(data => getIngcords(data.cards));
        input.value = '';
        errer.innerText = '';
    }
}
const getIngcords = (cords) => {
    // console.log(cords);

    for (const card of cords) {
        console.log(card.image);
        const div = document.createElement("div");
        div.classList.add('col-lg-4');
        div.classList.add('mb-4');

        div.innerHTML = `
           <div class="card" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${card.code}</h5>
                    <h5 class="card-title text-center">${card.suit}</h5>
                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <button onclick="botton('${card.code}')" class="bg-primary text-light">code </button>
                </div>
                </div>
           
           `
        main.appendChild(div);



        console.log(card);

    }
}


const botton = (code) => {

    // main.innerHTML='';
                fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=50`)
                    .then(Res => Res.json())
                    .then(data => {
                        const allCards = data.cards;
                        const singleCard = allCards.find(card => card.code === code)
                        const div = document.createElement("div");
                        main.innerHTML='';
                        div.innerHTML=`
                        <div class="card" style="width: 18rem;">
                        <img src="${singleCard.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">${singleCard.code}</h5>
                            <h5 class="card-title text-center">${singleCard.suit}</h5>
                            <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                        </div>
                        </div>
                         `
                         main.appendChild(div);
                       


                        console.log(singleCard);
                    })
                // input.value = '';
                // errer.innerText = '';
            
            }


// https://deckofcardsapi.com/api/deck/new/draw/?count=52