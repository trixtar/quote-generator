// FUNCTIONS

// New Quote

var quote;

function newQuote(){	

	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsonp',
		url: 'http://api.forismatic.com/api/1.0/',
		data: {
			method: 'getQuote',
			format: 'jsonp',
			lang: 'en',
		},
		success: function(data) {
			quote = data;
			console.log(quote);
		}

	});

}; 




// DOCUMENT READY

$(document).ready(function(){

	newQuote();


$('#new-quote').on('click', function(){
	newQuote();

}); // new-quote


$('#twitter').on('click', function(){

	if (quote) {

	} else {
		alert('Get a quote first!')
	}


}); // twitter


}); // document.ready


