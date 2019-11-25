import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { FarmaciaService } from '../../services/farmacia.service';

@Component({
  selector: 'app-add-farmacia',
  templateUrl: './add-farmacia.page.html',
  styleUrls: ['./add-farmacia.page.scss'],
})
export class AddFarmaciaPage implements OnInit {

  constructor(
    protected router: Router,
    protected alertController: AlertController,
    protected farmaciaService: FarmaciaService,
    protected geolocation: Geolocation,
    protected platform: Platform
  ) { }

  ngOnInit() {
  }


}
