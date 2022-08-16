import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraljailnavbarComponent } from './centraljailnavbar.component';

describe('CentraljailnavbarComponent', () => {
  let component: CentraljailnavbarComponent;
  let fixture: ComponentFixture<CentraljailnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentraljailnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentraljailnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
