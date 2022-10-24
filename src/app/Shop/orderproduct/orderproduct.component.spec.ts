import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderproductComponent } from './orderproduct.component';

describe('OrderproductComponent', () => {
  let component: OrderproductComponent;
  let fixture: ComponentFixture<OrderproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
