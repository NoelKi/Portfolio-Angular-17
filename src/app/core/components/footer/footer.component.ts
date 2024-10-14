import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  mailSource = 'assets/img/icons/footer-mail.svg';
  linkedInSource = 'assets/img/icons/footer-linkedin.svg';
  githubSource = 'assets/img/icons/footer-github.svg';

  mailHover(): void {
    this.mailSource = 'assets/img/icons/footer-mail-hover.svg';
  }

  mailDefault(): void {
    this.mailSource = 'assets/img/icons/footer-mail.svg';
  }

  linkedHover(): void {
    this.linkedInSource = 'assets/img/icons/footer-linkedin-hover.svg';
  }

  linkedDefault(): void {
    this.linkedInSource = 'assets/img/icons/footer-linkedin.svg';
  }

  githubHover(): void {
    this.githubSource = 'assets/img/icons/footer-github-hover.svg';
  }

  githubDefault(): void {
    this.githubSource = 'assets/img/icons/footer-github.svg';
  }
}
