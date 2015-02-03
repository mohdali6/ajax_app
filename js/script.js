
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    var streetViewURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetViewURL + '" >');

    $greeting.text('So you want to live at ' + address + '?');

    var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=city&api-key=d832f9a9e5b53d70cd6e91beaf5c3d3d:17:71017880'; 

    $.getJSON(nytURL, function (data) {
      console.log(data);
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
