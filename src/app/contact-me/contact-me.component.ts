import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MailStatusOverlayComponent } from '../mail-status-overlay/mail-status-overlay.component';
import { flatMap } from 'rxjs';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, MailStatusOverlayComponent],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  acceptedPolicy = false;
  arrowUpIcon = './assets/img/arrows/arrow-up-default.svg';
  phoneSource = 'assets/img/icons/phone-default-icon.svg';
  mailSource = 'assets/img/icons/letter-default-icon.svg';
  policyIconSource = './assets/img/icons/empty-box-icon.svg'; // Default Icon

  showMailStatusOverlay = false;
  http = inject(HttpClient);
  notification = 'Mail Send Successfully';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;

  post = {
    endPoint: 'https://kieran-noel-mai.de/sendMail.php',
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
            this.showNotification('Mail was not send');
          },
          complete: () => {
            console.info('send post complete');
            this.showNotification('Mail Send Successfully');
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

  showNotification(mess: string) {
    this.notification = mess;
    this.showMailStatusOverlay = true;
    setTimeout(() => {
      this.showMailStatusOverlay = false;
    }, 3000);
  }

  onMouseOver(): void {
    this.arrowUpIcon = './assets/img/arrows/arrow-up-hover.svg';
  }

  onMouseOut(): void {
    this.arrowUpIcon = './assets/img/arrows/arrow-up-default.svg';
  }

  phoneDefault(): void {
    this.phoneSource = 'assets/img/icons/phone-default-icon.svg';
  }

  phoneHover(): void {
    this.phoneSource = 'assets/img/icons/phone-hover-icon.svg';
  }

  mailDefault(): void {
    this.mailSource = 'assets/img/icons/letter-default-icon.svg';
  }

  mailHover(): void {
    this.mailSource = 'assets/img/icons/letter-hover-icon.svg';
  }
}
