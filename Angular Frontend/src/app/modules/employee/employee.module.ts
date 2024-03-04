import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavemployeeComponent } from './components/navemployee/navemployee.component';
import { AssetauditComponent } from './components/assetaudit/assetaudit.component';
import { AssetownedComponent } from './components/assetowned/assetowned.component';
import { AddassetrequestComponent } from './components/addassetrequest/addassetrequest.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssetservicerequestComponent } from './components/assetservicerequest/assetservicerequest.component';



@NgModule({
  declarations: [
    EmployeedashboardComponent,
    NavemployeeComponent,
    AssetauditComponent,
    AssetownedComponent,
    AddassetrequestComponent,
    AssetservicerequestComponent,
    
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class EmployeeModule { }
