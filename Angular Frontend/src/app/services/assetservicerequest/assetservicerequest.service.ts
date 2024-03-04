import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetServiceRequest } from 'src/app/models/assetservicerequest';

import { ServiceRequest } from 'src/app/models/servicerequest';

@Injectable({
  providedIn: 'root'
})
export class AssetservicerequestService {

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'application/json',
 
       'Authorization': "Bearer "+ token
        
        
     });  
   } 
  constructor(private http:HttpClient) { }

  baseURL:string = 'http://localhost:8080/assetServiceRequest/';

  
  insert(body:ServiceRequest, assetId: number ,employeeId: number, issueType:string ): Observable<ServiceRequest> {
    const url = this.baseURL+`addNewRequest/${assetId}/${employeeId}/${issueType}`;
    console.log(body);
    return this.http.post<ServiceRequest>(url, body,{headers:this.getHeaders()});
  }
  

  getAll():Observable<AssetServiceRequest[]>{
        return this.http.get<AssetServiceRequest[]>(this.baseURL+"displayAllRequests",{headers:this.getHeaders()});
    }
    
  delete(requestId:number):Observable<string>{
    
      return  this.http.delete<string>(this.baseURL+`deleteById/${requestId}`,{headers:this.getHeaders()});
    
    }

    updateStatus(status:string,requestId:number){
      console.log(status+" "+requestId);
  return this.http.put(this.baseURL + "updateStatus/" + status + "/" + requestId, {}, {headers:this.getHeaders()});
    }

    getEmployeesByAssets(employeeId:string):Observable<AssetServiceRequest[]>{
      return this.http.get<AssetServiceRequest[]>(this.baseURL + `displayEmployeeInfo/${parseInt(employeeId)}`,{headers:this.getHeaders()})
    }

    getAssetsInfo(assetId:string):Observable<AssetServiceRequest[]>{
      return this.http.get<AssetServiceRequest[]>(this.baseURL + `displayAssetInfo/${parseInt(assetId)}`,{headers:this.getHeaders()})
    }
}
