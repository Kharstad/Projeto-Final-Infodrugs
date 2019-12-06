import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MarkerCluster, MyLocation, LocationService, LatLng } from '@ionic-native/google-maps';
import { Farmacia } from '../../model/farmacia';

@Component({
  selector: 'app-localizar-farmacia',
  templateUrl: './localizar-farmacia.page.html',
  styleUrls: ['./localizar-farmacia.page.scss'],
})
export class LocalizarFarmaciaPage implements OnInit {
  protected map: GoogleMap;
  constructor(
    protected farmacia: Farmacia = new Farmacia,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private platform: Platform,
  ) { }

  async ngOnInit() {
    await this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': {
          "lat": this.farmacia.lat,
          "lng": this.farmacia.lng,
        },
        'zoom': 18
      }
    });
    //this.addCluster(this.dummyData());
    this.minhaLocalizacao();
  }
  minhaLocalizacao() {
    LocationService.getMyLocation().then(
      (myLocation: MyLocation) => {
        this.map.setOptions({
          camera: {
            target: myLocation.latLng
          }
        })
        //marcadores
        let marker: Marker = this.map.addMarkerSync({
          position: {
            lat: myLocation.latLng.lat,
            lng: myLocation.latLng.lng
          },
          icon: "#00ff00",
          title: this.farmacia.nome,
          snippet: this.farmacia.nickname,
        })
        //adicionar eventos ao mapa
        this.map.on(GoogleMapsEvent.MARKER_CLICK).subscribe(
          res => {
            marker.setTitle(this.farmacia.nome)
            marker.setSnippet(this.farmacia.nickname)
            marker.showInfoWindow()
          }
        )
        //colocar pontos extras
        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
          res => {
            console.log(res)
            // this.map.addMarker({
            //   position: {
            //     lat: res[0].lat,
            //     lng: res[0].lng
            //   }
            // })
            marker.setPosition(res[0])
          }
        )
      }
    );
  }
}

