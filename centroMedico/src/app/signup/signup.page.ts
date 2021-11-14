//import { UserCrudService } from './../services/user-crud.service';
import { PersonaCrudService } from '../services/persona-crud.service'; 
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  personaForm: FormGroup;

  constructor(
    public alerta: AlertController, 
    private navCtrl: NavController,
    private personaCrudService: PersonaCrudService, 
    public formBuilder: FormBuilder, 
    private zone: NgZone, 
    private router: Router) {
    this.personaForm = this.formBuilder.group({
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

    if (!this.personaForm.valid) {
      this.validacionFormulario();
    } else {
      this.personaCrudService.createPersona(this.personaForm.value)
        .subscribe((response): void => {
          this.zone.run(() => {
            this.personaForm.reset();
            this.router.navigate(['/login']);
          })
        });
    }
    /*if(this.name=="" || this.apellido =="" || this.email=="" || this.confirm_password =="" ||
        this.password==""){
  
          this.validacionFormulario();
  
    }
    else{
  
      this.navCtrl.navigateForward("login");
  
    }*/
  }

  async validacionFormulario() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      //subHeader: 'Subtitle',
      message: 'Ingrese, correctamente los campos solicitados.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
