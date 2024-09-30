import { Routes } from '@angular/router';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: AboveTheFoldComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'LegalNotice', component: LegalNoticeComponent },
];
