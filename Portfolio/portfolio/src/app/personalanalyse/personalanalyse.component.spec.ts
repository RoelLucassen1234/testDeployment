import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalanalyseComponent } from './personalanalyse.component';

describe('PersonalanalyseComponent', () => {
  let component: PersonalanalyseComponent;
  let fixture: ComponentFixture<PersonalanalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalanalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalanalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
