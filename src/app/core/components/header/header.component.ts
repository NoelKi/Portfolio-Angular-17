import { Component } from '@angular/core';
import { HeaderOverlayComponent } from '../header-overlay/header-overlay.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderOverlayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
