import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarrantyComponent } from './shared/battery-status/warranty.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shared/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./shared/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./shared/settings/settings.module').then((m) => m.SettingsModule),
  },
  { path: 'warranty/:id', component: WarrantyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
