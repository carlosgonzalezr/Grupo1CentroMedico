import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-modalcovid',
  templateUrl: './modalcovid.page.html',
  styleUrls: ['./modalcovid.page.scss'],
})
export class ModalcovidPage implements OnInit {

  constructor(private crtNav: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
