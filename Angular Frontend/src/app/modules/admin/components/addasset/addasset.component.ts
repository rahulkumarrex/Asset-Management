import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Asset } from 'src/app/models/asset';
import { AssetService } from 'src/app/services/asset/asset.service';

@Component({
  selector: 'app-addasset',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.css']
})
export class AddassetComponent {



assetForm!: FormGroup;
  submitted: boolean = false;

  private assetService: AssetService;

  constructor(private formBuilder: FormBuilder, private injector: Injector) {
    this.assetService = this.injector.get(AssetService);
  }

  ngOnInit() {
    this.assetForm = this.formBuilder.group({
      assetName: ['', [Validators.required, Validators.minLength(3)]],
      assetCategory: ['', [Validators.required, Validators.minLength(5)]],
      assetModel: ['', [Validators.required, Validators.minLength(5)]],
      assetValue: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      manufacturingDate: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  get f() {
    return this.assetForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.assetForm.invalid) {
      return;
    } else {
      alert('Form submission successful');
    }
  }

  insertAsset() {
    const data: Asset = {
      assetName: this.assetForm.value.assetName,
      assetCategory: this.assetForm.value.assetCategory,
      assetValue: this.assetForm.value.assetValue,
      manufacturingDate: this.assetForm.value.manufacturingDate,
      expiryDate: this.assetForm.value.expiryDate,
      status: this.assetForm.value.status,
      assetId: 0,
      assetModel: this.assetForm.value.assetModel
    };
    this.assetService.insert(data)
      .subscribe(
        (asset) => { console.log('Added Asset is: ' + asset); }
      );
  }

  onAssetFormSubmit() {
    this.onSubmit();
    this.insertAsset();
  }
}
