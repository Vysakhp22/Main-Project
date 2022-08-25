import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedUserOrdersComponent } from './view-accepted-user-orders.component';

describe('ViewAcceptedUserOrdersComponent', () => {
  let component: ViewAcceptedUserOrdersComponent;
  let fixture: ComponentFixture<ViewAcceptedUserOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedUserOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcceptedUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
