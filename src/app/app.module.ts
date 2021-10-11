import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material-module';
import { ListModule } from './list/list.module';
import { StoreModule } from '@ngrx/store';
import * as appStore from './Store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './Store/app.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ListModule,
    StoreModule.forRoot({ app: appStore.reducer }),
    EffectsModule.forRoot([TodosEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
