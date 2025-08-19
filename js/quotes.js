const quotes = [
    {
        quote: 'Carpe diem',
        author: 'Horace',
    },
    {
        quote: 'Be yourself',
        author: 'Oscar Wilde',
    },
    {
        quote: 'I think, therefore I am',
        author: 'René Descartes',
    },
    {
        quote: 'This too shall pass',
        author: 'Medieval Persian Sufi poets',
    },
    {
        quote: 'Life goes on',
        author: 'Unknown',
    },
    {
        quote: 'Just do it',
        author: 'Nike slogan',
    },
    {
        quote: 'It is what it is',
        author: 'Unknown',
    },
    {
        quote: 'Love wins',
        author: 'Unknown',
    },
    {
        quote: 'I am enough',
        author: 'Unknown',
    },
    {
        quote: 'Embrace change',
        author: 'Unknown',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
