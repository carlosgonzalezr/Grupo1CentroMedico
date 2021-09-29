import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.page.html',
  styleUrls: ['./horas.page.scss'],
})
export class HorasPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  click() {

    this.navCtrl.navigateForward("#");

  }

  ngOnInit() {
  }

}
