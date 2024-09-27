import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplayerMacroComponent } from './teamplayer-macro.component';

describe('TeamplayerMacroComponent', () => {
  let component: TeamplayerMacroComponent;
  let fixture: ComponentFixture<TeamplayerMacroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamplayerMacroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamplayerMacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
