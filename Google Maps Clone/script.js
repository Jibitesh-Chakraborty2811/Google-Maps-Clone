mapboxgl.accessToken = 'pk.eyJ1IjoiamliaXRlc2gyODExIiwiYSI6ImNsMWJrb3pvbTAzdXQzYnFsZTIzNGFuZzgifQ.Urw9bO3aGM8_NOzPXxf4LQ';

   navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})

   function successLocation(position){
       
        console.log(position);
        setupMap([position.coords.longitude, position.coords.latitude]);
   }

   function errorLocation(){
       setupMap([88.3639,22.5726]);

   }

   function setupMap(center)
   {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : center,
        zoom : 14
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);

        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            
          });
          
          
          
        map.addControl(directions, 'top-left');
   }
    