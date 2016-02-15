$(document).ready(init);


function init (){
	addIngredients();
	addDirections();

	 $(".formTable").on("click", "button.js-delete", function(){
		$(this).parent().parent().remove();
	});

	 $(".formTableDirect").on("click", "button.js-deleteDirect", function(){
		$(this).parent().parent().remove();
	});

	 $("form").submit(submitForm);
}

function getIngArray() {
	var ings = new Array();
	$(".formTable .rowTable").each(function(index) {
		if (index != 0) {
			var ingredient = { item: $(this).find("[name='item']").val(),
					quantity: $(this).find("[name='quantity']").val(),
					uom: $(this).find("[name='uom']").val()
				};
			ings.push(ingredient);
		}
	});
	return ings;
}

function getDirArray() {
	var directions = new Array();
	return directions;
}

function prepereData(){
    var data;
    data = {title: $("[name='title']").val(),
			image_url: $("[name='image_url']").val(),
			total_time: $("[name='total_time']").val(),
			prep_time: $("[name='prep_time']").val(),
			cook_time: $("[name='cook_time']").val(),
			my_opinion: $("[name='my_opinion']").val(),
			ingredients: getIngArray(),
			directions: getDirArray()
		};

    return JSON.stringify(data);
}

function saveDataInDB(jsonData) {
	$.ajax({
		method: "post",
  		dataType: "json",
		url: "saveDataUrl",
		data: jsonData,
  		success: function(data) {
			alert("Data is saved!");
		},
		error: function(xhr, status, error) {
			console.log(status);
			console.log(error);  		
		}
  });
}

function submitForm(){
	console.log("Preventing Form Submission!");

	var prepData = prepereData(); 
	saveDataInDB(prepData);

	return false;
}

function addDirections(){
	$("button#addDirections").click(function(){
		var rowTableDirect = $("<div class=\"rowTableDirect\"></div>"); 

		var step = $("<div class=\"tableTitleDirect tableInput\"></div>");
		step.append("<input type=\"text\" name=\"step\" placeholder=\"step\">");

		var description = $("<div class=\"tableTitleDirect desCell tableInput\"></div>");
		description.append("<input type=\"text\" name=\"description\" placeholder=\"description\">");

		var deleteBoxDirect = $("<div class=\"deleteBoxDirect deleteButt\"></div>");
		deleteBoxDirect.append("<button type=\"button\" class=\"js-deleteDirect\">Delete</button>");

		rowTableDirect.append(step);
		rowTableDirect.append(description);
		rowTableDirect.append(deleteBoxDirect);

		$(".rowTableDirect:last-child").after(rowTableDirect);
	});
}


function addIngredients(){
	$("button#addIngredients").click(function(){
		var rowTable = $("<div class=\"rowTable\"></div>");

		var item = $("<div class=\"tableTitle tableInput\"></div>");
		item.append("<input type=\"text\" name=\"item\" placeholder=\"Item\">");

		var quantity = $("<div class=\"tableTitle tableInput\"></div>");
		quantity.append("<input type=\"text\" name=\"quantity\" placeholder=\"Quantity\">");

		var uom = $("<div class=\"tableTitle tableInput\"></div>");
		uom.append("<input type=\"text\" name=\"uom\" placeholder=\"UOM\">");

		var deleteBox = $("<div class=\"deleteBox deleteButt\"></div>");
		deleteBox.append("<button type=\"button\" class=\"js-delete\">Delete</button>");


		rowTable.append(item);
		rowTable.append(quantity);
		rowTable.append(uom);
		rowTable.append(deleteBox);

		$(".rowTable:last-child").after(rowTable);


		// $("button.js-delete").click(function(){
		// 	$(this).parent().parent().remove();
		// });

	});
}

 

