import { I18nPluralPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teamplayer-macro',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer-macro.component.html',
  styleUrl: './teamplayer-macro.component.scss'
})
export class TeamplayerMacroComponent {
@Input()evaluation = {
    name: 'Amadeus',
    project: 'CEO Sorglos Internet',
    evaluation: '``Kieran demonstrates a rapid understanding of new concepts and a high level of resilience. His ability to adopt a holistic perspective has made him a valuable contributor to our team.´´ '
  }
}
