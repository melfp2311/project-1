var movieApi = "http://www.omdbapi.com/?t="
var filmTitleArray = ["coco","Marriage Story", "We are your friends","Burnt",  "The Witch", "Yellow", "The last song", "Parasite","Mississippi Grind", "Aquaman","Under the Skin",
"jojo Rabbit", "Joker","Young Adult", "Avatar", "Titanic","Thor", "Inception","Moonlight", "Jumanji", "1917", "Atlantics", "Ant-man",  "Birdman", "The Social Network", "The Bling Ring",
"Edward Scissorhands","Limitless", "Haywire", "Gone with the Wind", "Little Miss Sunshine","A Dog's Purpose", "The Dirt","Inglourious Basterds", "Blue Valentine", "Valley Girl",
"The Florida Project", "The Irishman", "Private Life", "My Happy Family","Tinker Tailor Soldier Spy","Hector and the Search for Happiness", "A Little Bit of Heaven", "Dreamland",
"The Little Prince", "Searching for Sugar Man", "20th Century Women", "Okja","The Adventures of Tintin", "I Miss You Already", "It Must Be Heaven","Dirty Dancing: Havana Nights",
"In the Heights", "The Sisterhood of the Traveling Pants","Miles Davis: Birth of the Cool", "A Good Woman Is Hard to Find", "Underwater","Behind You","The Captain",
"Shooting Heroin","The Main Event","Bloodshot", "Clemency", "The Way Back", "Resistance", "Uncorked","The Grudge","Swallow","Music and Lyrics", "Lost Girls","Happy Gilmore", "Pulp Fiction",
"La Dolce Vita","Simple Plan: Singing in the Rain","Goodfellas",  "Psycho",  "American Psycho","Lost in Translation","Taxi Driver", "Blue Lagoon", "Bonnie and Clyde","Get Out","Midnight Express",
"The Godfather", "Scarface","Forrest Gump","Life of Pi", "The Tree of Life","King Kong","Saving Private Ryan", "Little Boy", "The Shawshank Redemption", "The Princess Diaries", "The Devil Wears Prada",
"E.T. the Extra-Terrestrial", "Full Metal Jacket", "Django Unchained","The Grand Budapest Hotel", "Pretty Boy","Lady Bird","A Quiet Place", "The Shape of Water","Black Panther","Midnight in Paris",
]          



//un numero random del arrey entre 0 y el lenght
var filmTitle = filmTitleArray[Math.floor(Math.random()* filmTitleArray.length)]
var movieKey = "&apikey=c46b0da4";
var queryURL = movieApi + filmTitle + movieKey;

$.ajax({
    url: queryURL , //to get the input in the link//
    type: "GET", //to get the info from api"
    data:"json", //make data readable
    success: function(data){
    console.log(data)
    console.log(filmTitle)
   
      $(".title").text(data.Title)
      $("#director").text(data.Director )
      $("#genero").text(data.Genre)
      $("#year").text(data.Released )
      $("#duracion").text(data.Runtime)
      $("#rating").text(data.Rated)
      $("#actors").text(data.Actors)
      $("#plot").text(data.Plot)
      
      $("#poster").attr("src", data.Poster) //sacar img url//
     
    }
});
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=HwqP4k8KYoJkUjO5r49DX9pKQS07HFEz&q="+ filmTitle +  "&limit=25&offset=0&rating=G"

$.ajax({
    url: giphyURL , //to get the input in the link//
    type: "GET", //to get the info from api"
    data:"json", //make data readable
    success: function(data){
        console.log(data.data[5])
        $("#giphy").attr("src", data.data[5].images.fixed_height.url)
    }
})
