import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetservicerequestComponent } from './assetservicerequest.component';

describe('AssetservicerequestComponent', () => {
  let component: AssetservicerequestComponent;
  let fixture: ComponentFixture<AssetservicerequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetservicerequestComponent]
    });
    fixture = TestBed.createComponent(AssetservicerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
