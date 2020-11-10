import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerplanresearchComponent } from './leerplanresearch.component';

describe('LeerplanresearchComponent', () => {
  let component: LeerplanresearchComponent;
  let fixture: ComponentFixture<LeerplanresearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerplanresearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerplanresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
