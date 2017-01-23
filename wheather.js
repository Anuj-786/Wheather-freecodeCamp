var lat;
var long;
function mapbox() {
 L.mapbox.accessToken = 'pk.eyJ1IjoiYW51ai03ODYiLCJhIjoiY2lwcWd4cXltMDYyaWZ1bTM0cHFmaGhucSJ9.x3NgVTbDzK_K8tCZTFG-pg';

 var map = L.mapbox.map('map', 'mapbox.streets');

 map.locate({setView: true, maxZoom: 10});

              // Create a featureLayer that will hold a marker and linestring.
              var featureLayer = L.mapbox.featureLayer().addTo(map);
              var secondFeatureLayer = L.mapbox.featureLayer().addTo(map);
              
              map.locate();

              map.on('locationfound', function(e) {

              	map.fitBounds(e.bounds);

              	featureLayer.setGeoJSON({
              		type: 'Feature',
              		geometry: {
              			type: 'Point',
              			coordinates: [e.latlng.lng, e.latlng.lat]
              		},
              		properties: {
              			'title': 'Here I am!',
              			'marker-color': '#ff8888',
              			'marker-symbol': 'star'
              		}
              		
              	});
              	long = e.latlng.lng;
              	lat = e.latlng.lat;
              		//console.log("longitude: " + " "+ lat + "latitude: " + " "+ long);

            	// And hide the geolocation button
            	//geolocate.parentNode.removeChild(geolocate);
            });
            }
            mapbox();
            function gettingJSON(){
             
             console.log("longitude: " + " "+ lat + "latitude: " + " "+ long);
             document.write("jquery loaded");
          	//
          	console.log("http://api.openweathermap.org/data/2.5/weather?lat="+ lat+"&lon="+long+"&appid=dd5262af1afc2fe8ddfa572282ed0691")

          	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=dd5262af1afc2fe8ddfa572282ed0691",function(json){
          		// console.log(JSON.stringify(json));
          		var temperature = json.main.temp - 273.15;
          		alert (temperature + " " +"\xB0C")

          	});
          }