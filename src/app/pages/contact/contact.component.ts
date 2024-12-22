import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fromEmail: ['', [Validators.required, Validators.email]],
      object: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit () {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;

      const emailData = {
        from_email: formValue.fromEmail,
        to_email: 'contact@alexandreaubert.fr', // Your email address
        subject: formValue.object,
        message: formValue.message,
      };

      emailjs
        .send(
          'service_1rfzloc',
          'template_vd67o5h',
          emailData,
          'qRipjDUoqxbgfjFI-'
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response.text);
            alert('Votre message a été envoyé !');
            this.contactForm.reset(); // Reset the form after submission
          },
          (error) => {
            console.error('Error sending email:', error.text);
            alert('Erreur lors de l\'envoi du message.');
          }
        );
    } else {
      alert('Merci de renseigner l\'ensemble des champs correctement.');
    }
  }

}
