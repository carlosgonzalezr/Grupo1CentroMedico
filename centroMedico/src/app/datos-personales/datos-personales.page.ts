import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  constructor(public alerta: AlertController,
    private navCtrl: NavController,
    public modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  async validarSalida() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Atención!!',
      message: '¿Desea guardar las modificaciones?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Guardar',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateForward("tab");
          }
        }
      ]
    });

    await alert.present();
  }

}
