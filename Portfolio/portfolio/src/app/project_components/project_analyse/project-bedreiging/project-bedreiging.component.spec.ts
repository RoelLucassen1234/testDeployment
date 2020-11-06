import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBedreigingComponent } from './project-bedreiging.component';

describe('ProjectBedreigingComponent', () => {
  let component: ProjectBedreigingComponent;
  let fixture: ComponentFixture<ProjectBedreigingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBedreigingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBedreigingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
