var button = document.getElementsByClassName('button')[0];
var quotePlacement = document.getElementsByClassName('quote')[0];
var quote = document.createElement('h2')
var author = document.createElement('p')
var backgroundImage = document.getElementsByClassName('body')[0];
//'http://quotesondesign.com/wp-json/posts?filterorderby]=rand&filter[posts_per_page]=1
button.addEventListener('submit', (event) => {
  quotePlacement.innerHTML = ''
  event.preventDefault();
  generateQuote();
  generateBackground();

})

function generateQuote() {
  fetch("https://talaikis.com/api/quotes/random/")
    .then((quote) => {
      quote.json()
        .then((quote) => {
          pushToPage(quote)
        })
    })
}

function generateBackground() {
  fetch("https://source.unsplash.com/random")
    .then((background) => {
      backgroundImage.setAttribute('style', 'background-image: url(' + background.url + ');')
      // $("body").css("background-color","yellow");

    })
}

function pushToPage(info) {
  quote.innerText = info.quote
  author.innerText = info.author
  quotePlacement.append(quote, author)
}
