import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAnalyseDocumentsComponent } from './project-analyse-documents.component';

describe('ProjectAnalyseDocumentsComponent', () => {
  let component: ProjectAnalyseDocumentsComponent;
  let fixture: ComponentFixture<ProjectAnalyseDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAnalyseDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAnalyseDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
