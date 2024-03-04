import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor( private route:Router, private confirmService: NgConfirmService){}

deleteToken() {

  this.confirmService.showConfirm('Are you sure?',
  ()=>{
    localStorage.removeItem('jwtToken');
    this.route.navigate(['/homepage']);
  },
  ()=>{

  }
  )

 
}


}
