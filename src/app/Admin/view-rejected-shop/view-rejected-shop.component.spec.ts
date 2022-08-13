import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedShopComponent } from './view-rejected-shop.component';

describe('ViewRejectedShopComponent', () => {
  let component: ViewRejectedShopComponent;
  let fixture: ComponentFixture<ViewRejectedShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRejectedShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
