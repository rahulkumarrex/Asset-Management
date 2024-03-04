import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetrequestlistComponent } from './assetrequestlist.component';

describe('AssetrequestlistComponent', () => {
  let component: AssetrequestlistComponent;
  let fixture: ComponentFixture<AssetrequestlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetrequestlistComponent]
    });
    fixture = TestBed.createComponent(AssetrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
