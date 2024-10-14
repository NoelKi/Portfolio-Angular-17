import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'LegalNotice', component: LegalNoticeComponent },
];
