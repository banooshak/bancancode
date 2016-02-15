

$(document).ready(function(){
  //renderMockJson();
  getRecipeDetails();
});

function renderMockJson(){
  var mockJson = {
    "id": "12",
    "title": "Recipe Name Lorem",
    "image_url": "images/bread.png",
    "total_time":"30 mins",
    "prep_time":"30 mins",
    "cook_time":"2 hrs",
    "my_opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "ingredients": [{"quantity":1, "uom":"tablespoon","item":"olive oil"},
    {"quantity":2, "item":"carrots ,diced"},
    {"quantity":2, "item":"onions"},
    {"quantity":1, "uom":"tablespoon","item":"salt"},
    {"quantity":1,"item":"zuccini diced"}],
    "directions": [{"step": "Heat olive oil in a large stock pot over medium heat. Add carrots, onions and salt and saute 5-10 minutes."}, 
    {"step": "Add zucchini, jalapeño, bell pepper, and chili peppers and continue sautéing  5 minutes."},
    {"step": "Add garlic and seasonings (including brown sugar) and saute 1-3 more minutes."},
    {"step": "Add garlic and seasonings (including brown sugar) and saute 1-3 more minutes."},
    {"step": "Add broth, espresso, beer, beans, tomato paste, and diced tomatoes and  simmer for 30 minutes-1 hour."}]
  }

  renderRecipeDetail(mockJson);
}

function renderRecipeDetail(recipeDetail){

  $("div.recipeDtShortInfo span").html(recipeDetail.title);
  $(".recipeImage").attr("src", recipeDetail.image_url);
  $("div#js-total_time span").html(recipeDetail.total_time);

  $("#js-prep").html("Prep. ---------------- "+recipeDetail.prep_time);
  $("#js-cook").html("Cook ---------------- "+recipeDetail.cook_time);

  $("#opinion").html(recipeDetail.my_opinion);

  $("#ingredients").empty();

  for(var i=0; i<recipeDetail.ingredients.length; i++){
    var item = "<li><span>"+ recipeDetail.ingredients[i].quantity + " </span>";
    if (recipeDetail.ingredients[i].uom != undefined || recipeDetail.ingredients[i].uom != null) {
      item += recipeDetail.ingredients[i].uom;
    }
    item += "<a href=\"#\"> "+recipeDetail.ingredients[i].item+"</a></li>";

    $("#ingredients").append(item);
  }

  $("#directions").empty();

  for(var j=0; j<recipeDetail.directions.length;j++){
    var step = "<li>"+recipeDetail.directions[j].step+"</li>";
    $("#directions").append(step);
  }

}

function getRecipeDetails(){
	$.ajax({
		method: "get",
  	dataType: "json",
		url: "/ajax_practice/recipeDetail/recipeDetail_sample.json",
  	// success: renderRecipes,
  	success: function(data) {
			renderRecipeDetail(data);
		},
		error: function(xhr, status, error) {
			console.log(status);
			console.log(error);  		
		}
  });
}





