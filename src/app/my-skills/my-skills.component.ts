import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
    'angular',
    'typescript',
    'javascript',
    'css',
    'python',
    'html',
    'firebase',
    'github',
    'scrum',
  ];

  capitalizeFirstLetter(skill: string): string {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
  }
}
