import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailsuperintendentRegisterComponent } from './jailsuperintendent-register.component';

describe('JailsuperintendentRegisterComponent', () => {
  let component: JailsuperintendentRegisterComponent;
  let fixture: ComponentFixture<JailsuperintendentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailsuperintendentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailsuperintendentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
