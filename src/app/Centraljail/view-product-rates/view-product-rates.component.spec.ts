import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductRatesComponent } from './view-product-rates.component';

describe('ViewProductRatesComponent', () => {
  let component: ViewProductRatesComponent;
  let fixture: ComponentFixture<ViewProductRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
