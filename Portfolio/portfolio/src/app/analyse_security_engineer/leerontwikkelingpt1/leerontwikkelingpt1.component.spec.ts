import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leerontwikkelingpt1Component } from './leerontwikkelingpt1.component';

describe('Leerontwikkelingpt1Component', () => {
  let component: Leerontwikkelingpt1Component;
  let fixture: ComponentFixture<Leerontwikkelingpt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Leerontwikkelingpt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Leerontwikkelingpt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
