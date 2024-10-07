import { Component } from '@angular/core';
import { HeaderSimpleComponent } from '../core/components/header-simple/header-simple.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderSimpleComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
