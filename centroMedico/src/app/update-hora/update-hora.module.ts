import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateHoraPageRoutingModule } from './update-hora-routing.module';

import { UpdateHoraPage } from './update-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateHoraPageRoutingModule
  ],
  declarations: [UpdateHoraPage]
})
export class UpdateHoraPageModule {}
