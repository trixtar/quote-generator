// FUNCTIONS

// New Quote

function newQuote(){	

	$.ajax({
		type: 'GET',
		contentType: "application/javascript",
		crossDomain: true,
		dataType: 'jsonp',
		jsonp: 'callback', 
		jsonpCallback: 'quotes',
		url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=quotes',
		cache: false,
	});

}; 

function quotes (data) {
	var quote = data;
	console.log('cita: ' + quote.quoteText);
	console.log('autor: ' + quote.quoteAuthor);
}



// DOCUMENT READY

$(document).ready(function(){


$('#new-quote').on('click', function(){
	newQuote();

}); // new-quote


$('#twitter').on('click', function(){


}); // twitter


}); // document.ready


