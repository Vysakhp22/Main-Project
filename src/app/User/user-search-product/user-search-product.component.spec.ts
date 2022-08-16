import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchProductComponent } from './user-search-product.component';

describe('UserSearchProductComponent', () => {
  let component: UserSearchProductComponent;
  let fixture: ComponentFixture<UserSearchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
