import { Component, OnInit } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { AssetServiceRequest } from 'src/app/models/assetservicerequest';
import { ServiceRequest } from 'src/app/models/servicerequest';
import { AssetrequestService } from 'src/app/services/assetrequest/assetrequest.service';
import { AssetservicerequestService } from 'src/app/services/assetservicerequest/assetservicerequest.service';

@Component({
  selector: 'app-assetowned',
  templateUrl: './assetowned.component.html',
  styleUrls: ['./assetowned.component.css'],
})
export class AssetownedComponent implements OnInit {

  requests!: any[];
selectedRequestType!: string;
selectIssueType!: string;



  displayAll() {
    throw new Error('Method not implemented.');
  }

  getAssetsInfo(assetId: string) {
    this.assetRequestService.getAssetsInfo(assetId).subscribe((data: any[]) => {
      this.requests = data;
      console.log(this.requests);
    });
  }

  empId!: number;
  select: any;
  searchName: any;

  ngOnInit() {

    
    this.getAllEmployeeInfo();
  }

  deleteById(serviceRequestId: number) {
    this.confirmService.showConfirm(
      'Are You Sure?',
      () => {



        this.assetRequestService.delete(serviceRequestId).subscribe((msg) => {
          console.log('Deleted the employeee with Id' + serviceRequestId + msg);
          this.getRequestById(this.empId);

        },
        (error) => {
          this.getRequestById(this.empId);
          console.error('Error deleting request:', error);

        }
        );
      
      },
      () => {}
    );
  }

  requestList: any[] = [];

  constructor(
    private assetRequestService: AssetrequestService,
    private assetServiceRequest: AssetservicerequestService,
    private confirmService: NgConfirmService
  ) {
    const empIdString = localStorage.getItem('empId');
    if (empIdString) {
      this.empId = parseInt(empIdString);
    }
  }

  getRequestById(empId: any) {
    this.assetRequestService.getRequestById(empId).subscribe((data: any[]) => {
      this.requestList = data;
      console.log(this.requestList);
    });
  }

  getAllEmployeeInfo() {
    this.assetRequestService.employeeInfo().subscribe((data: any[]) => {
      this.requestList = data;

      this.requestList.forEach(requestList => {
        requestList.selectedRequestType = ''; 
        // requestList.selectIssueType = ''; 
        
      });

      console.log(this.requestList);
    });
  }

  getAllService() {
    this.assetServiceRequest.getAll().subscribe;
  }

  addServieRequest(event: any,assetId:number,empId:number,issueType:string){

    this.confirmService.showConfirm('Are You Sure?',
    ()=>{
      const assetRequest: ServiceRequest={
     
      }
  
      console.log(assetId);
      console.log(empId);
      console.log(issueType);
      
      this.assetServiceRequest.insert(assetRequest,assetId,empId,issueType).subscribe((data)=>{
        console.log(data);
        
      })
      
    },
    ()=>{

    }
    )

  }


     updateIssue(event:any,issue:string, requestId:number){
      console.log(event);
      console.log(issue);
      console.log(requestId);
      
      this.assetRequestService.updateIssue(issue,requestId).subscribe();
     }
    
}
