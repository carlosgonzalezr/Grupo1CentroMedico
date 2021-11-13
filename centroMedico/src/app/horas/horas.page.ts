import { Component, OnInit } from '@angular/core';
import { AgendaCrudService } from './../services/agenda-crud.service';
import { Router } from '@angular/router';

import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.page.html',
  styleUrls: ['./horas.page.scss'],
})
export class HorasPage implements OnInit {
  Agendas:any = [];

  constructor(public alerta: AlertController, private navCtrl: NavController, private AgendaCrudService: AgendaCrudService,
    private router: Router) { }
  click() {

    this.navCtrl.navigateForward("pago");

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

  ionViewDidEnter(){
    this.AgendaCrudService.getAgendas().subscribe((response)=>{
      this.Agendas = response['data'];
    })
  }

  removeAgenda(agenda, i){
    if(window.confirm('Estas seguro?')){
      this.AgendaCrudService.deleteAgenda(agenda.id)
      .subscribe(()=>{
        this.ionViewDidEnter();
        console.log('Agenda deleted')
      })
    }
  }

}
