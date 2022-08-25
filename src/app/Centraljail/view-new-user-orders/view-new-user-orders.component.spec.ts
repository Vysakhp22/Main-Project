import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewUserOrdersComponent } from './view-new-user-orders.component';

describe('ViewNewUserOrdersComponent', () => {
  let component: ViewNewUserOrdersComponent;
  let fixture: ComponentFixture<ViewNewUserOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewUserOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
