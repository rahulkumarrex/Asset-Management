import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewassetsComponent } from '../employee/components/viewassets/viewassets.component';
import { EmployeehomeComponent } from '../employee/components/employeehome/employeehome.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: AddemployeeComponent },
      { path: 'homepage', component: HomepageComponent },
    ],
  },
  {
    path: 'employee',
    component: EmployeehomeComponent, children: [
      { path: 'asset', component: ViewassetsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
