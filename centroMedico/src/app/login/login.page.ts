
import { PersonaCrudService } from '../services/persona-crud.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;

  //mensajeValidacion: string = "";

  constructor(

    public alerta: AlertController,
    private navCtrl: NavController,
    private personaCrudService: PersonaCrudService,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      correo: [''],
      rut: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      comuna: [''],
      password: [''],
      repeatPassword: [''],
      celular: [''],
      enfermedades: [''],
      alergias: [''],
      sexo: [''],
    })


  }

  ngOnInit() { }

  onSubmit() {

    let formValue = this.loginForm.value

    if (!this.loginForm.valid) {

      this.validacionFormulario();

    } else {

      //this.validacionFormulario();

      this.personaCrudService.getPersona()
        .subscribe((response) => {
          this.zone.run(() => {
            this.loginForm.reset();
            this.router.navigate(['/tab']);
          })
        });

      /*this.personaCrudService.getPersona()
        .subscribe((response): void => {
          const newLocal = response.find;
          if (!newLocal(x => x.correo == formValue.correo && x.password == formValue.password)) {
            this.validacionFormulario();
          } else if (newLocal(x => x.correo == formValue.correo && x.password == formValue.password)) {
            this.zone.run(() => {
              this.loginForm.reset();
              this.router.navigate(['/tab']);
            })

          }

        });*/
    }
  }

  /*if (this.email == "" || this.password == "") {

    this.validacionFormulario();

  } else {

    this.navCtrl.navigateForward("tab");
  }*/
  //this.navCtrl.navigateForward("tab");


  async validacionFormulario() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      //subHeader: 'Subtitle',
      message: 'Vuelva a ingresar Los campos faltantes.',
      buttons: ['OK']
    });



    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async ValidacionCredenciales() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      //subHeader: 'Subtitle',
      message: 'Credenciales Invalidas',
      buttons: ['OK']
    });



    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
