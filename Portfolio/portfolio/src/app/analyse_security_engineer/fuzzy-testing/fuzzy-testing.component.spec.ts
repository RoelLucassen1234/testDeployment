import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyTestingComponent } from './fuzzy-testing.component';

describe('FuzzyTestingComponent', () => {
  let component: FuzzyTestingComponent;
  let fixture: ComponentFixture<FuzzyTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzzyTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzzyTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
