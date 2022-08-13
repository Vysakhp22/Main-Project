import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewShopComponent } from './view-new-shop.component';

describe('ViewNewShopComponent', () => {
  let component: ViewNewShopComponent;
  let fixture: ComponentFixture<ViewNewShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
