import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPrinciplesComponent } from './security-principles.component';

describe('SecurityPrinciplesComponent', () => {
  let component: SecurityPrinciplesComponent;
  let fixture: ComponentFixture<SecurityPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityPrinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
