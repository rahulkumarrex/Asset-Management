import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Asset } from 'src/app/models/asset';
import { AssetRequest } from 'src/app/models/assetrequest';
import { AssetService } from 'src/app/services/asset/asset.service';
import { AssetrequestService } from 'src/app/services/assetrequest/assetrequest.service';

@Component({
  selector: 'app-viewassets',
  templateUrl: './viewassets.component.html',
  styleUrls: ['./viewassets.component.css']
})

export class ViewassetsComponent  {


  asset: any; 
  showDetails: boolean[] = [];
  
  assetList:Asset[]= [];
  showTables:string='';
  select: string='';
searchName: string='';
category: string='';
status: string='';
searchedByName: boolean = false;
searchedById: boolean = false;


disableRequestButton: boolean = false;

  constructor( private assetService: AssetService,private confirmService: NgConfirmService, private route: Router,private assetRequestService: AssetrequestService){
    
  }

  

  empId = localStorage.getItem('empId');


  ngOnInit(){

    console.log('empID: '+ this.empId);

    this.getAllAssets();
    this.showTables='name';

    this.assetList.forEach(() => {
      this.showDetails.push(false);
  });

  }


  
  searchByName(assetName:string){
    this.assetService.searchByName(assetName).subscribe((list)=>{
      this.assetList = list;
      this.showTables='name';

      this.searchedByName = false; 
      
      if (list.length === 0) {
        console.log("No assets found with the name: ", assetName);
      }
    },
    (error) => {
      this.searchedByName = true; 
      console.error("Error occurred during name search:", error);
    })
  }

  searchById(assetId:string){

    this.assetService.searchById(assetId).subscribe((asset)=>{
      this.asset = asset;
      console.log(asset);
      this.searchedById=false;

    
    },
    (error) => {
      this.searchedById = true;
      console.error("Error occurred during ID search:", error);
    })
  }

  getAllAssets(){
    this.assetService.getAll().subscribe( 
      (list)=>{ this.assetList = list;  console.log(list)}
      
        );
  }

  
  displayByCategory(category:string){
    console.log(category);
    
    this.assetService.displayByCategory(category).subscribe((list)=>{
      this.assetList = list;
      console.log(this.assetList);
      
    })
  }


  isAssetExist(empId:number,assetId:number){
    this.assetRequestService.isAssetExist(empId,assetId).subscribe((asset)=>{
      console.log(asset);
    })
  }



  performSearch(searchName:string,select:string){

    if(select == 'assetName'){
      
      this.searchByName(searchName);
      this.showTables='name';
    }
    else if(select == 'assetId'){
      console.log(select);
      this.searchById(searchName);
        this.showTables='id';

      
    }
}

displayAll(){

  this.getAllAssets();
  this.showTables='name';
}

toggleDetails(index: number): void {
  this.showDetails[index] = !this.showDetails[index];  }


  getImageUrl(assetId: number):string {
    
    
    return `src\assets\asset_images\${assetId}.jpg`

    }
    
    isDisabled(assetId: number) {
      
      return false;
      }
            
   assetRequest(assetId: number){

      
    console.log(assetId+" "+this.empId);
    
    const emptyBody:AssetRequest={};


    this.confirmService.showConfirm('Confirm...', 
    ()=>{

    this.isDisabled(assetId);

    this.assetRequestService.insert(this.empId, assetId,emptyBody).subscribe(((list)=>{
      console.log(list);
    }));
    },
    ()=>{
      
    } 
    )}


     
}
