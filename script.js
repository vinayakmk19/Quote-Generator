const apiUrl = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');


async function getQuote(apiUrl){
    let response = await fetch(apiUrl);
    let data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

getQuote(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --- by  "+ author.innerHTML, "Tweet window", "width=600, height=300");
}