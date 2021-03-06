import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  cardnumber: string = "";
  fullname: string = "";
  fvencimiento: string = "";
  cvc: string = "";



  constructor(public alerta: AlertController, private navCtrl:NavController) { }

  ngOnInit() {
  }

  onSubmit() {
     
    if(this.cardnumber=="" || this.fullname =="" || this.fvencimiento=="" || this.cvc==""){

          this.validacionFormulario();

    }
    else{

      this.navCtrl.navigateForward("login");

    }
  }
  async validacionFormulario() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      //subHeader: 'Subtitle',
      message: 'Datos no válidos',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
