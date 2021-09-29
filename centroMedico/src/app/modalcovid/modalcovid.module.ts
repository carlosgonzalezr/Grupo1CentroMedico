import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcovidPageRoutingModule } from './modalcovid-routing.module';

import { ModalcovidPage } from './modalcovid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcovidPageRoutingModule
  ],
  declarations: [ModalcovidPage]
})
export class ModalcovidPageModule {}
