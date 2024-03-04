import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { EmployeehomeComponent } from './components/employeehome/employeehome.component';
import { ViewassetsComponent } from './components/viewassets/viewassets.component';
import { AddassetrequestComponent } from './components/addassetrequest/addassetrequest.component';
import { AssetownedComponent } from './components/assetowned/assetowned.component';
import { AssetservicerequestComponent } from './components/assetservicerequest/assetservicerequest.component';
import { AssetauditComponent } from './components/assetaudit/assetaudit.component';


const routes: Routes = [

  { path: '', redirectTo: 'employeehome', pathMatch: 'full' },
  

  {path: '', component: EmployeedashboardComponent,
  children: [
  {path: 'employeehome', component: EmployeehomeComponent},
  {path: 'assets', component: ViewassetsComponent},
  {path: 'assetrequest', component: AddassetrequestComponent},
  {path: 'assetowned', component: AssetownedComponent},
  {path: 'assetservicerequest', component: AssetservicerequestComponent},
  {path: 'assetaudit', component: AssetauditComponent},
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { 

}
