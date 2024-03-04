import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent {

  

  constructor(private platformLocation: PlatformLocation){
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(()=>{
      history.pushState(null, '', location.href);
    })
  }
  
}
