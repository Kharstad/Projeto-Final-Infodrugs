import { Component, OnInit } from '@angular/core';
import { RemedioService } from '../../services/remedio.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo-preco',
  templateUrl: './catalogo-preco.page.html',
  styleUrls: ['./catalogo-preco.page.scss'],
})
export class CatalogoPrecoPage implements OnInit {
  protected remedios: any;
  constructor(
    protected remedioService: RemedioService,
    protected router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.refreshRemedios();
  }
  apagar(remedios) {
    this.presentAlertConfirm(remedios);
  }
  editar(remedios) {
    this.router.navigate(['/add-remedio/', this.remedios.key])
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.remedioService.getAll().subscribe(
      res => {
        this.remedios = res
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 0);
      }
    );
  }
  refreshRemedios() {
    this.remedioService.getAll().subscribe(
      res => {
        this.remedios = res;
      }
    )
  }
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      message: texto,
      buttons: ['Sendo assim sim']
    });

    await alert.present();
  }
  async presentAlertConfirm(remedios) {
    const alert = await this.alertController.create({
      header: 'Apagar remedio?!',
      message: 'Você quer mesmo apagar?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.remedioService.remove(this.remedios).then(
              res => {
                this.presentAlert("Aviso", "Apagado com sucesso!");
                this.refreshRemedios();
              },
              erro => {
                this.presentAlert("Erro", "num deu pra apagar o game");
              }
            )
          }
        }
      ]
    });

    await alert.present();
  }

}