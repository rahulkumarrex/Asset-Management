import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private route:Router){}

  ngOnInit() {
    // if(localStorage.getItem('jwtToeker')==null) {
    //   this.route.navigate(['/homepage']);
    // }
  }

 
}
