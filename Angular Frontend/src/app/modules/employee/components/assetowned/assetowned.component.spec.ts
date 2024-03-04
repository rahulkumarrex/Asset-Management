import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetownedComponent } from './assetowned.component';

describe('AssetownedComponent', () => {
  let component: AssetownedComponent;
  let fixture: ComponentFixture<AssetownedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetownedComponent]
    });
    fixture = TestBed.createComponent(AssetownedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
