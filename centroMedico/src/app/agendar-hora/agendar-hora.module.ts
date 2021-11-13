import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarHoraPageRoutingModule } from './agendar-hora-routing.module';

import { AgendarHoraPage } from './agendar-hora.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgendarHoraPageRoutingModule,
  ],
  declarations: [AgendarHoraPage]
})
export class AgendarHoraPageModule {}
