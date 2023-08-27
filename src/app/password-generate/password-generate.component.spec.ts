import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGenerateComponent } from './password-generate.component';

describe('PasswordGenerateComponent', () => {
  let component: PasswordGenerateComponent;
  let fixture: ComponentFixture<PasswordGenerateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordGenerateComponent]
    });
    fixture = TestBed.createComponent(PasswordGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
