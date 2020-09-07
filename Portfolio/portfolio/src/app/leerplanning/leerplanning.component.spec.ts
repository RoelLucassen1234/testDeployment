import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerplanningComponent } from './leerplanning.component';

describe('LeerplanningComponent', () => {
  let component: LeerplanningComponent;
  let fixture: ComponentFixture<LeerplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
