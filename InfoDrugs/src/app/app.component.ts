import { Component } from '@angular/core';

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
      title: 'Add-remedio',
      url: '/add-remedio',
      icon: 'medical'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
