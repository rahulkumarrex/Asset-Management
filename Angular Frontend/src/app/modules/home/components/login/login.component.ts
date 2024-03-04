import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { AuthRequest } from 'src/app/models/AuthRequest';
import { AuthService } from 'src/app/services/jwt/auth.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

response: any;
  token: any;
  empRole:String='';
   empEmail: String= '';
  authRequest: AuthRequest = new AuthRequest();


  constructor(private router: Router, private jwtService: AuthService, private employeeService:EmployeeService) {}

  ngOnInit(): void {
    // this.getAccessToken(this.authRequest);
  }


  readFormData(formData: any) {
    this.authRequest.email = formData.form.value.email;
    this.authRequest.password = formData.form.value.password;

    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any) {
    console.log(authRequest);

    let response = this.jwtService.getGeneratedToken(authRequest);

    response.subscribe((genToken) => {
      localStorage.setItem('jwtToken', genToken.toString());
      
      this.token = genToken;
      console.log('local:', localStorage.getItem('jwtToken'));
      console.log('Email: ',authRequest.email);
      this.empEmail = authRequest.email;
      this.accessApi(this.empEmail)
      

      
      // this.router.navigate(['/admin']);
    });
  }

  public accessApi(email: any): void {
    this.employeeService.getId(email).subscribe((id:any)=>{
       localStorage.setItem('empId', id);
    })
    console.log(localStorage.getItem('empId'));
    this.employeeService.getRole(email).subscribe((role: string) => {
      this.empRole = role;
      console.log(role);

      localStorage.setItem('role', role);

      console.log(localStorage.getItem('role'));
      
      if (this.empRole === 'Admin') {
        console.log('admin');

        this.router.navigate(['/admin']);

      } else if (this.empRole === 'User') {
        console.log('User');
        this.router.navigate(['/homepage']);
      } 

    });
  }



}





