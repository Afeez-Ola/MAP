function initMap() {
    var locations = [
        ['Ojota school', 6.581998, 3.376204, 1],
        ['Ikeja city mall', 6.614519, 3.355585, 2],
        ['city hall', 6.446667, 3.4, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(6.581998, 3.376204),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    };
};