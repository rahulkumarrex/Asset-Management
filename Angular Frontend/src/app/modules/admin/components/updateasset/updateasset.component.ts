import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from 'src/app/services/asset/asset.service';

@Component({
  selector: 'app-updateasset',
  templateUrl: './updateasset.component.html',
  styleUrls: ['./updateasset.component.css']
})
export class UpdateassetComponent {
  updateAssetForm!: FormGroup;
  submitted = false; 

  assetId:number=this.activatedRoute.snapshot.params["assetId"]

  constructor(private assetService: AssetService, private activatedRoute: ActivatedRoute,private formbuilder: FormBuilder,private router:Router){}

  ngOnInit(){
    this.assetId = +this.activatedRoute.snapshot.params['assetId'];
    this.updateAssetForm = this.formbuilder.group({
      assetId:[this.assetId],
      assetName: ['', [Validators.required, Validators.minLength(3)]],
      assetCategory: ['', [Validators.required, Validators.minLength(3)]],
      assetModel: ['', [Validators.required, Validators.minLength(2)]],
      assetValue: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      manufacturingDate: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
    this.searchAssetById();
  }

  get f(){
    return this.updateAssetForm.controls;
  }

  searchAssetById(){
    this.assetService.searchAssetById(this.assetId).subscribe((res) => {
      console.log(res);
      this.updateAssetForm.patchValue(res);
      
    })
  }
  updateAsset(){

    this.submitted = true; 
  if (this.updateAssetForm.invalid) {
    return;
  }

  this.assetService.updateAssetDetail(this.updateAssetForm.value).subscribe((res)=>{
    console.log(res);
    alert('Form Update successful ');
    console.log(this.f['assetName'].value);
    this.router.navigate(['./assetlist']);  
  });
      
    }

}
