import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AgendaCrudService } from './../services/agenda-crud.service';

import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-agendar-hora',
  templateUrl: './agendar-hora.page.html',
  styleUrls: ['./agendar-hora.page.scss'],
})
export class AgendarHoraPage implements OnInit {

  agendaForm: FormGroup;

  constructor(
    public alerta: AlertController,
    private navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private agendaCrudService: AgendaCrudService) {
      this.agendaForm = this.formBuilder.group({
        paciente: [''],
        medico: [''],
        especialidad: [''],
        fecha: [''],
        hora: [''],
        sucursal: ['']
      })
     }

  onSubmit() {

    if (!this.agendaForm.valid) {
      return false;
    } else {
      this.agendaCrudService.createAgenda(this.agendaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.agendaForm.reset();
            this.router.navigate(['/horas']);
          })
        });
    }


  }

  ngOnInit() {
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
