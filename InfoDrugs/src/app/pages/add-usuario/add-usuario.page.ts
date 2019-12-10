import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Usuario } from '../../model/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Platform, LoadingController, AlertController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MarkerCluster, MyLocation, LocationService, LatLng } from '@ionic-native/google-maps';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  protected id: any = null;
  protected usuario: Usuario = new Usuario;
  protected map: GoogleMap;

  constructor(
    protected usuarioService: UsuarioService,
    private platform: Platform,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private geolocation: Geolocation,
  ) { }

  async ngOnInit() {
    //this.localAtual();
    await this.platform.ready();
    await this.loadMap();

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res
        },
        erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.usuario.lat = resp.coords.latitude;
      this.usuario.lng = resp.coords.longitude;
      console.log(resp)
    }).catch((error) => {
      this.usuario.lat = 0;
      this.usuario.lng = 0;
      console.log('Error getting location', error);
    });
    if (!this.id) {
      this.usuarioService.save(this.usuario).then(
        res => {
          console.log("Cadastrado");
          this.presentAlert("Sucesso", "Cadastro realizado!");
          form.reset();
          this.router.navigate(['home']);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Ops!", "Erro: Cadastro não atualizado!")
        }
      )
    } else {
      this.usuarioService.update(this.usuario, this.id).then(
        res => {
          this.presentAlert("Sucesso", "Cadastro atualizado!");
          form.reset();
          this.router.navigate(['home']);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Ops!", "Erro: Cadastro não atualizado!")
        }
      )
    }
  }
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      message: texto,
      buttons: ['Okay']
    });
  
    await alert.present();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': {
          "lat": this.usuario.lat,
          "lng": this.usuario.lng,
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
          title: this.usuario.nome,
          snippet: this.usuario.nickname,
        })
        //adicionar eventos ao mapa
        this.map.on(GoogleMapsEvent.MARKER_CLICK).subscribe(
          res => {
            marker.setTitle(this.usuario.nome)
            marker.setSnippet(this.usuario.nickname)
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
  



