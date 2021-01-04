import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redvsblue2Component } from './redvsblue2.component';

describe('Redvsblue2Component', () => {
  let component: Redvsblue2Component;
  let fixture: ComponentFixture<Redvsblue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Redvsblue2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Redvsblue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
