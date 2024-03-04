import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassetrequestComponent } from './addassetrequest.component';

describe('AddassetrequestComponent', () => {
  let component: AddassetrequestComponent;
  let fixture: ComponentFixture<AddassetrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddassetrequestComponent]
    });
    fixture = TestBed.createComponent(AddassetrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
