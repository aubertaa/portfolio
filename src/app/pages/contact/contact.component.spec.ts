import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import emailjs from 'emailjs-com';
import { of, throwError } from 'rxjs';

// Mock the emailjs library
jest.mock('emailjs-com', () => ({
    send: jest.fn(),
}));

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let sendEmailMock: jest.Mock;

    beforeEach(() => {
        sendEmailMock = emailjs.send as jest.Mock;

        TestBed.configureTestingModule({
            declarations: [ContactComponent],
            imports: [ReactiveFormsModule],
            providers: [FormBuilder],
        });

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Trigger initial change detection
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize the form with correct controls', () => {
        expect(component.contactForm.contains('fromEmail')).toBeTruthy();
        expect(component.contactForm.contains('object')).toBeTruthy();
        expect(component.contactForm.contains('message')).toBeTruthy();
    });

    it('should invalidate the form when fields are empty', () => {
        component.contactForm.controls['fromEmail'].setValue('');
        component.contactForm.controls['object'].setValue('');
        component.contactForm.controls['message'].setValue('');

        expect(component.contactForm.invalid).toBeTruthy();
    });

    it('should validate email format correctly', () => {
        component.contactForm.controls['fromEmail'].setValue('invalid-email');
        expect(component.contactForm.controls['fromEmail'].invalid).toBeTruthy();

        component.contactForm.controls['fromEmail'].setValue('valid.email@example.com');
        expect(component.contactForm.controls['fromEmail'].valid).toBeTruthy();
    });

    it('should show error messages when fields are invalid and touched', () => {
        component.contactForm.controls['fromEmail'].markAsTouched();
        fixture.detectChanges();

        const errorMessages = fixture.debugElement.queryAll(By.css('.error'));
        expect(errorMessages.length).toBeGreaterThan(0); // Ensure error messages are displayed
    });

    it('should submit the form successfully when all fields are valid', () => {
        component.contactForm.controls['fromEmail'].setValue('valid.email@example.com');
        component.contactForm.controls['object'].setValue('Test Subject');
        component.contactForm.controls['message'].setValue('Test message');

        sendEmailMock.mockResolvedValue({ text: 'OK' }); // Mock successful email send

        component.onSubmit();
        fixture.detectChanges();

        expect(sendEmailMock).toHaveBeenCalledTimes(1);
        expect(sendEmailMock).toHaveBeenCalledWith(
            'service_1rfzloc', // Your emailjs service ID
            'template_vd67o5h', // Your emailjs template ID
            {
                from_email: 'valid.email@example.com',
                to_email: 'contact@alexandreaubert.fr',
                subject: 'Test Subject',
                message: 'Test message',
            },
            'qRipjDUoqxbgfjFI-' // Your emailjs user ID
        );
    });

    it('should display success message and reset form after successful submission', async () => {
        sendEmailMock.mockResolvedValue({ text: 'OK' });

        component.contactForm.controls['fromEmail'].setValue('valid.email@example.com');
        component.contactForm.controls['object'].setValue('Test Subject');
        component.contactForm.controls['message'].setValue('Test message');

        window.alert = jest.fn(); // Mock alert function to suppress actual alert

        await component.onSubmit();

        expect(window.alert).toHaveBeenCalledWith('Votre message a été envoyé !');
        expect(component.contactForm.value).toEqual({
            fromEmail: null,
            object: null,
            message: null,
        });
    });

    it('should display error message on failure', async () => {
        sendEmailMock.mockRejectedValue({ text: 'Error' });

        component.contactForm.controls['fromEmail'].setValue('valid.email@example.com');
        component.contactForm.controls['object'].setValue('Test Subject');
        component.contactForm.controls['message'].setValue('Test message');

        window.alert = jest.fn(); // Mock alert function to suppress actual alert

        await component.onSubmit();

        expect(window.alert).toHaveBeenCalledWith("Erreur lors de l'envoi du message.");
    });

    it('should disable the submit button if the form is invalid', () => {
        component.contactForm.controls['fromEmail'].setValue('');
        fixture.detectChanges();

        const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
        expect(submitButton.disabled).toBeTruthy(); // Button should be disabled if the form is invalid

        component.contactForm.controls['fromEmail'].setValue('valid.email@example.com');
        component.contactForm.controls['object'].setValue('Test Subject');
        component.contactForm.controls['message'].setValue('Test message');
        fixture.detectChanges();

        expect(submitButton.disabled).toBeFalsy(); // Button should be enabled if the form is valid
    });
});
