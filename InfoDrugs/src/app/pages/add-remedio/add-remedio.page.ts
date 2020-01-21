import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { RemedioService } from '../../services/remedio.service';
import { Remedio } from '../../model/remedio';

@Component({
  selector: 'app-add-remedio',
  templateUrl: './add-remedio.page.html',
  styleUrls: ['./add-remedio.page.scss'],
})
export class AddRemedioPage implements OnInit {

  protected remedio: Remedio = new Remedio;
  protected id: any = null;

  constructor(
    protected router: Router,
    protected alertController: AlertController,
    protected remedioService: RemedioService,
    protected platform: Platform,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(){
      // Pega Id ara autilaização dos dados do Usuário
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }
  
    onsubmit(form) {
      if (!this.id) {
        this.remedioService.save(this.remedio).then(
          res => {
            form.reset();
            this.remedio = new Remedio;
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
        this.remedioService.update(this.remedio, this.id).then(
          res => {
            form.reset();
            this.remedio = new Remedio;
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
  }

