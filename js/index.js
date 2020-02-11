'use scrict'
let category = `dev`;
const refreshQuoteButton = document.querySelector(`#refreshQuote`)
const submitFormButton = document.querySelector(`#submitForm`)
const newCategoryButton = document.querySelector(`#newCategoryButton`)


const getQuote = category => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    const  chuckSaysPara = document.querySelector(`#chuckSays`)
    chuckSaysPara.innerHTML = `Chuck in an IFFE`
    get(url)
    .then(response => {
        chuckSaysPara.innerHTML = response.value
    })
};

getQuote(category);

//Event Listener
refreshQuoteButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    getQuote(category);
})

submitFormButton.addEventListener(`click`, e => {
    e.preventDefault();
    const categoryInput = document.querySelector(`#categoryInput`)
    category = categoryInput.value

    getQuote(category);
})


newCategoryButton.addEventListener(`click`, e =>{
    e.preventDefault();

    const newCategoryInput = document.querySelector(`#userInput`)
    category = newCategoryInput.value

    getQuote(category)
    
})