import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { FarmaciaService } from '../../services/farmacia.service';
import { Farmacia } from '../../model/farmacia';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  MarkerCluster,
  LocationService,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-add-farmacia',
  templateUrl: './add-farmacia.page.html',
  styleUrls: ['./add-farmacia.page.scss'],
})
export class AddFarmaciaPage implements OnInit {

  protected farmacia: Farmacia = new Farmacia;
  protected id: any = null;
  protected posLat: number = 0;
  protected posLng: number = 0;
  protected map: GoogleMap;

  constructor(
    protected router: Router,
    protected alertController: AlertController,
    protected farmaciaService: FarmaciaService,
    protected geolocation: Geolocation,
    protected platform: Platform,
    protected activatedRoute: ActivatedRoute,

  ) { }

  async ngOnInit() {
    // Localização atual
    this.localAtual();
    // Plataforma e GoogleMaps
    await this.platform.ready();
    await this.loadMap();
    // Pega Id para autilaização dos dados do Usuário
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onsubmit(form) {
    this.farmacia.lat = this.posLat;
    this.farmacia.lng = this.posLng;
    if (!this.id) {
      this.farmaciaService.save(this.farmacia).then(
        res => {
          form.reset();
          this.farmacia = new Farmacia;
          console.log('Cadastrado!');
          this.presentAlert('Aviso', 'Cadastrado!')
          this.router.navigate(['/']);
        },
        erro => {
          console.log('Erro: ' + erro);
          this.presentAlert('Erro', 'Não foi possivel cadastrar!')
        }
      )
    } else {
      this.farmaciaService.update(this.farmacia, this.id).then(
        res => {
          form.reset();
          this.farmacia = new Farmacia;
          this.presentAlert('Aviso', 'Atualizado!')
          this.router.navigate(['/tabs/perfilFarmacia', this.id]);
        },
        erro => {
          console.log('Erro: ' + erro);
          this.presentAlert('Erro', 'Não foi possivel atualizar!')
        }
      )
    }
  }

  localAtual() {
    this.geolocation.getCurrentPosition().then(
      resp => {
        this.posLat = resp.coords.latitude;
        this.posLng = resp.coords.longitude;
      }).catch(
        error => {
          console.log('Não foi possivel pegar sua localização!', error);
        });
  }

  // Alerts-------------------
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      // subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': {
          "lat": this.posLat,
          "lng": this.posLng
        },
        'zoom': 15
      }
    });
    // this.addCluster(this.dummyData());
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
        // Adiciona marcador no Mapa
        let marker: Marker = this.map.addMarkerSync({
          position: {
            lat: myLocation.latLng.lat,
            lng: myLocation.latLng.lng
          },
          icon: '#00ff00',
          title: 'Titulo',
          snippet: 'Comentário'
        })
        // adicionar eventos no mapa
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(
          res => {
            marker.setTitle(this.farmacia.nome)
            marker.setSnippet(this.farmacia.nickname)
            marker.showInfoWindow()
          }
        )
        // colocar pontos extras
        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
          res => {
            this.map.addMarker({
              position: {
                lat: res[0].lat,
                lng: res[0].lng
              }
            })
          }
        )
      }
    )
  }


}
