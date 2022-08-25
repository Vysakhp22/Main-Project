import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedShopOrdersComponent } from './view-accepted-shop-orders.component';

describe('ViewAcceptedShopOrdersComponent', () => {
  let component: ViewAcceptedShopOrdersComponent;
  let fixture: ComponentFixture<ViewAcceptedShopOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedShopOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcceptedShopOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
