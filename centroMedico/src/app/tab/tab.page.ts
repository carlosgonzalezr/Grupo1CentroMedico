import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage {

  constructor(private TabPage: MenuController) { }

  openFirst() {
    this.TabPage.enable(true, 'first');
    this.TabPage.open('first');
  }

  openEnd() {
    this.TabPage.open('end');
  }

  openCustom() {
    this.TabPage.enable(true, 'custom');
    this.TabPage.open('custom');
  }
  
}
