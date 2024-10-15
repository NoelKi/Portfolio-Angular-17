import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-mail-status-overlay',
  standalone: true,
  imports: [],
  templateUrl: './mail-status-overlay.component.html',
  styleUrl: './mail-status-overlay.component.scss',
})
export class MailStatusOverlayComponent {
  message = input.required<string>();
}
