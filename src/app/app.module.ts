import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MODAL_APPEARANCE_TOKEN, MODAL_APPEARANCE_CONFIG } from './shared/constants/modal-appearance.constant';
import { UserListFeatureModuleModule } from './user-list-feature-module/user-list-feature-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserListFeatureModuleModule
  ],
  providers: [
    {
      provide: MODAL_APPEARANCE_TOKEN,
      useValue: MODAL_APPEARANCE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
