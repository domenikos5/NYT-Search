var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=aGLf4ScijAmS7S4h1HcAZ7yPaL1KQQ1H";

$.ajax({
    url: queryUrl,
    method: "GET"
})
.then(function(response) {
    console.log(response);
});

$("#search").on("click", function(event) {
    var searchTerm = $(".term").val();
    var starYear = $(".start").val();
    var endYear = $(".end").val();
    console.log(searchTerm);
    console.log(startYear);
    console.log(endYear);
})
