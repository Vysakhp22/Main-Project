import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMyProfileComponent } from './shop-my-profile.component';

describe('ShopMyProfileComponent', () => {
  let component: ShopMyProfileComponent;
  let fixture: ComponentFixture<ShopMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
