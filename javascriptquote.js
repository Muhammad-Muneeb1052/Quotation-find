function findQuote(){
    var quotes = {
        "Ralph Waldo Emerson" : '"A great man is always willing to be little"',
        "Muhammad ALi" : '"Don’t count the days, make the days count"',
        "Henry Ford" : '"Whether you think you can or you think you can’t, you’re right."',
        "Elie Wiesel" : '"The opposite of love is not hate; it’s indifference."'
    }
    var authors = Object.keys(quotes);
    // console.log(authors); 
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
    // console.log(quote);
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}