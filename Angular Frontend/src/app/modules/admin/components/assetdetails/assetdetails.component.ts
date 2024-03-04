import { Component } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { Asset } from 'src/app/models/asset';
import { AssetService } from 'src/app/services/asset/asset.service';

@Component({
  selector: 'app-assetdetails',
  templateUrl: './assetdetails.component.html',
  styleUrls: ['./assetdetails.component.css']
})
export class AssetdetailsComponent {
  // assetList:Asset[]= [];

  // constructor(private assetService: AssetService){}

  // ngOnInit(){
  //   this.getAllAssets();
  // }

  // getAllAssets(){
  //   this.assetService.getAll().subscribe( 
  //     (list)=>{ this.assetList = list;  console.log(list)}
      
  //       );
  // }

  // deleteById(assetId:number){
  //   this.assetService.delete(assetId).subscribe( (msg)=>{ console.log("Deleted the employeee with Id"+assetId+msg);});
  //   this.getAllAssets();
      
  // }

  assetList:Asset[]= [];
  // assetList:any;
  asset!:any;
  showTables:string='';
  select: string='';
searchName: string='';
category: string='';
status: string='';
searchedByName: boolean = false;
searchedById: boolean = false;


  constructor(private assetService: AssetService,private confirmService: NgConfirmService){}

  ngOnInit(){
    this.getAllAssets();
    this.showTables='name';
  }

  getAllAssets(){
    this.assetService.getAll().subscribe( 
      (list)=>{ this.assetList = list;  console.log(list)}
      
        );
  }

  deleteById(assetId:number){
    this.confirmService.showConfirm('Are you sure you want to delete?', 
    ()=>{
      this.assetService.delete(assetId).subscribe( (msg)=>{ console.log("Deleted the asset with Id"+assetId+msg);},
      (error) => {
        console.error("Error deleting asset:", error);
      });
      this.getAllAssets();
      this.showTables='name';

        
    },
    ()=>{
      
    }
    
    
    )
      
  }

  searchByName(assetName:string){
  
    this.assetService.searchByName(assetName).subscribe((list)=>{
      this.assetList = list;
      console.log(list);
      this.searchedByName = true; 
      if (list.length === 0) {
        console.log("No assets found with the name: ", assetName);
      }
    },
    (error) => {
      console.error("Error occurred during name search:", error);
    }
  );
  }

//   searchById(assetId:string){

//     this.assetService.searchById(assetId).subscribe((asset)=>{
//       this.asset = asset;
//       console.log(asset);
//       this.searchedById = true; 
//       if (!asset) {
//         console.log("No asset found with the ID: ", assetId);
//       }
//     },
//     (error) => {
//       this.searchedById = true;
//       console.error("Error occurred during ID search:", error);
//     }
//   );
// }

searchById(assetId:string){

  this.assetService.searchById(assetId).subscribe((asset)=>{
    this.asset = asset;
    console.log(asset);
    if (!asset) {
      console.log("No asset found with the ID: ", assetId);
      this.searchedById = true;
    } else {
      this.searchedById = false;
    }
  },
  (error) => {
    this.searchedById = true;
    console.error("Error occurred during ID search:", error);
  }
);
}


  updateStatus(event:any,status:string, id:number){

    this.confirmService.showConfirm('Are you sure you want to delete?', 
    ()=>{
      this.assetService.updateStatus(status, id).subscribe((data)=>{
        this.asset = data;
        console.log(this.asset);

        this.getAllAssets();
        this.showTables='name';
        
      })    
    },
    ()=>{
      
    }
    
    
    
    )
    
  
    

  }



displayByCategory(category:string){
  console.log(category);
  
  this.assetService.displayByCategory(category).subscribe((list)=>{
    this.assetList = list;
    console.log(this.assetList);
    
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
}