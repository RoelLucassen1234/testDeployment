import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatieAnalyseComponent } from './applicatie-analyse.component';

describe('ApplicatieAnalyseComponent', () => {
  let component: ApplicatieAnalyseComponent;
  let fixture: ComponentFixture<ApplicatieAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicatieAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicatieAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
