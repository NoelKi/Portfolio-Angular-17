import { Component } from '@angular/core';
import { links } from '../../header.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  burgerIconSource = './assets/img/icons/burger-default-icon.svg';
  xIconSource = './assets/img/icons/close-menu-icon.svg';
  menuOpen = false;

  links = links;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  burgerHover(): void {
    this.burgerIconSource = './assets/img/icons/burger-hover-icon.svg';
  }

  burgerDefault(): void {
    this.burgerIconSource = './assets/img/icons/burger-default-icon.svg';
  }

  xHover(): void {
    this.xIconSource = './assets/img/icons/close-hover-icon.svg';
  }

  xDefault(): void {
    this.xIconSource = './assets/img/icons/close-menu-icon.svg';
  }
}
