import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openImpressum() {
    const impressumSpan = document.getElementById('impressumSpan');
    const spanid = document.getElementById('spanID2');
    if (impressumSpan ) {
      impressumSpan.style.width = "100%";
    }
    if (spanid ) {
      spanid.style.display = "none";
    }
  }

}
