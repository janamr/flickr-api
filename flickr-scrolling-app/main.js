// var photos = newXMLHttpRequest();
// photos.open("GET", "https://api.flickr.com/services/feeds/photos_public.gne");


// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=46832dd48a7e0e680dd3bbf1d8220ad8&safe_search=1&format=json&nojsoncallback=1&auth_token=72157699425159281-117528337d239482&api_sig=df737b4a5c96a72f2858e0cfd8ca7899

// format=JSON;

$(function() {
  // JSON, $.getJSON()
  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl, {
    // options...
    tags: "",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    console.log(data);
    $.each(data.items, function(index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if (index == 24) {
        return false;
      }
    });
    // success
  }).fail(function() {
    // failure
    alert("AJAX call failed")
  })

});

// photos.onload = function() {
//   console.log(photos.responseText);
// };