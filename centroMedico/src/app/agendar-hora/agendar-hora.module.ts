import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarHoraPageRoutingModule } from './agendar-hora-routing.module';

import { AgendarHoraPage } from './agendar-hora.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarHoraPageRoutingModule,
    CalendarModule,
  ],
  declarations: [AgendarHoraPage]
})
export class AgendarHoraPageModule {}
