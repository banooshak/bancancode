$(document).ready(function(){
	 getAllRecipes();
	 $(window).on('scroll resize', check_if_in_view);
});

function renderRecipes(data){
	$("div.mainBox").remove();
	for (var i=0; i< data.recipes.length; i++){
		var mainBox= $("<div class=\"mainBox\"></div>");
		var textBox = $("<div class=\"textBox transformText\"></div>");
		var titleRecipe = $("<div class=\"titleRecipe\">"+data.recipes[i].title+"</div>");
		var descRecipe = $("<div class=\"descRecipe\">"+data.recipes[i].short_description+"</div>");
		textBox.append(titleRecipe);
		textBox.append(descRecipe);
		var imageBox = $("<div class=\"imageBox transformImg\"></div>");
		imageBox.append("<img src="+data.recipes[i].image_url+">");
		var readMoreButt = $("<div class=\"readMoreButt\"></div>");
		imageBox.append(readMoreButt);
		readMoreButt.append("<a href=\"#\">Read More</a>");
		mainBox.append(textBox).append(imageBox);
		$("div.lowerBox").before(mainBox);
	}
  	check_if_in_view();
}


function check_if_in_view() {
   var animation_elements = $('.imageBox');

  var window_height = window.innerHeight;
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each(animation_elements, function() {
    var element = $(this);
    var element_height = element.outerHeight();
    var element_top_position = element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_top_position >= window_top_position) &&
        (element_bottom_position <= window_bottom_position)) {
      	element.removeClass('transformImg');
  		element.prev().removeClass('transformText');
    } else {
      element.addClass('transformImg');
      element.prev().addClass('transformText');
    }
  });
}

function getAllRecipes(){
	$.ajax({
		method: "get",
		dataType: "json",
		url: "/ajax_practice/BanCanCode/data/allRecipes_sample.json",
		success: function(data){
			renderRecipes(data);
		},
		error: function(xhr, status, error){
			console.log(status);
			console.log(error);
		}
	});
}









// var allRecipes = {"recipes": [
// {
// 	"id": 12,
// 	"title": "Grilled Steake with Vegetables",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Fish",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Meat",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Veggies",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Pasta",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Trouts",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Tilapia",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Salmon",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "Chicken Lemon",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// },
// {
// 	"id": 18,
// 	"title": "chicken Kebab",
// 	"image_url": "images/picFood.png",
// 	"short_description": "A lemon marinade is a triple threat: It flavors vegetables before grilling, then makes the base for a tangy dressing to use tonight and for Zesty Pork Sandwiches."
// }
// ]};




