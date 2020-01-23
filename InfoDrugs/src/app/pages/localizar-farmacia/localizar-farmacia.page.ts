import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MarkerCluster, MyLocation, LocationService, LatLng } from '@ionic-native/google-maps';
import { Farmacia } from '../../model/farmacia';
import { getLocaleCurrencyName } from '@angular/common';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-localizar-farmacia',
  templateUrl: './localizar-farmacia.page.html',
  styleUrls: ['./localizar-farmacia.page.scss'],
})
export class LocalizarFarmaciaPage implements OnInit {
  protected map: GoogleMap;
  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private platform: Platform,
  ) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': {
          "lat": 21.382314,
          "lng": -157.933097
        },
        'zoom': 10
      }
    });
    this.addCluster(this.dummyData());
  }

  addCluster(data) {
    let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
      markers: data,
      icons: [
        {
          min: 3,
          max: 9,
          url: "./assets/markercluster/small.png",
          label: {
            color: "white"
          }
        },
        {
          min: 10,
          url: "./assets/markercluster/large.png",
          label: {
            color: "white"
          }
        }
      ]
    });

    markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
      let marker: Marker = params[1];
      marker.setTitle(marker.get("name"));
      marker.setSnippet(marker.get("address"));
      marker.showInfoWindow();
    });

  }

  dummyData() {
    return [
      {
        "position": {
          "lat": 21.382314,
          "lng": -157.933097
        },
        "name": "Starbucks - HI - Aiea  03641",
        "address": "Aiea Shopping Center_99-115\nAiea Heights Drive #125_Aiea, Hawaii 96701",
        "icon": "assets/markercluster/marker.png"
      }
    ]
  }
}