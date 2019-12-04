import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RemedioService } from '../../services/remedio.service';

@Component({
  selector: 'app-catalogo-preco',
  templateUrl: './catalogo-preco.page.html',
  styleUrls: ['./catalogo-preco.page.scss'],
})
export class CatalogoPrecoPage implements OnInit {
  protected remedio: any;
  constructor(
    protected remedioService: RemedioService,
    protected router:Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.refreshPlayers();
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.remedioService.getALL().subscribe(
      res => {
        this.remedio = res
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }
  refreshPlayers(){
    this.remedioService.getALL().subscribe(
       res => {
     this.remedio = res;
       }
     )
    }

  async presentAlert(tipo:string, texto:string) {
  const alert = await this.alertController.create({
    header: tipo,
    message: texto,
    buttons: ['Sendo assim sim']
  });

  await alert.present();
  }
  }
