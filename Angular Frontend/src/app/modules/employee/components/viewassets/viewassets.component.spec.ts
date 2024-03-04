import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassetsComponent } from './viewassets.component';

describe('ViewassetsComponent', () => {
  let component: ViewassetsComponent;
  let fixture: ComponentFixture<ViewassetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewassetsComponent]
    });
    fixture = TestBed.createComponent(ViewassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
