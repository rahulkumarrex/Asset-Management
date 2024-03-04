import { Injectable } from '@angular/core';
import { Asset } from '../../models/asset';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  
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

  constructor(private http:HttpClient) { }

  baseURL:string = 'http://localhost:8080/asset/';

   insert(body:Asset):Observable<Asset>{

     console.log(body);

       return this.http.post<Asset>(this.baseURL+"addNewAsset",body,{headers:this.getHeaders()});

   }
  getAll():Observable<Asset[]>{

    return this.http.get<Asset[]>(this.baseURL+"displayAllAssets",{headers:this.getHeaders()});
}
delete(assetId:number):Observable<string>{

  return  this.http.delete<string>(this.baseURL+`deleteById/${assetId}`,{headers:this.getHeaders()});

}

searchByName(assetName:string):Observable<Asset[]>{
  console.log(assetName);
  return this.http.get<Asset[]>(this.baseURL+"displayByName/"+assetName,{headers:this.getHeaders()})
}


searchById(assetId:string):Observable<Asset>{
  
  console.log(assetId)
  return this.http.get<Asset>(this.baseURL+`displayAssetById/${parseInt(assetId)}`,{headers:this.getHeaders()});
  
}
searchAssetById(assetId:number):Observable<any>{
  
  console.log(assetId)
  return this.http.get(this.baseURL+"displayAssetById/"+assetId,{headers:this.getHeaders()});
  
}

updateAssetDetail(asset: Asset): Observable<Asset> {
  return this.http.put<Asset>(this.baseURL+"updateAsset", asset,{headers:this.getHeaders()});
}

displayByCategory(category: string): Observable<Asset[]>{
  return this.http.get<Asset[]>(this.baseURL+"displayAssetByCategory/"+category,{headers:this.getHeaders()})
}

updateStatus(status: string, id:number){
  console.log(status+" "+id);
  return this.http.put(this.baseURL + "updateStatus/" + status + "/" + id, {}, {headers:this.getHeaders()});}

}
