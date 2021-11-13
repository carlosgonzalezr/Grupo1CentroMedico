import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/usercrud.service';



@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(public alerta: AlertController,
    private navCtrl: NavController,
    public modalController: ModalController,
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
    ) { }

  ngOnInit() {

    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      correo: [''],
      rut: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      comuna: [''],
      celular: [''],
      enfermedades: [''],
      alergias: [''],
      sexo: ['']
    })
  }

  
  fetchUser(id) {
    this.userCrudService.getUser(correo).subscribe((data) => {
      this.updateUserFg.setValue({

      correo: data['data']['correo'],
      rut: data['data']['rut'],
      nombre: data['data']['nombre'],
      apellido: data['data']['apellido'],
      direccion: data['data']['direccion'],
      comuna: data['data']['comuna'],
      celular: data['data']['celular'],
      enfermedades: data['data']['enfermedades'],
      alergias: data['data']['alergias'],
      sexo: data['data']['sexo'],
  
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/list']);
        })
    }
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
