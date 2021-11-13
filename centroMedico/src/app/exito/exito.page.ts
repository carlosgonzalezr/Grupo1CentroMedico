import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.page.html',
  styleUrls: ['./exito.page.scss'],
})
export class ExitoPage implements OnInit {

  constructor(
    public alerta: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/tab']);
  }
      

}
