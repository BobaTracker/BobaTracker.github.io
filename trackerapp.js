// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', '', true);

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send();

// <!-- here.com API -->
// <script src="http://js.api.here.com/v3/3.0/mapsjs-core.js"
// type="text/javascript" charset="utf-8"></script>
// <script src="http://js.api.here.com/v3/3.0/mapsjs-service.js"
// type="text/javascript" charset="utf-8"></script>
//
// <!-- makes it fit on mobile screens -->
// <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//
// <!-- optimizes performance on mobile devices -->
// <meta name="viewport" content="initial-scale=1.0
//   width=device-width" />
//   <script src="http://js.api.here.com/v3/3.0/mapsjs-core.js"
//   type="text/javascript" charset="utf-8"></script>
//   <script src="http://js.api.here.com/v3/3.0/mapsjs-service.js"
//   type="text/javascript" charset="utf-8"></script>
//
// <!--creates a map object-->
// <div style="width: 640px; height: 480px" id="mapContainer"></div>
//
// <!-- communicating with the back-end stuff on here.com -->
// <script>
//   var platform = new H.service.Platform({
//     'app_id': 'T2cATc8UwSoArF5qfnSc',
//     'app_code': 'T_aSE7_-I0YOKpxRuAND7w'
//   });
//
//   // Obtain the default map types from the platform object
//   var maptypes = platform.createDefaultLayers();
//
//   // Instantiate (and display) a map object:
//   var map = new H.Map(
//     document.getElementById('mapContainer'),
//     maptypes.normal.map,
//     {
//       zoom: 10,
//       center: { lng: 13.4, lat: 52.51 }
//     });
//
//     </script>
