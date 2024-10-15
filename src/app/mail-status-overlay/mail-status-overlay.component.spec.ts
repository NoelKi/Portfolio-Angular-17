import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailStatusOverlayComponent } from './mail-status-overlay.component';

describe('MailStatusOverlayComponent', () => {
  let component: MailStatusOverlayComponent;
  let fixture: ComponentFixture<MailStatusOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailStatusOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailStatusOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
