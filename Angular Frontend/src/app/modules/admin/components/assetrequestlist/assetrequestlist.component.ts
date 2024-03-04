import { Component } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { AssetRequest } from 'src/app/models/assetrequest';
import { AssetrequestService } from 'src/app/services/assetrequest/assetrequest.service';

@Component({
  selector: 'app-assetrequestlist',
  templateUrl: './assetrequestlist.component.html',
  styleUrls: ['./assetrequestlist.component.css']
})
export class AssetrequestlistComponent {

 
  requests: any[]=[];
  select: string='';
searchName: string='';
  assetRequest!:any;
  assetRequestList:AssetRequest[]= [];
  showTables:string='';
  requestsNotFoundMessage: string='';

  constructor(private assetRequestService: AssetrequestService,private confirmService: NgConfirmService){}

  ngOnInit(){
    this.getAllAssetRequests();
    this.showTables='assetrequest';
  }


getAllAssetRequests() {
  this.assetRequestService.getAll().subscribe( (data: any[]) => {
    this.requests = data;
    console.log(this.requests);
    this.showTables='assetrequest';
    console.log('getallrequest',this.requests);
    

  })
}
// getEmployeesByAssets(employeeId:string){
//   this.assetRequestService.getEmployeesByAssets(employeeId).subscribe( (data: any[]) => {
//     this.requests = data;
//     console.log(this.requests);

//   })
// }

getEmployeesByAssets(employeeId: string) {
  this.assetRequestService.getEmployeesByAssets(employeeId).subscribe((data: any[]) => {
    this.requests = data;
    if (!this.requests || this.requests.length === 0) {
     
      this.requestsNotFoundMessage = "No employees found for the provided ID.";
    } else {
      this.requestsNotFoundMessage = ""; 
    }
    console.log('getEmployeesByAssets',this.requests);
  });
}

getAssetsInfo(assetId: string) {
  this.assetRequestService.getAssetsInfo(assetId).subscribe((data: any[]) => {
    this.requests = data;
    if (!this.requests || this.requests.length === 0) {
      this.requestsNotFoundMessage = "No assets found for the provided ID.";
    } else {
      this.requestsNotFoundMessage = ""; 
    }
    console.log('getAssetsInfo',this.requests);
  });
}


// getAssetsInfo(assetId:string){
//   this.assetRequestService.getAssetsInfo(assetId).subscribe( (data: any[]) => {
//     this.requests = data;
//     console.log(this.requests);

//   })
// }

performSearch(searchName:string,select:string){

  if(select == 'employeeId'){
    
    this.getEmployeesByAssets(searchName);
  }
  else if(select == 'assetId'){
    console.log(select);
    this.getAssetsInfo(searchName);

    console.log('performSearch',this.requests);

  }
}




deleteById(requestId:number){
  this.confirmService.showConfirm('Are you sure you want to delete?', 
  ()=>{
  this.assetRequestService.delete(requestId).subscribe( (msg)=>{ console.log("Deleted the request with Id"+requestId+msg);});
  this.getAllAssetRequests();
  },
  ()=>{
      
  }
  
  
  )
}

searchById(requestId:string){
  this.assetRequestService.searchById(requestId).subscribe((assetRequest) => {
    this.assetRequest = assetRequest;
    console.log(this.assetRequest);
    
  })
}

updateStatus(event:any,status:string, requestId:number){

  this.confirmService.showConfirm('Are you sure you want to update?', 
  ()=>{
    this.assetRequestService.updateStatus(status, requestId).subscribe((assetRequest)=>{
      this.assetRequest = assetRequest;
      console.log(assetRequest);
      this.getAllAssetRequests();

      
    })    
  },
  ()=>{
    
  }
  
  )

}

getAllEmployeeInfo(){
  this.assetRequestService.employeeInfo().subscribe( (data: any[]) => {
    this.requests = data;
    console.log(this.requests);

  })
}
}
