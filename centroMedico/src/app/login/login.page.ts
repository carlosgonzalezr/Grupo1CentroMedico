import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";

  //mensajeValidacion: string = "";

  constructor(private navCtrl: NavController, public alerta: AlertController) { }

  ngOnInit() { }

  onSubmit() {

    if (this.email == "" || this.password == "") {

      this.validacionFormulario();

    } else {

      this.navCtrl.navigateForward("tab");
    }

  }
  async validacionFormulario() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      //subHeader: 'Subtitle',
      message: 'Los campos estan vacios',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
