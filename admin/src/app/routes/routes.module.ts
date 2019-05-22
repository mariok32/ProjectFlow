import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../login/login.component';


// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutesModule { }