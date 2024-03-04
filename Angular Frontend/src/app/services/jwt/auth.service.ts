import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost:8080/';

  getGeneratedToken(requestBody: any){

    return this.http.post(this.baseURL+"employee/login/authenticate",requestBody,{responseType: 'text' as 'json'});

}

authorizationTest(token:any){

  const decodedToken = this.decodeToken(token);

  let tokenString = "Bearer "+token;

  const headers =  new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'http://localhost:4200'
       }).set("Authorization",tokenString);

       if (decodedToken) {
        return {
          
          role: decodedToken.role,
        };
      } else {
        console.error('Error decoding JWT token');
        return null;
      }
  

}

isLoggedIn(): boolean {
  return !!localStorage.getItem('jwtToken') ;
}

decodeToken(token: string): any {
  try {
    return jwtDecode(token);
  } catch (Error) {
    console.error('Error decoding JWT token:', Error);
    return null;
  }
}
storeToken(token: string): void {
  localStorage.setItem('jwtToken', token);
}

getStoredToken(): string | null {
  return localStorage.getItem('jwtToken');
}




}
