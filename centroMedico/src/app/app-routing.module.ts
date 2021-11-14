import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'agendar-hora',
    loadChildren: () => import('./agendar-hora/agendar-hora.module').then( m => m.AgendarHoraPageModule)
  },
  {

    path: 'modalcovid',
    loadChildren: () => import('./modalcovid/modalcovid.module').then( m => m.ModalcovidPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'horas',
    loadChildren: () => import('./horas/horas.module').then( m => m.HorasPageModule)
  },
  {
    path: 'update-hora/:id',
    loadChildren: () => import('./update-hora/update-hora.module').then( m => m.UpdateHoraPageModule)
  },



  {
    path: 'exito',
    loadChildren: () => import('./exito/exito-routing.module').then( m => m.ExitoPageRoutingModule)
  },


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
