import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { ImpressumComponent } from '../impressum/impressum.component';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [MyWorkComponent, FooterComponent, ImpressumComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  @ViewChild(MyWorkComponent)
  myWorkComponent!: MyWorkComponent;
  @ViewChild(FooterComponent)
  myFooterComponent!: FooterComponent;

  openNav() {
    const mySidenav = document.getElementById("mySidenav");
    const mySpanId = document.getElementById("spanid");
    const myBodyid = document.getElementById("bodyid");

    if (mySidenav ) {
      mySidenav.style.width = "100%";
    }
    if (mySpanId ) {
      mySpanId.style.display = "none";
    }
    if (myBodyid ) {
      myBodyid.style.overflow = "hidden";
    }
  }
  
  closeNav() {
    const mySidenav = document.getElementById("mySidenav");
    const mySpanId = document.getElementById("spanid");
    const myBodyid = document.getElementById("bodyid");
    if (mySidenav) {
      mySidenav.style.width = "0";
    }
    if (mySpanId ) {
      mySpanId.style.display = "block";
    }
    if (myBodyid ) {
      myBodyid.style.overflow = "unset";
    }
  }

  closeImpressum() {
    const myImpressum = document.getElementById('impressumId');
    const myWork = document.getElementById('workID');
    const myFooter = document.getElementById('footerID');
    const myPhotoID = document.getElementById('mainPhotoID');
    const footerIdImpressum = document.getElementById('footerIdImpressum');
    const navId = document.getElementById('navId');
    if (navId) {
      navId.style.width = '';
    }

    if (myImpressum) {
      myImpressum.style.display = 'none';
    }
    if (myWork) {
      myWork.style.display = 'block';
    }
    if (myFooter) {
      myFooter.style.display= '';
    }
    if (myPhotoID) {
      myPhotoID.style.display= 'unset';
    }
    if (footerIdImpressum) {
      footerIdImpressum.style.display= 'none';
      footerIdImpressum.style.position= '';
    }
  }

  aboutMe: string = 'About Me';
  skillSet: string = 'Skill Set';
  myWork: string = 'My Work';
  hello: string = 'Hello! I am Klinton';
  frontend: string = 'FRONTEND';
  developer: string = 'DEVELOPER';
  scroll: string = 'Scroll';
  contact: string = 'Contact';


  eng() {
    this.myWorkComponent.english();
    const myFlagEng = document.getElementById('engBtnSelected');
    const myFlagGer = document.getElementById('gerBtnSelected');
    const myFlagEng3 = document.getElementById('engBtn');
    const myFlagGer3 = document.getElementById('gerBtn');
    if(myFlagEng) {
      myFlagEng.style.display = 'block';
    }
    if(myFlagGer) {
      myFlagGer.style.display = 'none';
    }
    if(myFlagEng3) {
      myFlagEng3.style.display = 'none';
    }
    if(myFlagGer3) {
      myFlagGer3.style.display = 'block';
    }
    this.aboutMe = 'About Me';
    this.skillSet = 'Skill Set';
    this.myWork = 'My Work';
    this.hello = 'Hello! I am Klinton';
    this.frontend = 'FRONTEND';
    this.developer = 'DEVELOPER';
    this.scroll = 'Scroll';
    this.contact = 'Contact';
  }

  eng2() {
    this.eng();
    const myFlagEng = document.getElementById('engBtnSelected2');
    const myFlagGer = document.getElementById('gerBtnSelected2');
    const myFlagEng3 = document.getElementById('engBtn2');
    const myFlagGer3 = document.getElementById('gerBtn2');

    if(myFlagEng) {
      myFlagEng.style.display = 'block';
    }
    if(myFlagGer) {
      myFlagGer.style.display = 'none';
    }
    if(myFlagEng3) {
      myFlagEng3.style.display = 'none';
    }
    if(myFlagGer3) {
      myFlagGer3.style.display = 'block';
    }
  }

  de2() {
    this.de();
    const myFlagEng2 = document.getElementById('engBtnSelected2');
    const myFlagGer2 = document.getElementById('gerBtnSelected2');
    const myFlagEng4 = document.getElementById('engBtn2');
    const myFlagGer4 = document.getElementById('gerBtn2');

    if (myFlagEng2) {
      myFlagEng2.style.display = 'none';
    }
    if (myFlagGer2) {
      myFlagGer2.style.display = 'block';
    }
    if (myFlagEng4) {
      myFlagEng4.style.display = 'block';
    }
    if (myFlagGer4) {
      myFlagGer4.style.display = 'none';
    }
  }

  de() {
    this.myWorkComponent.german();
    const myFlagEng2 = document.getElementById('engBtnSelected');
    const myFlagGer2 = document.getElementById('gerBtnSelected');
    const myFlagEng4 = document.getElementById('engBtn');
    const myFlagGer4 = document.getElementById('gerBtn');
    if (myFlagEng2) {
      myFlagEng2.style.display = 'none';
    }
    if (myFlagGer2) {
      myFlagGer2.style.display = 'block';
    }
    if (myFlagEng4) {
      myFlagEng4.style.display = 'block';
    }
    if (myFlagGer4) {
      myFlagGer4.style.display = 'none';
    }
    this.aboutMe = 'Über mich';
    this.skillSet = 'Fähigkeiten';
    this.myWork = 'Meine Arbeit';
    this.hello = 'Hallo! Ich bin Klinton';
    this.frontend = 'FRONTEND';
    this.developer = 'ENTWICKLER';
    this.scroll = 'Scrollen';
    this.contact = 'Kontakt';
  }
}


