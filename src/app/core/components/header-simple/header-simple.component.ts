import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-simple',
  standalone: true,
  imports: [],
  templateUrl: './header-simple.component.html',
  styleUrl: './header-simple.component.scss',
})
export class HeaderSimpleComponent {
  arrowUpSource = './assets/img/arrows/arrow-up-default.svg';

  constructor(private location: Location) {}

  onMouseOver(): void {
    this.arrowUpSource = './assets/img/arrows/arrow-up-hover.svg';
  }

  onMouseOut(): void {
    this.arrowUpSource = './assets/img/arrows/arrow-up-default.svg';
  }

  goBack(): void {
    this.location.back();
  }
}
