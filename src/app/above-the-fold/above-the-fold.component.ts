import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  arrowIconSource = './assets/img/arrows/arrow-down-default.svg';

  arrowHover(): void {
    this.arrowIconSource = './assets/img/arrows/arrow-down-hover.svg';
  }

  arrowDefault(): void {
    this.arrowIconSource = './assets/img/arrows/arrow-down-default.svg';
  }
}
