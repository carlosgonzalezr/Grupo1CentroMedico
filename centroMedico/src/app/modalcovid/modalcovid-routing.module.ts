import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcovidPage } from './modalcovid.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcovidPageRoutingModule {}
