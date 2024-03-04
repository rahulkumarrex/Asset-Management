import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetdetailsComponent } from './assetdetails.component';

describe('AssetdetailsComponent', () => {
  let component: AssetdetailsComponent;
  let fixture: ComponentFixture<AssetdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetdetailsComponent]
    });
    fixture = TestBed.createComponent(AssetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
