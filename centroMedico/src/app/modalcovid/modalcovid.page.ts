import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-modalcovid',
  templateUrl: './modalcovid.page.html',
  styleUrls: ['./modalcovid.page.scss'],
})
export class ModalcovidPage implements OnInit {

  constructor(private crtNav: NavController) { }

  ngOnInit() {
  }

  onSubmit(){
     this.crtNav.navigateForward("tab");
  }

}
