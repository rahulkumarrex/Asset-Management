import { PlatformLocation } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {





  isDisabled: boolean = true;  

handleClick(num: number) {
  if(num===1){
    this.router.navigate(['/employee/assets']);
  }

  if(num===2){
    this.router.navigate(['/employee/assetowned']);
  }

  if(num===3){
    this.router.navigate(['/employee/assetaudit']);
  }

}

//to handle clicks on the divs
  


  constructor(private router: Router,private route:ActivatedRoute,private elementRef: ElementRef,private platformLocation: PlatformLocation){
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(()=>{
      history.pushState(null, '', location.href);
    })
  }

  ngOnInit() {


    if(localStorage.getItem('jwtToken')!==null){
      this.isDisabled = false;
    }

    

    this.route.fragment.subscribe(fragment => {
      if (fragment === 'service') {
        const serviceSection = this.elementRef.nativeElement.querySelector('#service');
        if (serviceSection) {
          serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (fragment === 'about') {
        const serviceSection = this.elementRef.nativeElement.querySelector('#about');
        if (serviceSection) {
          serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (fragment === 'contact') {
        const serviceSection = this.elementRef.nativeElement.querySelector('#contact');
        if (serviceSection) {
          serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (fragment === 'content') {
        const serviceSection = this.elementRef.nativeElement.querySelector('.banner');
        if (serviceSection) {
          serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  


signUpPage() {

  this.router.navigate(['register']);


}
loginPage() {
  this.router.navigate(['/login']);}
isLogin() {

  if(localStorage.getItem('jwtToken') == null){
    return false;
  }
  else{
    return true;
  }
}


}
