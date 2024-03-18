const quotes = [
    {
        quote: "This is an object",
        author: "javascript"
    },
    {
        quote: "You're braver than you believe, stronger than you seem, and smarter than you think.",
        author: "A.A. Milne"
    },
    {
        quote: "This is an object",
        author: "javascript"
    },
    {
        quote: "If you change the way you look at things, the things you look at change.",
        author: "Wayne Dyer"
    },
    {
        quote: "Do the best you can until you know better. Then when you know better, do better.",
        author: "Maya Angelou"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always try just one more time.",
        author: "Thomas Edison"
    },
    {
        quote: "Think before you speak. Read before you Think",
        author: "Fran Lebowitz"
    }]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const TodaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=TodaysQuote.quote
author.innerText=TodaysQuote.author



