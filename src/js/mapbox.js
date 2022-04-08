mapboxgl.accessToken =
  "pk.eyJ1IjoiYXphbWF0MTk5NyIsImEiOiJja3ViajdzdjIwcmJ5Mm9tdnBma2Rzb2t6In0.yGFJWhvxa_i3X4mHMSRD5w"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([2.3364, 48.86091])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}