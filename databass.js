document.getElementById("comein").onclick = function() {myFunction2()};
function myFunction2() {
  $("#signup").toggle();
  return false;
}
var signupev = myFunction2();
$(signupev).appendTo('#signup');

function myFunction(){
    $("form").submit(function(){
      if ( $("input:first").val() === "8037") {
        $("#map").show();
        $( "span" ).text( "VALID!" ).show();
        return false;
     }
      $("#map").hide();
      $( "span" ).text( "INVALID CODE!" ).show().fadeOut( 1000 );
      event.preventDefault();
    });
}

function initMap() {
          var myLatlng = {lat: 37.510942, lng: -77.459601};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: myLatlng,
            gestureHandling: 'greedy'
          });
   var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title: 'Click to zoom'
   });

   map.addListener('center_changed', function() {
     // 3 seconds after the center of the map has changed, pan back to the
     // marker.
     window.setTimeout(function() {
       map.panTo(marker.getPosition());
     }, 3000);
   });

   marker.addListener('click', function() {
     map.setZoom(10);
     map.setCenter(marker.getPosition());

     var divscript = initMap();
     $(divscript).appendTo('#map');

   });

document.getElementById("sub").onclick = function() {myFunction()};
}
