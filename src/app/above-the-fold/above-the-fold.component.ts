import { Component } from '@angular/core';
import { WhyMeComponent } from '../why-me/why-me.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [WhyMeComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {}
