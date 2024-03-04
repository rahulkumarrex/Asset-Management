import { Component } from '@angular/core';
import { NgConfirmComponent, NgConfirmService } from 'ng-confirm-box';
import { AssetServiceRequest } from 'src/app/models/assetservicerequest';
import { AssetservicerequestService } from 'src/app/services/assetservicerequest/assetservicerequest.service';

@Component({
  selector: 'app-assetservicerequest',
  templateUrl: './assetservicerequest.component.html',
  styleUrls: ['./assetservicerequest.component.css'],
})
export class AssetservicerequestComponent {

  assetServiceRequestList: any[] = [];

  empId = localStorage.getItem('empId');

  constructor(private assetServiceRequestService: AssetservicerequestService,private confirmService:NgConfirmService) {}

  ngOnInit() {
    this.viewAssetById(this.empId);
  }

  viewAssetById(id: any) {
    this.assetServiceRequestService.getEmployeesByAssets(id).subscribe((data)=>{
      this.assetServiceRequestList = data;
      console.log(data);
      
    })
  }

 getAllAssetServiceRequests(){

  this.assetServiceRequestService.getAll().subscribe((list:any[])=>{
    this.assetServiceRequestList = list;
    console.log(list);
  })

}

  deleteById(serviceRequestId: number) {

    this.confirmService.showConfirm('Are You Sure?',
    ()=>{
      this.assetServiceRequestService
      .delete(serviceRequestId)
      .subscribe((msg) => {
        console.log('Deleted the employeee with Id' + serviceRequestId + msg);
      },
      (error) => {
        this.getAllAssetServiceRequests();
        console.error('Error deleting request:', error);
      }
      );
    this.getAllAssetServiceRequests();
    },
    ()=>{

    }
    )
  }

  
}
