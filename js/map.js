var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.9322991, lng: -97.2342986},
          zoom: 17
        });

 var map = new google.maps.Map($("#map-canvas")[0], mapOptions);

  // listen for the window resize event & trigger Google Maps to update too
  $(window).resize(function() {
    // (the 'map' here is the result of the created 'var map = ...' above)
    google.maps.event.trigger(map, "resize");
  });
      }
