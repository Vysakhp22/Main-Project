import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedShopOrdersComponent } from './view-rejected-shop-orders.component';

describe('ViewRejectedShopOrdersComponent', () => {
  let component: ViewRejectedShopOrdersComponent;
  let fixture: ComponentFixture<ViewRejectedShopOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedShopOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRejectedShopOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
