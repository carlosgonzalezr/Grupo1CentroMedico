import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  name: string = "";
  email: string = "";
  apellido: string = "";
  password: string = "";
  confirm_password: string = "";  

  constructor(public alerta: AlertController, private navCtrl:NavController) { }

  ngOnInit() { }

  onSubmit() {
     
    if(this.name=="" || this.apellido =="" || this.email=="" || this.confirm_password =="" ||
        this.password==""){

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
      message: 'Por favor ingresar los campos que faltan.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
