import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuhtenticationComponent } from './auhtentication.component';

describe('AuhtenticationComponent', () => {
  let component: AuhtenticationComponent;
  let fixture: ComponentFixture<AuhtenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuhtenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuhtenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
