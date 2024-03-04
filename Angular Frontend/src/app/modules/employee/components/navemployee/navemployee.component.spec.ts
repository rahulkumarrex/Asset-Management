import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavemployeeComponent } from './navemployee.component';

describe('NavemployeeComponent', () => {
  let component: NavemployeeComponent;
  let fixture: ComponentFixture<NavemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavemployeeComponent]
    });
    fixture = TestBed.createComponent(NavemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
