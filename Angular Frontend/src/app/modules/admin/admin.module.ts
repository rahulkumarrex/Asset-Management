import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AssetrequestlistComponent } from './components/assetrequestlist/assetrequestlist.component';
import { AssetservicerequestlistComponent } from './components/assetservicerequestlist/assetservicerequestlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetauditComponent } from './components/assetaudit/assetaudit.component';


@NgModule({
  declarations: [
    AssetrequestlistComponent,
    AssetservicerequestlistComponent,
    AssetauditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
