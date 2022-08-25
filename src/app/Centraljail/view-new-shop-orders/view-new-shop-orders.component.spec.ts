import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewShopOrdersComponent } from './view-new-shop-orders.component';

describe('ViewNewShopOrdersComponent', () => {
  let component: ViewNewShopOrdersComponent;
  let fixture: ComponentFixture<ViewNewShopOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewShopOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewShopOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
