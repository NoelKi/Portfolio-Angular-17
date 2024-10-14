import { Component } from '@angular/core';
import { links } from '../core/header.module';
@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  links = links;

  contactLink = links[3];
  whyMeLink = links[0];

  arrowIconSource = './assets/img/arrows/arrow-down-default.svg';

  arrowHover(): void {
    this.arrowIconSource = './assets/img/arrows/arrow-down-hover.svg';
  }

  arrowDefault(): void {
    this.arrowIconSource = './assets/img/arrows/arrow-down-default.svg';
  }
}
