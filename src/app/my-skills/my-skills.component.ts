import { Component } from '@angular/core';
import { MyProjectsComponent } from '../my-projects/my-projects.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [MyProjectsComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
