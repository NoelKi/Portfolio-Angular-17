import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { WhyMeComponent } from './why-me/why-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AboveTheFoldComponent,
    WhyMeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolioAngular17';
}
