import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ButtonComponent } from './modular-elements/button/button.component';
import { IconButtonComponent } from './modular-elements/icon-button/icon-button.component';
import { ToggleButtonComponent } from './modular-elements/toggle-button/toggle-button.component';
import { CircleButtonComponent } from './modular-elements/circle-button/circle-button.component';
import { HeaderComponent } from './modular-elements/header/header.component';
import { FooterComponent } from './modular-elements/footer/footer.component';
import { SectionBarComponent } from './modular-elements/section-bar/section-bar.component';
import { TextFieldComponent } from './modular-elements/text-field/text-field.component';
import { DropdownFieldComponent } from './modular-elements/dropdown-field/dropdown-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconButtonComponent,
    ToggleButtonComponent,
    CircleButtonComponent,
    HeaderComponent,
    FooterComponent,
    SectionBarComponent,
    TextFieldComponent,
    DropdownFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
