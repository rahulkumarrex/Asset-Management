import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'application/json',
 
       'Authorization': "Bearer "+ token
        
        
     });  
   } 


   private getHeadersForFile(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'multipart/form-data',
 
       'Authorization': "Bearer "+token
        
    
        
     }); 
 
     
   } 

  baseURL:string = 'http://localhost:8080/employee/';

  insert(body:Employee):Observable<Employee>{



    console.log(body);

      return this.http.post<Employee>(this.baseURL+"addNewEmployee",body);

  }
  getAll(token:string):Observable<Employee[]>{    

    return this.http.get<Employee[]>(this.baseURL+"displayAllEmployees",{headers:this.getHeaders()}) ;
}

delete(employeeId:number):Observable<string>{
  

  return this.http.delete<string>(this.baseURL+`removeEmployeeDetail/${employeeId}`, {headers: this.getHeaders()});
}
// displayEmployeesByName/{employeeName}

serchByName(employeeName:string):Observable<Employee[]>{
  
  console.log(employeeName)
  return this.http.get<Employee[]>(this.baseURL+`displayEmployeesByName/${employeeName}`,{headers:this.getHeaders()});

}
//display by ID
serchById(employeeId:string):Observable<Employee>{
  
  console.log(employeeId)
  return this.http.get<Employee>(this.baseURL+`displayEmployeeById/${parseInt(employeeId)}`,{headers:this.getHeaders()});

}

//get role by email

getRole(email: any): Observable<any> {
  return this.http.get(this.baseURL + `getrole/${email}`, {
    headers: this.getHeaders(),
    responseType: 'text' as 'json' // Set the responseType to 'text'
  });
}
getId(email: any): Observable<any> {
  return this.http.get(this.baseURL + `getid/${email}`, {
    headers: this.getHeaders(),
    responseType: 'text' as 'json' // Set the responseType to 'text'
  });
}

updateRole(id:number):Observable<Employee> {
  console.log('ID: '+id)
  return this.http.put<any>(`${this.baseURL}makeAdmin/${id}`, null, {
    headers: this.getHeaders()
  });    
}

searchEmployeeById(employeeId:number):Observable<any>{
  
  console.log(employeeId)
  return this.http.get(this.baseURL+"displayEmployeeById/"+employeeId,{headers:this.getHeaders()});
  
}

updateEmployeeDetail(employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(this.baseURL+"updateEmployeeDetail", employee,{headers:this.getHeaders()});
}

}
