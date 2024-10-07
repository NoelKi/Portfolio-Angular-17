import { Component } from '@angular/core';
import { HeaderSimpleComponent } from '../core/components/header-simple/header-simple.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderSimpleComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {}
