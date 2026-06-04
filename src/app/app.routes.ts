import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'domicilio',
    loadComponent: () => import('./modules/domicilio/domicilio.component').then(m => m.DomicilioComponent)
  },
  {
    path: '',
    redirectTo: 'domicilio',
    pathMatch: 'full'
  }
];