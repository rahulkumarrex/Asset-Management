import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../jwt/auth.service';
import { EmployeeService } from '../employee/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private employeeService:EmployeeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   } else {
     
  //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //     return false;
  //   }
  // }
  const expectedRole = route.data['expectedRole'];
  const userRole = localStorage.getItem('role');
  
  if (this.authService.isLoggedIn() && userRole === expectedRole) {
    return true; 
  } else {
    
    if (!this.authService.isLoggedIn()) {
      
      this.router.navigate(['']);
    } else if (userRole === 'Admin') {
      console.log(userRole);
      
      this.router.navigate(['admin']);
      
    }else if (userRole === 'User') {
      this.router.navigate(['']);
    
      
      
    }
    return false;
  }

}
}