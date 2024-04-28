import { Routes, RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

export const routes: Routes = [
    {path: '', component:StartScreenComponent},
    {path: 'impressum', component:ImpressumComponent}
];
