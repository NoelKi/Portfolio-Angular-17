import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMacroComponent } from './project-macro.component';

describe('ProjectMacroComponent', () => {
  let component: ProjectMacroComponent;
  let fixture: ComponentFixture<ProjectMacroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMacroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectMacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
