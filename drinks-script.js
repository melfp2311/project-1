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
		var ingridients = [response.drinks[0].strIngredient1,
		response.drinks[0].strIngredient2,
		response.drinks[0].strIngredient3,
		response.drinks[0].strIngredient4,
		response.drinks[0].strIngredient5,
		response.drinks[0].strIngredient6,
		response.drinks[0].strIngredient7,
		response.drinks[0].strIngredient8,
		response.drinks[0].strIngredient9,
		response.drinks[0].strIngredient10,
		response.drinks[0].strIngredient11,
		response.drinks[0].strIngredient12,
		response.drinks[0].strIngredient13,
		response.drinks[0].strIngredient14,
		response.drinks[0].strIngredient15,]
		function removeItemAll(arr, value) {
			var i = 0;
			while (i < arr.length) {
				if(arr[i] === value) {
					arr.splice(i, 1);
				} else {
					++i;
				}
			}
			return arr;
		}
		var ingstr = removeItemAll(ingridients, null)
		ingstr = ingstr.join(", ")
		console.log(ingstr)


		$ (".drinkName").text(response.drinks[0].strDrink)
		$ (".listing").text(ingstr)
		$ (".ints").text(response.drinks[0].strInstructions)
		$ (".drinkimg").attr("src",response .drinks[0].strDrinkThumb)//
		//strDrinkThumb

		
		
	});
}) 
 