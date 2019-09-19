$(".search-btn").on("click", function() {
    event.preventDefault();
    var query = $("#query").val();
    var startYear = $("#start-year").val();
    // console.log(query)
    //console.log(startYear.length)
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=CzASDanhCbWKv235XRcf6Jre5HCLEJq9&q=" + query + "&limit=3";

    // if (startYear.length > 1) {
    //     startYear + "0101"
    //     console.log(startYear)

    // }

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
        for (let i=0; i < response.response.docs.length; i++) {

            $('#top-articles').append(response.response.docs[i].headline.main);
        }
    });
  });