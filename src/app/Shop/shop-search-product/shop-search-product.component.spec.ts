import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSearchProductComponent } from './shop-search-product.component';

describe('ShopSearchProductComponent', () => {
  let component: ShopSearchProductComponent;
  let fixture: ComponentFixture<ShopSearchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSearchProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
