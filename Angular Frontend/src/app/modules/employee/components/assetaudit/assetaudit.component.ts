import { Component, OnInit } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { AssetauditService } from 'src/app/services/assetaudit/assetaudit.service';

@Component({
  selector: 'app-assetaudit',
  templateUrl: './assetaudit.component.html',
  styleUrls: ['./assetaudit.component.css']
})
export class AssetauditComponent  {

constructor(private assetauditService: AssetauditService, private confirmService:NgConfirmService) { }

audits:any;

assetaudit: any[] = [];

empId = localStorage.getItem('empId');

ngOnInit() {
  this.viewAssetById(this.empId)

}


viewAssetById(id: any) {
  this.assetauditService.getEmployeesByAssets(id).subscribe((data)=>{
    this.assetaudit = data;
    console.log(data);
    
  })
}


  getAllAssetAudits() {
    this.assetauditService.getAll().subscribe( (data: any[]) => {
      this.audits = data;
      console.log(this.audits);


    })
  }

updateStatus(event:any,status:string, id:number){

  this.confirmService.showConfirm('Are you sure you want to update?', 
  ()=>{
    this.assetauditService.updateStatus(status, id).subscribe((data)=>{
      this.audits = data;
      console.log(data);
      this.getAllAssetAudits();
      alert('Updated')
      
    })    
  },
  ()=>{
    
  }

  )


}


}
