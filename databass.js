function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
};

document.getElementById("sub").onclick = function() {myFunction()};
function myFunction(){
    $("form").submit(function(){
      if ( $("input:first").val() === "8037") {
        $('map').show();
        $( "span" ).text( "VALID!" ).show();
      return true;
     }
      $( "span" ).text( "INVALID CODE!" ).show().fadeOut( 1000 );
      event.preventDefault();
    });
}
$(document).ready(function(){
var divscript = "<script>function initMap() {var mapDiv = document.getElementById('map');var map = new google.maps.Map(mapDiv, {zoom: 8,center: new google.maps.LatLng(-34.397, 150.644)})}; </script>";
$(divscript).appendTo('#map');

});
