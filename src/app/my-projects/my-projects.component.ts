import { Component, input } from '@angular/core';
import { ProjectMacroComponent } from '../project-macro/project-macro.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ProjectMacroComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  projects = [
    {
      name: 'Join',
      img: 'join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: 'Angular | Typescript | HTML | CSS | Firebase',
      githubLink: 'https://github.com/NoelKi/Join-Dummy',
      websiteLink:
        'https://join-276.developerakademie.net/src/pages/login.html',
    },
    {
      name: 'Sharkie',
      img: 'sharkie',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      languages: 'Javascript | HTML | CSS',
      githubLink: 'https://github.com/NoelKi/Sharkie-Game',
      websiteLink:
        'https://kieran-mai.developerakademie.net/Sharkie/src/index.html',
    },
  ];
}
