let startPage = function () {

//   var keyData = "0451526538";
//
// var url = "https://openlibrary.org/api/books" + keyData +"&jscmd=details&callback=mycallback";

$('#lookup-openlib').submit(function (ev) {
	ev.preventDefault();

  var isbn = 'ISBN:' + $('#isbn').val();

  $.ajax({
  	url: "https://openlibrary.org/api/books?jscmd=details&callback=?",
    data: { bibkeys: isbn },
    dataType: "jsonp",
    success: function (data) {
      var bookInfo = data[isbn];

      $('#book-info-url').text(bookInfo.info_url);
      //$('#book-isbn-10').text(bookInfo.details.isbn_10[0]);
      $('#book-title').text(bookInfo.details.title);
    //  $('#author').text(bookInfo.number_of_pages);

    	$('#book-json').text(JSON.stringify(data, null, 2));
    }
  })
});}

window.onload = startPage;
