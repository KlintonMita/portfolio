import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StartScreenComponent } from '../start-screen/start-screen.component';

AOS.init();

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StartScreenComponent,
  ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  letsWork: string = "Let's work";
  together: string = "together";
  textWork: string =
    'I am a Front-end developer based in Osnabrück, Germany. I enjoy helping designers and companies bring their ideas into real life. I am looking forward to continuing my developer career with a job in a junior web developer position';
  goodMatch: string =
    'If you think I’d be a good match for your projects, contact me!';
  sendMessage: string = 'Send a message';
  skillSet: string = 'Skill Set';
  myWork: string = 'My Work';
  explore: string = 'Explore a selection of my work here - Interact with';
  projects: string = 'projects to see my skills in action.';
  project1: string =
    'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.';
  project2: string = 'A simple order restaurant based on Lieferando.';
  project3: string =
    'A very Simple Customer Relationship Management system working with CRUD functionality.';
  contact: string = 'Contact';
  problemSolve: string = 'Got a problem to solve?';
  contactMe: string =
    'Contact me through this form, I am interested in hearing from you,knowing your ideas and contributing to your projects with my work.';
  needDeveloper: string = 'Need a Frontend developer?';
  callMe: string = 'Contact me!';
  nameP: string = 'Your Name';
  fillName: string = 'Please fill the name!';
  emailA: string = 'Your Email Address';
  fillEmail: string = 'Please fill the email!';
  validEmail: string = 'Please enter a valid email address!';
  enterM: string = 'Please enter a message!';
  termsC: string = 'I accept the terms and conditions';
  acceptT: string = 'You must accept the terms and conditions!';
  emailSent: string = 'Your email has been sent successfully!';
  submitT: string = 'Submit';
  yourMessage: string = 'Your Message';

  english() {
    this.letsWork = "Let's work";
    this.together = "together";
    this.textWork =
      'I am a Front-end developer based in Osnabrück, Germany. I enjoy helping designers and companies bring their ideas into real life. I am looking forward to continuing my developer career with a job in a junior web developer position';
    this.goodMatch =
      'If you think I’d be a good match for your projects, contact me!';
    this.sendMessage = 'Send a message';
    this.skillSet = 'Skill Set';
    this.myWork = 'My Work';
    this.explore = 'Explore a selection of my work here - Interact with';
    this.projects = 'projects to see my skills in action.';
    this.project1 =
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.';
    this.project2 = 'A simple order restaurant based on Lieferando.';
    this.project3 =
      'A very Simple Customer Relationship Management system working with CRUD functionality.';
    this.contact = 'Contact';
    this.problemSolve = 'Got a problem to solve?';
    this.contactMe =
      'Contact me through this form, I am interested in hearing from you,knowing your ideas and contributing to your projects with my work.';
    this.needDeveloper = 'Need a Frontend developer?';
    this.callMe = 'Contact me!';
    this.nameP = 'Your Name';
    this.fillName = 'Please fill the name!';
    this.emailA = 'Your Email Address';
    this.fillEmail = 'Please fill the email!';
    this.validEmail = 'Please enter a valid email address!';
    this.enterM = 'Please enter a message!';
    this.termsC = 'I accept the terms and conditions';
    this.acceptT = 'You must accept the terms and conditions!';
    this.emailSent = 'Your email has been sent successfully!';
    this.submitT = 'Submit';
    this.yourMessage = 'Your Message';
    this.englishStyle();
  }

  german() {
    this.letsWork = 'Lasst uns';
    this.together = 'zusammenarbeiten'
    this.textWork =
      'Ich bin ein Front-End-Entwickler mit Sitz in Osnabrück, Deutschland. Ich helfe gerne Designern und Unternehmen dabei, ihre Ideen in die Realität umzusetzen. Ich freue mich darauf, meine Entwicklerkarriere mit einer Stelle als Junior-Webentwickler fortzusetzen';
    this.goodMatch =
      'Wenn Sie denken, dass ich gut zu Ihren Projekten passe, kontaktieren Sie mich gerne!';
    this.sendMessage = 'Nachricht schicken';
    this.skillSet = 'Fähigkeiten';
    this.myWork = 'Meine Arbeit';
    this.explore =
      'Erkunden Sie eine Auswahl meiner Arbeit hier - Interagieren Sie mit';
    this.projects = 'Projekte, um meine Fähigkeiten in Aktion zu sehen.';
    this.project1 =
      'Spring-, Lauf- und Wurfspiel basierend auf dem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.';
    this.project2 = 'Ein einfaches Bestellrestaurant basierend auf Lieferando.';
    this.project3 =
      'Ein sehr einfaches Customer-Relationship-Management-System, das mit CRUD-Funktionalität funktioniert.';
    this.contact = 'Kontakt';
    this.problemSolve = 'Haben Sie ein Problem zu lösen?';
    this.contactMe =
      'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.';
    this.needDeveloper = 'Brauchen Sie einen Frontend-Entwickler?';
    this.callMe = 'Kontakt mich';
    this.nameP = 'Ihr Name';
    this.fillName = 'Bitte füllen Sie den Namen aus!';
    this.emailA = 'Ihre E-Mail-Adresse';
    this.fillEmail = 'Bitte füllen Sie die E-Mail aus!';
    this.validEmail = 'Bitte geben Sie eine gültige E-Mail-Adresse ein!';
    this.enterM = 'Bitte geben Sie eine Nachricht ein!';
    this.termsC = 'Ich akzeptiere die Allgemeinen Geschäftsbedingungen.';
    this.acceptT =
      'Sie müssen die Allgemeinen Geschäftsbedingungen akzeptieren!';
    this.emailSent = 'Ihre E-Mail wurde erfolgreich versendet!';
    this.submitT = 'Absenden';
    this.yourMessage = 'Ihre Nachricht';
    this.germanStyle();
  }

  germanStyle() {
    const workTogether = document.getElementById('letsWorkId');

    if (window.innerWidth < 480) {
      workTogether!.style.fontSize = '30px';
    } else {
      workTogether!.style.fontSize = '';
    }
  }

  englishStyle() {
    const workTogether = document.getElementById('letsWorkId');

    if (window.innerWidth < 480) {
      workTogether!.style.fontSize = '';
    } else {
      workTogether!.style.fontSize = '';
    }
  }

  http = inject(HttpClient);

  formData = {
    name: '',
    email: '',
    message: '',
    terms: false,
  };

  emailSentSuccessfully = false;

  mailTest = false;

  post = {
    endPoint: 'sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            this.emailSentSuccessfully = true;
            setTimeout(() => {
              this.emailSentSuccessfully = false;
            }, 10000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
