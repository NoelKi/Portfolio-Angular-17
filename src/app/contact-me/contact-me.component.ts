import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  acceptedPolicy = false;
  arrowUpIcon = './assets/img/arrows/arrow-up-default.svg';
  policyIconSource = './assets/img/icons/empty-box-icon.svg'; // Default Icon

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint:
      'https://kieran-mai.developerakademie.net/angular-projects/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor() {}

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.acceptedPolicy
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.acceptedPolicy = false;
            this.setPolicyIconSource(); // Icon wieder zurücksetzen
          },
          error: (error) => {
            console.error(error);
            console.log('error!!');
          },
          complete: () => {
            console.info('send post complete');
            console.log('klappt ;=)');
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.acceptedPolicy = false;
      this.setPolicyIconSource(); // Icon wieder zurücksetzen
    }
  }

  togglePolicy() {
    this.acceptedPolicy = !this.acceptedPolicy;
    this.setPolicyIconSource(); // Aktualisiere das Icon basierend auf dem neuen Zustand
  }

  setPolicyIconSource() {
    if (!this.acceptedPolicy) {
      this.policyIconSource = './assets/img/icons/empty-box-icon.svg';
    } else if (
      this.acceptedPolicy &&
      (!this.contactData.name ||
        !this.contactData.email ||
        !this.contactData.message)
    ) {
      this.policyIconSource = './assets/img/icons/half-box-icon.svg';
    } else if (
      this.acceptedPolicy &&
      this.contactData.name &&
      this.contactData.email &&
      this.contactData.message
    ) {
      this.policyIconSource = './assets/img/icons/full-box-icon.svg';
    }
  }

  onMouseOver(): void {
    this.arrowUpIcon = './assets/img/arrows/arrow-up-hover.svg';
  }

  onMouseOut(): void {
    this.arrowUpIcon = './assets/img/arrows/arrow-up-default.svg';
  }
}
