import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetauditComponent } from './assetaudit.component';

describe('AssetauditComponent', () => {
  let component: AssetauditComponent;
  let fixture: ComponentFixture<AssetauditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetauditComponent]
    });
    fixture = TestBed.createComponent(AssetauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
