import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';

export class RouteConsts {
  static readonly imprint = $localize`Imprint`;
  static readonly legalNotice = $localize`LegalNotice`;
}

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: RouteConsts.imprint, component: ImprintComponent },
  { path: RouteConsts.legalNotice, component: LegalNoticeComponent },
];
