//This is where the global var's will go
var key = "9f8780aafae54aa8aba20beb7f4e5734";
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key= key &limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
// var sname = $().get()
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9f8780aafae54aa8aba20beb7f4e5734&limit=5";
// this is where the document.ready will go
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").slideToggle();
// inside the main .ready will have ajax call
    $.ajax({ url: queryURL, method:'GET' })
      .done(function(repsonse){
        console.log(response);
      });

// });
// });





    // inside ajax call will be the jquery for the .html replacment or insertion
