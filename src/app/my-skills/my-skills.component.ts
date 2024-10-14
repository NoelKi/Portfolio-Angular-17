import { Component } from '@angular/core';
import { links } from '../core/header.module';
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
    'python',
    'matlab',
    'angular',
    'typescript',
    'javascript',
    'css',
    'html',
    'firebase',
    'github',
    'scrum',
  ];
  contactLink = links[3];

  capitalizeFirstLetter(skill: string): string {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
  }
}
