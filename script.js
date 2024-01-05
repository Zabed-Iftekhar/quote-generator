//script.js//

//variables//
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');


//array containing quotes and name of person//

const quotes=[
    {quote:"Do one thing every day that scares you.",person:"Eleanor Roosevelt"},
    {quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",person:"Martin Luther King Jr"},
    {quote:"It is during our darkest moments that we must focus to see the light.",person:"Aristotle"},
    {quote:"Be yourself; everyone else is already taken.",person:"Oscar Wilde"},
    {quote:"You will face many defeats in life, but never let yourself be defeated. ",person:"Maya Angelou"},
    {quote:"Never let the fear of striking out keep you from playing the game.",person:"Babe Ruth"},
    {quote:"You only live once, but if you do it right, once is enough",person:"Mae West"},
    {quote:"Life itself is the most wonderful fairy tale.",person:"Hans Christian Andersen"},
    {quote:"May you live all the days of your life.",person:"Jonathan Swift"},
    {quote:"Do not let making a living prevent you from making a life.",person:"John Wooden"},
];

btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})























