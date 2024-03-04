import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetservicerequestlistComponent } from './assetservicerequestlist.component';

describe('AssetservicerequestlistComponent', () => {
  let component: AssetservicerequestlistComponent;
  let fixture: ComponentFixture<AssetservicerequestlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetservicerequestlistComponent]
    });
    fixture = TestBed.createComponent(AssetservicerequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
