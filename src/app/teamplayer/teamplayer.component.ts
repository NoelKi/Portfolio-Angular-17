import { Component } from '@angular/core';
import { TeamplayerMacroComponent } from '../teamplayer-macro/teamplayer-macro.component';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [TeamplayerMacroComponent],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss',
})
export class TeamplayerComponent {
  evaluations = [
    {
      name: 'Devidas',
      project: 'Project Join',
      evaluation: $localize`:@@evaluationDevidas:'Kieran displayed a professional demeanour and was always available to answer questions or provide guidance on the course content. It was a pleasure to work with him.'`,
    },
    {
      name: 'Marko',
      project: 'Project Join',
      evaluation: $localize`:@@evaluationMarko:'Despite the challenging circumstances, Kieran demonstrated an ability to remain calm and maintain project momentum.'`,
    },
    {
      name: 'Amadeus',
      project: 'CTO sorglosinternet',
      evaluation: $localize`:@@evaluationAmadeus:'Kieran demonstrates a rapid understanding of new concepts and a high level of resilience. His ability to adopt a holistic perspective has made him a valuable contributor to our team.'`,
    },
  ];
}
