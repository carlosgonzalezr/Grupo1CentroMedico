import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateHoraPage } from './update-hora.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateHoraPageRoutingModule {}
