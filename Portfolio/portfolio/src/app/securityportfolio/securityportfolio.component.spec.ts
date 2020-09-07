import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityportfolioComponent } from './securityportfolio.component';

describe('SecurityportfolioComponent', () => {
  let component: SecurityportfolioComponent;
  let fixture: ComponentFixture<SecurityportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
