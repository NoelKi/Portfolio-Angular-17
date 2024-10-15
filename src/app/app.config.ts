import { ApplicationConfig, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Stellt die Scroll-Position immer auf "top" nach jeder Navigation
        anchorScrolling: 'enabled', // Aktiviert das Scrollen zu Anker-Verknüpfungen
      })
    ),
    provideHttpClient(),
  ],
};
