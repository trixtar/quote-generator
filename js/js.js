// FUNCTIONS

// New Quote

function newQuote(){

	/*
	Primero tuve que cambiar el datatype a jsonp porque si no me tiraba error de cross domain (ni idea)
	*/

	$.ajax({
		type: 'GET',
		contentType: "application/javascript",
		crossDomain: true,
		dataType: 'jsonp',
		jsonp: 'jsonp-callback', 
		url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',

		/*
		Si le agrego una cosita a la url me trae algo, pero me da error (mycallback no está definido) y no sé cómo corregirlo:
		url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
		*/

		success: function(response){
			console.log('Success: ' + response);
		},
		error: function(response){
			console.log('Error: ' + response);
		},
		cache: false
	});

};



// DOCUMENT READY

$(document).ready(function(){


$('#new-quote').on('click', function(){
	newQuote();

}); // new-quote


$('#twitter').on('click', function(){


}); // twitter


}); // document.ready


