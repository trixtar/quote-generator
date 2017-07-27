// VARIABLES

var colors = ['#306754', '#A52A2A', '#D2691E', '#DC143C', '#00008B', '#006400', '#8B0000', '#483D8B', '#2F4F4F', '#9400D3', '#008000', '#FF4500'];

var quote = {};


// FUNCTIONS

// Get Random Integer

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// New Quote

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
			quote.text = data.quoteText;
			if (data.quoteAuthor) {
				quote.author = ' - ' + data.quoteAuthor;
			} else {
				quote.author = ' - Unknown';
			}

			var chunk = '';
			chunk += '<div class="quote-text"><i class="fa fa-quote-left"></i><span id="quote" class="quote">';
			chunk += quote.text + '</span></div><div class="quote-author text-right"><span id="author" class="author">';
			chunk += quote.author + '</span></div>';

			$('#fullquote').html(chunk);
			
			var col = getRandomInt(0,colors.length);
			$('main').css('backgroundColor', colors[col]);
			$('.quote-text').css('color', colors[col]);
			$('.author').css('color', colors[col]);
		}
	});
}; //newQuote


// TruncateTweet

function truncateTweet(arr, num) {
    var trunc = arr.splice(0, arr.length-num).join('').concat('...');
    return trunc;
}

var textArray = [];

function tweetQuote() {
	textArray = quote.text.split('').slice(0, -1);
	var suma = textArray.length + quote.author.length;
	if (suma > 140) {
		var surplus = suma - 140 + 3;
		quote.text = truncateTweet(textArray, surplus);
	} else {quote.text = textArray.join('')}
	quote.tweet = quote.text + quote.author;
	quote.tweetCode = (quote.tweet).split(' ').join('%20');
	$('#twitter').attr('href','https://twitter.com/intent/tweet/?text=' + quote.tweetCode);
	console.log(quote.tweet);
	console.log(quote.tweetCode);
}






// DOCUMENT READY

$(document).ready(function(){

	newQuote();


$('#new-quote').on('click', function(){
	newQuote();

}); // new-quote


$('#twitter').on('click', function(){

	if (quote) {
		tweetQuote();
		var url = 'https://twitter.com/intent/tweet/?text=' + quote.tweetCode;
		window.location.href = url;
	} else {
		alert('Generate a new quote first!')
	}


}); // twitter


}); // document.ready


