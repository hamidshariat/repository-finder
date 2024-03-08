import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreModule, provideStore } from '@ngrx/store';
import { repositoryReducer } from './data/repository.reducer';
import { reducers, metaReducers } from './data/reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: StoreModule.forRoot(), useValue: { repository: repositoryReducer } },

    provideStoreDevtools({
        logOnly: !isDevMode(),
        connectInZone: true,
    }), provideStore(reducers, { metaReducers })]

};
