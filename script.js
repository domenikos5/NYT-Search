// user clicks the search button

// go and grab the inputs
// call api
// displays the information from api

var searchTerm = $(".term").val();
var amtRecord = $(".amtRecord").val();
var startYear = $(".start").val();
var endYear = $(".end").val();

var artDisplay = (article) => {
    var headline = '';
    if (article.document_type === "article") {
      if (article.headline.print_headline !== "") {
        headline = article.headline.print_headline;
      } else {
        headline = article.headline.main;
      }
    } else {
      headline = article.headline.main;
    }
    $(".art-display").append(`<a href=${article.web_url}>${headline}</a><p>${article.byline.original}</p>`);
  }

$("#search").on("click", function(event) {
    event.preventDefault();
    $(".art-display").empty();

    var searchTermNew = $("#search-term").val();
    var numberOfArticles = $(".amtRecord").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTermNew +"&api-key=aGLf4ScijAmS7S4h1HcAZ7yPaL1KQQ1H";

    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        console.log(response);
        let docs = response.response.docs;
        for(var i = 0; i < docs.length; i++) {
            // console.log(docs[i]);
            artDisplay(docs[i]);
        }
    });

})

var clear = () => {
    $(".term").val("");
    $(".amtRecord").val("");
    $(".start").val("");
    $(".end").val("");
    $(".art-display").val("");
    searchTerm = "";
    amtRecord = 0;
    startYear = 0;
    endYear = 0;
}

$("#clear").on("click", (event) => {
    event.preventDefault();
    clear();
})
