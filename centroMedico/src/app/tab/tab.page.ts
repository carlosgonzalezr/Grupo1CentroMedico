import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, } from 'ion2-calendar'
import { NavController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalcovidPage } from '../modalcovid/modalcovid.page';


@Component({
  selector: 'app-tab', 
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {


  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  constructor(public alerta: AlertController,
     private navCtrl: NavController,
     public modalController: ModalController,
     ) { }


  ngOnInit() {
  }
 async openModal(){
    const modal = await this.modalController.create({
      component: ModalcovidPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async validarSalida() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Confirmacion!',
      message: '¿Esta seguro de salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Salir',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateForward("login");
          }
        }
      ]
    });

    await alert.present();
  }

}
