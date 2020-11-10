import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalresearchComponent } from './personalresearch.component';

describe('PersonalresearchComponent', () => {
  let component: PersonalresearchComponent;
  let fixture: ComponentFixture<PersonalresearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalresearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
