import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { Observable } from 'rxjs';
import { AssetRequest } from 'src/app/models/assetrequest';
import { AssetrequestService } from 'src/app/services/assetrequest/assetrequest.service';

@Component({
  selector: 'app-addassetrequest',
  templateUrl: './addassetrequest.component.html',
  styleUrls: ['./addassetrequest.component.css'],
})
export class AddassetrequestComponent {
  searchName: any;

  ngOnInit() {
    console.log(this.empId);
    this.getRequestById(this.empId);
  }

  deleteById(requestId: number) {

    this.confirmService.showConfirm('Are You Sure?',
    ()=>{
      console.log(requestId);
      this.assetRequestService.delete(requestId).subscribe(
        (msg) => {
          console.log('Deleted the employeee with Id' + requestId + msg);
        },
        (error) => {
          this.getRequestById(this.empId);
          console.error('Error deleting request:', error);
        }
      );
    },
    ()=>{
    }
    )


  
  }

  empId = localStorage.getItem('empId');

  requestList: any[] = [];
  constructor(private assetRequestService: AssetrequestService, private confirmService: NgConfirmService) {}

  getRequestById(empId: any) {
    this.assetRequestService.getRequestById(empId).subscribe((data: any[]) => {
      this.requestList = data;
      console.log(this.requestList);
    });
  }
}
