import { Component, ElementRef } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.css']
})
export class NavhomeComponent {


  constructor(private elementRef: ElementRef, private confirmService:NgConfirmService) {}

  checkToken(){

    if(localStorage.getItem('jwtToken')==null){
      return true;
    }
    else return false;


  }

  deleteToken() {

    this.confirmService.showConfirm('Are you sure?',
    ()=>{
      localStorage.removeItem('jwtToken');
    },
    ()=>{

    }
    )

   
  }
}
