<!DOCTYPE html >
  <head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Info-Drugs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="mapa.css">
    <script src="main.js"></script>
    <link rel="shortcut icon" href="imgs/a.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body style="background-color:  #A2DBCD;">
<header class="text-center">
<img src="imgs/logo.png" style="width: 12rem; height: 12rem">
</header>

<hr>
<nav  class="text-center">
    <h4 class="d-inline"><a class="p-4 text-dark" href="index.php">Início</a></h4>
    <h4 class="d-inline"><a class="p-4 text-dark" href="form.php">Pesquisar bula do medicamento</a></h4>
    <h4 class="d-inline"><a class="p-4 text-dark" href="mapa.php">Farmácias Proximas</a></h4>
</nav>

    <hr>
    <div id="map"></div><h4>
<hr>
<div align="center">
  <a class="buttonc" href="cadastrar.php">Cadastrar</a>
</div>


    <script>
      var customLabel = {
        restaurant: {
          label: 'R'
        },
        bar: {
          label: 'B'
        }
      };

        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(-25.494938, -49.294372),
          zoom: 5
        });
        var infoWindow = new google.maps.InfoWindow;

          // Change this depending on the name of your PHP or XML file
          downloadUrl('resultado.php', function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              var name = markerElem.getAttribute('name');
              var address = markerElem.getAttribute('address');
              var type = markerElem.getAttribute('type');
              var point = new google.maps.LatLng(
                  parseFloat(markerElem.getAttribute('lat')),
                  parseFloat(markerElem.getAttribute('lng')));

              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = address
              infowincontent.appendChild(text);
              var icon = customLabel[type] || {};
              var marker = new google.maps.Marker({
                map: map,
                position: point,
                label: icon.label
              });
              marker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
              });
            });
          });
        }



      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing() {}
    </script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlSV0YyhooOh3RQYrsK111ThLKQX5hdTU&callback=initMap"></script>

<hr>
<footer class="text-light text-center p-2" style="background: rgba(7, 12, 7, 0.808)">
    &copy; 
    Copyright 2019 Info-Drugs.
</footer>

  </body>
</html>