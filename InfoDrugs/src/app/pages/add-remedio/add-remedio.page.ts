import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Remedio } from '../../model/remedio';
import { RemedioService } from '../../services/remedio.service';

@Component({
  selector: 'app-add-remedio',
  templateUrl: './add-remedio.page.html',
  styleUrls: ['./add-remedio.page.scss'],
})
export class AddRemedioPage implements OnInit {
  protected remedio: Remedio = new Remedio;
  protected id: any = null;

  constructor(
    public alertController: AlertController,
    protected remedioService: RemedioService,
    public loadingController: LoadingController,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    private platform: Platform,

  ) { }

  async ngOnInit() {
    await this.platform.ready();

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.remedioService.get(this.id).subscribe(
        res => {
          this.remedio = res
        },
        erro => this.id = null
      )
    }
  }

  onsubmit(form) {
      if (!this.id) {
        this.remedioService.save(this.remedio).then(
          res => {
            //console.log("Cadastrado");
            this.presentLoading();
            this.presentAlert("Deu bom confia", "tu foi Cadastrado!");
            form.reset();
            this.router.navigate(['/home']);
          },
          erro => {
            console.log("Erro: " + erro);
            this.presentAlert("DEU ERRO, fuja para as colinas", "NAO Cadastrado! ou seja deu ruim")
          }
        )
      } else {
        this.remedioService.update(this.remedio, this.id).then(
          res => {
            this.presentLoading();
            this.presentAlert("Você foi cadastrado", "Você foi atualizado!");
            form.reset();
            this.router.navigate(['/home']);
          },
          erro => {
            console.log("Erro: " + erro);
            this.presentAlert("Ocorreu um erro", "Não atualizado")
          }
        )
      }
    }
    async presentAlert(tipo: string, texto: string) {
      const alert = await this.alertController.create({
        header: tipo,
        message: texto,
        buttons: ['Sendo assim sim']
      });
  
      await alert.present();
    }
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Você está sendo cadastrado',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }
  
  }


