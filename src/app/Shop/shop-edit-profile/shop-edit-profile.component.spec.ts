import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEditProfileComponent } from './shop-edit-profile.component';

describe('ShopEditProfileComponent', () => {
  let component: ShopEditProfileComponent;
  let fixture: ComponentFixture<ShopEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
