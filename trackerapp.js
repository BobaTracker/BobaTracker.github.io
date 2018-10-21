var platform = new H.service.Platform({
  'app_id':'{QQjKXhhY1a8BYAFP4jZE}',
  'app_code':'{uVR5qT32JAnHax6QIA-9EA}'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom:10,
    center: { lat: 52.5, lng: 13.4 }
  });
