import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';

import { CalendarModule } from 'ion2-calendar';
//modal
import{ModalcovidPage} from '../modalcovid/modalcovid.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule,
    CalendarModule
  ],
  declarations: [
    TabPage,
    ModalcovidPage],
  entryComponents:[ModalcovidPage]
})
export class TabPageModule {}
