var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "a5a401ff91msh7825e6fa817887ep1c4c17jsn75cdcebe253e"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    $(".quote").text(response.content);
    $(".author").text(response.originator.name);
});


//Working Meh button
$(document).ready(function() {

	$("#mehBtn").on("click", function(){

		$.ajax(settings).done(function (response) {
	   $(".quote").text(response.content);
	   $(".author").text(response.originator.name);
   
	   var tuitText = document.getElementById('data-text').getAttribute('value');
	   console.log(tuitText);
		})
	});     
   });
   
   //Working Loved it button
   $(document).ready(function() {
   
   $("#loveditBtn").on("click", function(){
	   var tuitText = $('data-text');
	   $(tuitText).text(".header");
   
	   });     
	  });

