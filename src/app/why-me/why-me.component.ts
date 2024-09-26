import { Component } from '@angular/core';
import { MySkillsComponent } from "../my-skills/my-skills.component";

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [MySkillsComponent],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

}
