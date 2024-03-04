import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetRequest } from '../../models/assetrequest';

@Injectable({
  providedIn: 'root'
})
export class AssetrequestService {
  getIssueTypes() {
    throw new Error('Method not implemented.');
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'application/json',
 
       'Authorization': "Bearer "+ token
        
        
     });  
   }

  constructor(private http:HttpClient) { }

  baseURL:string = 'http://localhost:8080/assetrequests/';

  insert(employeeId: any, assetId: number, body: AssetRequest): Observable<AssetRequest> {
    const url = `${this.baseURL}add/${employeeId}/${assetId}`;
    console.log(body);
    return this.http.post<AssetRequest>(url, body, { headers: this.getHeaders() });
  }
  

  getAll():Observable<AssetRequest[]>{
        return this.http.get<AssetRequest[]>(this.baseURL+"displayAllRequest",{headers:this.getHeaders()  },);
    }
    
  // delete(requestId:number):Observable<any>{
    
  //     return  this.http.delete<string>(this.baseURL+`delete/${requestId}`,{headers:this.getHeaders()});
    
  //   }


  delete(requestId:number):Observable<string>{

    return  this.http.delete<string>(this.baseURL+`delete/${requestId}`,{headers:this.getHeaders()});
  
  }

    getRequestById(empId:number):Observable<AssetRequest[]>{ 

      return this.http.get<AssetRequest[]>(this.baseURL+`displayRequestByEmpId/${empId}`,{headers:this.getHeaders()})

    }
    searchById(requestId:string):Observable<AssetRequest>{
  
      console.log(requestId)
      return this.http.get<AssetRequest>(this.baseURL+`getbyid/${parseInt(requestId)}`,{headers:this.getHeaders()});
    
    }

    employeeInfo():Observable<AssetRequest[]>{
      return this.http.get<AssetRequest[]>(this.baseURL+"displayAssetEmployeeInfo",{headers:this.getHeaders()  },);
    }

    updateStatus(status:string,requestId:number){
      console.log(status+" "+requestId);
  return this.http.put(this.baseURL + "updateStatus/" + status + "/" + requestId, {}, {headers:this.getHeaders()});
    }

    getEmployeesByAssets(employeeId:string):Observable<AssetRequest[]>{
      return this.http.get<AssetRequest[]>(this.baseURL + `displayEmployeeInfo/${parseInt(employeeId)}`,{headers:this.getHeaders()})
    }

    getAssetsInfo(assetId:string):Observable<AssetRequest[]>{
      return this.http.get<AssetRequest[]>(this.baseURL + `displayAssetInfo/${parseInt(assetId)}`,{headers:this.getHeaders()})
    }

    isAssetExist(empId:number, assetId:number):Observable<AssetRequest>{
      console.log(empId,assetId);
      
      return this.http.get<AssetRequest>(this.baseURL+ `displayExistAsset/${empId}/${assetId}`,{headers:this.getHeaders()})
    }

    updateIssue(issueType:string, requestId:number){
      return this.http.put(this.baseURL + "updateIssue/" + issueType + "/" + requestId, {}, {headers:this.getHeaders()});

    }
}
