import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ContactMeComponent,
    FooterComponent,
    TeamplayerComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
