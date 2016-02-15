$(document).ready(init);
var s;

function init(){
	getAllRecipes();
}

function renderRecipes(data){
	$("div.mainBox").remove();
	for (var i=0; i< data.recipes.length; i++){
		var mainBox= $("<div class=\"mainBox\"></div>");
		var textBox = $("<div class=\"textBox\" data-200-top=\"opacity: 0\" data-300-top=\"opacity:1\" data--100-bottom=\"opacity:1\" data-bottom=\"opacity:0 \"></div>");
		var titleRecipe = $("<div class=\"titleRecipe\">"+data.recipes[i].title+"</div>");
		var descRecipe = $("<div class=\"descRecipe\">"+data.recipes[i].short_description+"</div>");
		textBox.append(titleRecipe);
		textBox.append(descRecipe);
		var imageBox = $("<div class=\"imageBox\" " + 
												" data--200-top=\"opacity: 0.3; transform: scale(0.7) translateX(60%) translateY(30%);\" " + 
												" data-top=\"opacity: 1; transform: scale(1) translateX(100%) translateY(0%);\" " + 
												" data-bottom=\"opacity: 1; transform: scale(1) translateX(100%) translateY(0%) \" " + 
												" data-130-bottom=\"opacity: 0.3; transform: scale(0.7) translateX(60%) translateY(0%)\"></div>");



		// var imageBox = $("<div class=\"imageBox\" data-top=\"opacity: 1; transform[cubic]: scale(1); left: 40%; top:0%\" " + 
		// 										" data--200-top=\"opacity: 0.3; transform[cubic]: scale(0.7);left: 20%; top:20%\" " + 
		// 										" data-bottom=\"opacity: 1; transform[cubic]: scale(1); left: 40%\" " + 
		// 										" data-130-bottom=\"opacity: 0.3; transform[cubic]: scale(0.7);left: 20%\"></div>");


		imageBox.append("<img src="+data.recipes[i].image_url+">");
		var readMoreButt = $("<div class=\"readMoreButt\" data-45p-top=\"opacity:0\" "+
														" data-55p-top=\"opacity:1\" " + 
														" data-85p-top=\"opacity:1\" " + 
														" data-95p-top=\"opacity:0\"></div>");
		readMoreButt.append("<a href=\"recipeDetail.html\">Read More</a>");
		mainBox.append(imageBox);
		mainBox.append(textBox)
		mainBox.append(readMoreButt);
		// mainBox.append(textBox).append(imageBox);
		$("div.lowerBox").before(mainBox);
	}

	 //FadeIn all sections   
	$('body').imagesLoaded(renderParallax);
}


function renderParallax(){

	enquire.register("screen and (min-width: 768px)", {
	    match : function() {
	        enableSkrollr();
	    },  
	    unmatch : function() {
	        disableSkrollr();
	    }
	});

	// initParallax();
	setTimeout(function() {
		$('body').removeClass('loading').addClass('loaded');
	}, 600);
}

// function initParallax(){
// 	var inputParam = {
// 			render:function(data){
// 				//log the current scroll position.
// 				// console.log(data.curTop);
// 				// $("#offset").text(data.curTop);
// 			},
// 			forceHeight:false
// 		};
		
// 	s = skrollr.init(inputParam);	
// }



function enableSkrollr(){
	console.log('we are on desktop');

	// Enable Skroll only for non-touch devices
	s = skrollr.init({
        forceHeight: false
    	});
}

function disableSkrollr(){
	console.log('we are on mobile');

	// Destroy Skrollr
	s = skrollr.init();
	s.destroy();
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









