import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  constructor(private platformLocation: PlatformLocation){
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(()=>{
      history.pushState(null, '', location.href);
    })
  }

}
