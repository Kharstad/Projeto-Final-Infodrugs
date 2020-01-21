import { Component } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    /**{
      title: 'List',
      url: '/list',
      icon: 'list'
    },**/
    {
      title: 'Catálogo',
      url: '/catalogo-preco',
      icon: 'list-box'
    },
    {
      title: 'Encontrar farmácias',
      url: '/localizar-farmacia',
      icon: 'map'
    },
    {
      title: 'Cadastre-se',
      url: '/cadastro',
      icon: 'person-add'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'add-remedio',
      url: '/add-remedio',
      icon: 'person'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();
    this.permitir();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#f00")
      this.splashScreen.hide();
    });
  }
  permitir(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.LOCATION).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.LOCATION)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.LOCATION, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }
}
