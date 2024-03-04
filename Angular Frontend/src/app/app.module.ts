import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './modules/home/components/addemployee/addemployee.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpResponse } from '@angular/common/http';
import { AddassetComponent } from './modules/admin/components/addasset/addasset.component';
import { EmployeelistComponent } from './modules/admin/components/employeelist/employeelist.component';
import { NavbarComponent } from './modules/admin/components/navbar/navbar.component';
import { LoginComponent } from './modules/home/components/login/login.component';
import { AssetdetailsComponent } from './modules/admin/components/assetdetails/assetdetails.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
import { NavhomeComponent } from './modules/home/components/navhome/navhome.component'
import { NgConfirmModule } from 'ng-confirm-box';
import { UpdateemployeeComponent } from './modules/admin/components/updateemployee/updateemployee.component';
import { LucideAngularModule } from 'lucide-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { assetAuditReducer } from './Store/Reducer/asset-audit.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssetAuditEffects } from './Store/Effects/asset-audit.effects';
import { UpdateassetComponent } from './modules/admin/components/updateasset/updateasset.component';
import { ViewassetsComponent } from './modules/employee/components/viewassets/viewassets.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    AddassetComponent,
    EmployeelistComponent,
    NavbarComponent,
    LoginComponent,
    AssetdetailsComponent,
    HomeComponent,
    AdmindashboardComponent,
    NavhomeComponent,
    UpdateemployeeComponent,
    ViewassetsComponent,
    UpdateassetComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgConfirmModule,
    LucideAngularModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    FontAwesomeModule,
    StoreModule.forRoot({assetAudit: assetAuditReducer}),
    EffectsModule.forRoot([AssetAuditEffects])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
