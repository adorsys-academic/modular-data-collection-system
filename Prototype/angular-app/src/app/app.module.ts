import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DefaultButtonComponent } from './modular-elements/buttons/default-button/default-button.component';
import { IconButtonComponent } from './modular-elements/buttons/icon-button/icon-button.component';
import { ToggleButtonComponent } from './modular-elements/buttons/toggle-button/toggle-button.component';
import { PlusButtonComponent } from './modular-elements/buttons/plus-button/plus-button.component';
import { HeaderComponent } from './modular-elements/header/header.component';
import { FooterComponent } from './modular-elements/footer/footer.component';
import { SectionBarComponent } from './modular-elements/section-bar/section-bar.component';
import { TextFieldComponent } from './modular-elements/text-field/text-field.component';
import { DropdownFieldComponent } from './modular-elements/dropdown-field/dropdown-field.component';
import { ArrowButtonComponent } from "./modular-elements/buttons/arrow-button/arrow-button.component";
import { FieldsetHeadlineComponent } from './modular-elements/fieldset-headline/fieldset-headline.component';
import { SeperatorComponent } from './modular-elements/seperator/seperator.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { BuildingKitPageComponent } from './pages/building-kit-page/building-kit-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ArrowButtonComponent,
    DefaultButtonComponent,
    IconButtonComponent,
    ToggleButtonComponent,
    PlusButtonComponent,
    HeaderComponent,
    FooterComponent,
    SectionBarComponent,
    TextFieldComponent,
    DropdownFieldComponent,
    FieldsetHeadlineComponent,
    SeperatorComponent,
    TestPageComponent,
    FormPageComponent,
    BuildingKitPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
