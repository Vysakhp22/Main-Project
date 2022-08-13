import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedShopComponent } from './view-accepted-shop.component';

describe('ViewAcceptedShopComponent', () => {
  let component: ViewAcceptedShopComponent;
  let fixture: ComponentFixture<ViewAcceptedShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcceptedShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
