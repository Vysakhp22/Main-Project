import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopChangePasswordComponent } from './shop-change-password.component';

describe('ShopChangePasswordComponent', () => {
  let component: ShopChangePasswordComponent;
  let fixture: ComponentFixture<ShopChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
