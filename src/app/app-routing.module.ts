import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {AdminDashboardComponent} from './adminDashboard/admin-dashboard/admin-dashboard.component';
import {HomeComponent} from './home/home/home.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { FindAllGymsComponent } from './gyms/find-all-gyms/find-all-gyms.component';
import { FindAllWorktimeComponent } from './worktime/find-all-worktime/find-all-worktime.component';
import {FirstPageComponent} from './firstPage/first-page/first-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'first-page', pathMatch: 'full'},
  {path: 'first-page' ,component:FirstPageComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'home/:username',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'find-all-gyms/:id',
        component: FindAllGymsComponent,
        children: [
          {
            path: 'find-all-worktime/:id',
            component: FindAllWorktimeComponent,
          }
        ]
      }
     ]
  },
  {
    path: 'admin-dashboard/:username',
    component: AdminDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
           CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
