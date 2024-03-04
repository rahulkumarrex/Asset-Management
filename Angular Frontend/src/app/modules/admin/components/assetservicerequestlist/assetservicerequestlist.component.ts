import { Component } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { AssetServiceRequest } from 'src/app/models/assetservicerequest';
import { AssetservicerequestService } from 'src/app/services/assetservicerequest/assetservicerequest.service';

@Component({
  selector: 'app-assetservicerequestlist',
  templateUrl: './assetservicerequestlist.component.html',
  styleUrls: ['./assetservicerequestlist.component.css']
})
export class AssetservicerequestlistComponent {

  requests: any[]=[];
  assetserviceRequest!:any;
  select: string='';
  searchName: string='';
  requestsNotFoundMessage: string='';

 

  assetServiceRequestList:AssetServiceRequest[]= [];

  constructor(private assetServiceRequestService:  AssetservicerequestService,private confirmService: NgConfirmService){}

  ngOnInit(){
    this.getAllAssetServiceRequests();
  }

  getAllAssetServiceRequests(){
    this.assetServiceRequestService.getAll().subscribe( 
      (data: any[]) => {
        this.requests = data;
        console.log(this.requests);
        
      });
    
      
  }


  getEmployeesByAssets(employeeId:string){
    this.assetServiceRequestService.getEmployeesByAssets(employeeId).subscribe( (data: any[]) => {
      this.requests = data;
      console.log(this.requests);
      if (!this.requests || this.requests.length === 0) {
        this.requestsNotFoundMessage = "No employees found for the provided ID.";
      } else {
        this.requestsNotFoundMessage = ""; 
      }
      console.log(this.requests);
    });
  
    
  }

  performSearch(searchName:string,select:string){

    if(select == 'employeeId'){
      
      this.getEmployeesByAssets(searchName);
    }
    else if(select == 'assetId'){
      console.log(select);
      this.getAssetsInfo(searchName);
  
      
    }
  }
  
  getAssetsInfo(assetId:string){
    this.assetServiceRequestService.getAssetsInfo(assetId).subscribe( (data: any[]) => {
      this.requests = data;
      console.log(this.requests);
      if (!this.requests || this.requests.length === 0) {
        this.requestsNotFoundMessage = "No assets found for the provided ID.";
      } else {
        this.requestsNotFoundMessage = ""; 
      }
      console.log(this.requests);
    });
  }


deleteById(serviceRequestId:number){
  this.confirmService.showConfirm('Are you sure you want to delete?', 
  ()=>{
    this.assetServiceRequestService.delete(serviceRequestId).subscribe( (msg)=>{ console.log("Deleted the employeee with Id"+serviceRequestId+msg);});
    this.getAllAssetServiceRequests();
  },
  ()=>{
      
  }
  
  
  )
}

updateStatus(event:any,status:string, requestId:number){

  this.confirmService.showConfirm('Are you sure you want to update?', 
  ()=>{
    this.assetServiceRequestService.updateStatus(status, requestId).subscribe((assetserviceRequest)=>{
      this.assetserviceRequest = assetserviceRequest;
      console.log(assetserviceRequest);
      this.getAllAssetServiceRequests();

      
    })    
  },
  ()=>{
    
  }
  
  )

}

}