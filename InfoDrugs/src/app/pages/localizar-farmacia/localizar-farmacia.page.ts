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

  async ngOnInit() {}

}