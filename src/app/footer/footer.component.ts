import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImpressumComponent } from '../impressum/impressum.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ImpressumComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  impressumFunction() {
    const myImpressum = document.getElementById('impressumId');
    const myWork = document.getElementById('workID');
    const myFooter = document.getElementById('footerID');
    const myPhotoID = document.getElementById('mainPhotoID');
    const footerIdImpressum = document.getElementById('footerIdImpressum');
    const navId = document.getElementById('navId');
    if (navId) {
      navId.style.width = '0';
    }

    if (myImpressum) {
      myImpressum.style.display = 'flex';
    }
    if (myWork) {
      myWork.style.display = 'none';
    }
    if (myFooter) {
      myFooter.style.display= 'none';
    }
    if (myPhotoID) {
      myPhotoID.style.display= 'none';
    }
    if (footerIdImpressum) {
      footerIdImpressum.style.display= 'flex';
      footerIdImpressum.style.position= 'absolute';
    }
  }
}
