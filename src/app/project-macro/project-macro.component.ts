import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-macro',
  standalone: true,
  imports: [],
  templateUrl: './project-macro.component.html',
  styleUrl: './project-macro.component.scss'
})
export class ProjectMacroComponent {
  @Input()project = {
    name: 'Join',
    img: 'join',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    languages: 'Angular | Typescript | HTML | CSS | Firebase',
    githubLink: 'www.github.de',
    websiteLink: 'www.google.de'
  }
}
