
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    // load streetview
    var streetViewURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetViewURL + '" >');

    $greeting.text('So you want to live at ' + address + '?');

    //Load NY Times Articles
    var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city 
       + '&sort=newest&api-key=XXXX'; 

    $.getJSON(nytURL, function (data) {
        $nytHeaderElem.text('NY Times Articles About ' + city);

        articles = data.response.docs;

        for (var i = 0; i < articles.length; i++) {
            article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="' + article.web_url + 
                '">' + article.headline.main + '</a>' + 
                '<p>' + article.snippet + '</p></li>'
            );
        }

    });
    
    return false;
};

$('#form-container').submit(loadData);

// loadData();
