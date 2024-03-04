import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgConfirmService } from 'ng-confirm-box';
import { Observable } from 'rxjs';
import { loadAssetAudits } from 'src/app/Store/Actions/asset-audit.actions';
import { selectAudits, selectError, selectLoading } from 'src/app/Store/Selectors/asset-audit.selectors';
import { AssetAudit } from 'src/app/models/assetaudit';
import { AssetauditService } from 'src/app/services/assetaudit/assetaudit.service';
import { AssetrequestService } from 'src/app/services/assetrequest/assetrequest.service';


@Component({
  selector: 'app-assetaudit',
  templateUrl: './assetaudit.component.html',
  styleUrls: ['./assetaudit.component.css']
})
export class AssetauditComponent {
  requests: any[]=[];
  audits:any[]=[];
  showTables:string='';

  audits$!: Observable<any>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private assetRequestService: AssetrequestService,private confirmService: NgConfirmService,private assetAudit: AssetauditService,private store: Store){}

  getAllAssetAudits() {
    // this.assetAudit.getAll().subscribe( (data: any[]) => {
    //   this.audits = data;
    //   console.log(this.audits);
    //   this.showTables='assetaudit';
  
    // })
    this.store.dispatch(loadAssetAudits());
    this.showTables='assetaudit';
  }

  ngOnInit(){
    this.getAllEmployeeInfo();

    this.showTables='assetrequest';
    this.audits$ = this.store.pipe(select(selectAudits));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));


  }

  deleteById(assetAuditId: number) {
  this.confirmService.showConfirm('Are you sure you want to delete?', 
    () => {
      this.assetAudit.delete(assetAuditId).subscribe(
        (msg) => {
          console.log("Deleted the request with Id" + assetAuditId + msg);
        },
        (error) => {
          this.getAllAssetAudits() ;
          console.error("Error deleting the request:", error);
          // Add your error handling logic here, such as displaying an error message to the user
        }
      );
    },
    () => {
      // Do nothing if the user cancels the deletion
    }
  );
}

  getAllEmployeeInfo(){
    this.assetRequestService.employeeInfo().subscribe( (data: any[]) => {
      this.requests = data;
      console.log(this.requests);
      this.showTables='assetrequest';
    })
  }
  
  sendAuditRequest(assetId: number, employeeId: number) {
    const audit: AssetAudit = {
      // assetAuditId:0,
      // dateAudited:new Date(),
      // assetId:0,
      // employeeId:0,
      // status:''
        
      };
      console.log(assetId);
      console.log(employeeId);
      
      

    this.assetAudit.sendAuditRequest(assetId, employeeId, audit).subscribe(
      (response: AssetAudit) => {
        console.log('Audit request sent successfully:', response);

        

      },
      (error) => {
        console.error('Error sending audit request:', error);
      }
    );
  }}
