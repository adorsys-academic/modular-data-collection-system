import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ButtonComponent } from './modular-elements/button/button.component';
import { IconButtonComponent } from './modular-elements/icon-button/icon-button.component';
import { ToggleButtonComponent } from './modular-elements/toggle-button/toggle-button.component';
import { CircleButtonComponent } from './modular-elements/circle-button/circle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconButtonComponent,
    ToggleButtonComponent,
    CircleButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
