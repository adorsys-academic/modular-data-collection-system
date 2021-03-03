import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
import { StepperComponent } from './angular-material-elements/stepper/stepper.component';

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
    BuildingKitPageComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
