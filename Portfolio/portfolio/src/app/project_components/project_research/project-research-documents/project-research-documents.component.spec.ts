import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectResearchDocumentsComponent } from './project-research-documents.component';

describe('ProjectResearchDocumentsComponent', () => {
  let component: ProjectResearchDocumentsComponent;
  let fixture: ComponentFixture<ProjectResearchDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectResearchDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectResearchDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
