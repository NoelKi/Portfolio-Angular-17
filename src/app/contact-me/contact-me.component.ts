import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  arrowUpIcon = './assets/img/arrows/arrow-up-default.svg';
  policyIconSource = './assets/img/icons/empty-box-icon.svg'; // Default Icon
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacyPolicy: [false, [Validators.requiredTrue]],
    });

    // Subscribe to form value changes to update icon dynamically
    this.contactForm.valueChanges.subscribe(() => {
      this.setPolicyIconSource();
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value,
      };

      emailjs
        .send(
          'service_bkw92o5',
          'template_67p5fl5',
          templateParams,
          'pGqch9yFVNAmuHBZ-'
        )
        .then(
          (response: EmailJSResponseStatus) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }

  togglePrivacyPolicy() {
    const currentValue = this.contactForm.get('privacyPolicy')?.value;
    this.contactForm.get('privacyPolicy')?.setValue(!currentValue);
  }

  setPolicyIconSource() {
    const privacyPolicyAccepted = this.contactForm.get('privacyPolicy')?.value;
    const formValid = this.contactForm.valid;

    if (privacyPolicyAccepted && formValid) {
      this.policyIconSource = './assets/img/icons/full-box-icon.svg'; // Full box icon
    } else if (privacyPolicyAccepted) {
      this.policyIconSource = './assets/img/icons/half-box-icon.svg'; // Half box icon
    } else {
      this.policyIconSource = './assets/img/icons/empty-box-icon.svg'; // Empty box icon
    }
  }

  onMouseOver(): void {
    this.arrowUpIcon = './assets/img/arrows/arrow-up-hover.svg';
  }

  onMouseOut(): void {
    this.arrowUpIcon = './assets/img/arrows/arrow-up-default.svg';
  }
}
