import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedUserOrdersComponent } from './view-rejected-user-orders.component';

describe('ViewRejectedUserOrdersComponent', () => {
  let component: ViewRejectedUserOrdersComponent;
  let fixture: ComponentFixture<ViewRejectedUserOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedUserOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRejectedUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
