var photos = newXMLHttpRequest();
photos.open("GET", "https://api.flickr.com/services/feeds/photos_public.gne");

format=JSON;

photos.onload = function() {
  console.log(photos.responseText);
};