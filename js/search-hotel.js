function init() {
  var e = {
    zoom: 9,
    mapTypeControl: !1,
    zoomControl: !0,
    scrollwheel: !1,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    streetViewControl: !1,
    center: new google.maps.LatLng(34.831793, -111.762655)
  };
  map = new google.maps.Map(mapElement, e);
  new google.maps.Marker({
    position: new google.maps.LatLng(34.869977, -111.760947),
    map: map,
    optimized: !1
  });
  m_res()
}

function m_res() {
  google.maps.event.trigger(map, "resize"), map.panTo(new google.maps.LatLng(34.831793, -111.762655))
}

var mapElement = document.getElementById("map"),
  formOpen = document.querySelector(".form-search-show"),
  formSearch = document.querySelector(".form-search");

if (formOpen && (formSearch && formSearch.classList.add("form-search--show"), formOpen.addEventListener("click", function (e) {
    e.preventDefault(), formSearch.classList.toggle("form-search--show"), formSearch.classList.toggle("form-search--hide")
  })), mapElement) {
  var map = "";
  google.maps.event.addDomListener(window, "load", init), google.maps.event.addDomListener(window, "resize", m_res)
}
