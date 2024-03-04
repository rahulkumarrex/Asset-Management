import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetAudit } from 'src/app/models/assetaudit';

@Injectable({
  providedIn: 'root'
})
export class AssetauditService {
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'application/json',
 
       'Authorization': "Bearer "+ token
        
        
     });  
   }

  constructor(private http:HttpClient) { }

  baseURL:string = 'http://localhost:8080/assetaudit/';

  getAll():Observable<AssetAudit[]>{
    return this.http.get<AssetAudit[]>(this.baseURL+"displayAllAudits",{headers:this.getHeaders()  },);
}
delete(assetAuditId:number):Observable<string>{
    
  return  this.http.delete<string>(this.baseURL+`deleteAudit/${assetAuditId}`,{headers:this.getHeaders()});

}
sendAuditRequest(assetId:number,employeeId:number,body:AssetAudit):Observable<AssetAudit>{
  return this.http.post<AssetAudit>(this.baseURL+`addNewAssetAudit/${employeeId}/${assetId}`,body,{headers:this.getHeaders()});
}

updateStatus(status: string, id:number){
  console.log(status+" "+id);
  return this.http.put(this.baseURL + "updateStatus/" + status + "/" + id, {}, {headers:this.getHeaders()});

}

getEmployeesByAssets(employeeId:string):Observable<AssetAudit[]>{
  return this.http.get<AssetAudit[]>(this.baseURL + `displayEmployeeInfo/${parseInt(employeeId)}`,{headers:this.getHeaders()})
}

}
