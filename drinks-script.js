// api de drinks
$(document).ready (function(){
	var settings = {
		"async": true,
		"crossDomain": true,
		 "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "5858a8dedfmshe16bbafcddc8ee8p1c2604jsn59ba38b94d92"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log (response.drinks[0].strIngredient1)
		$ (".drinkName").text(response.drinks[0].strDrink)
		$ (".ingridient1").text(response.drinks[0].strIngredient1)
		$ (".ingridient2").text(response.drinks[0].strIngredient2)
		$ (".ingridient3").text(response.drinks[0].strIngredient3)
		$ (".ingridient4").text(response.drinks[0].strIngredient4)
		$ (".ingridient5").text(response.drinks[0].strIngredient5)
		$ (".ingridient6").text(response.drinks[0].strIngredient6)
		$ (".ingridient7").text(response.drinks[0].strIngredient7)
		$ (".ingridient8").text(response.drinks[0].strIngredient8)
		$ (".ingridient9").text(response.drinks[0].strIngredient9)
		$ (".ingridient10").text(response.drinks[0].strIngredient10)
		$ (".ingridient11").text(response.drinks[0].strIngredient11)
		$ (".ints").text(response.drinks[0].strInstructions)
		$ (".drinkimg").attr("src",response .drinks[0].strDrinkThumb)
		//strDrinkThumb

		
		
	});
}) 
 