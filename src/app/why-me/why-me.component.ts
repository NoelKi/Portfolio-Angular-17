import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {
  locationIcon = './assets/img/icons/location-default-icon.svg';
  suitcaseIcon = './assets/img/icons/suitcase-default-icon.svg';
  computerIcon = './assets/img/icons/computer-default-icon.svg';

  onMouseOver(icon: string): void {
    switch (icon) {
      case 'location':
        this.locationIcon = './assets/img/icons/location-hover-icon.svg';
        break;
      case 'suitcase':
        this.suitcaseIcon = './assets/img/icons/suitcase-hover-icon.svg';
        break;
      case 'computer':
        this.computerIcon = './assets/img/icons/computer-hover-icon.svg';
        break;
    }
  }

  onMouseOut(icon: string): void {
    switch (icon) {
      case 'location':
        this.locationIcon = './assets/img/icons/location-default-icon.svg';
        break;
      case 'suitcase':
        this.suitcaseIcon = './assets/img/icons/suitcase-default-icon.svg';
        break;
      case 'computer':
        this.computerIcon = './assets/img/icons/computer-default-icon.svg';
        break;
    }
  }
}
