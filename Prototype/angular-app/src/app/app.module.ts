import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { DefaultButtonComponent } from './modular-elements/buttons/default-button/default-button.component';
import { IconButtonComponent } from './modular-elements/buttons/icon-button/icon-button.component';
import { ToggleButtonComponent } from './modular-elements/buttons/toggle-button/toggle-button.component';
import { PlusButtonComponent } from './modular-elements/buttons/plus-button/plus-button.component';
import { HeaderComponent } from './modular-elements/header/header.component';
import { HelpButtonComponent } from "./modular-elements/buttons/help-button/help-button.component";
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
import { StartPageComponent } from './pages/start-page/start-page.component';
import { StepOneComponent } from './pages/form-steps/step-one/step-one.component';
import { StepTwoComponent } from './pages/form-steps/step-two/step-two.component';
import { StepThreeComponent } from './pages/form-steps/step-three/step-three.component';
import { StepFourComponent } from './pages/form-steps/step-four/step-four.component';
import { StepFiveComponent } from './pages/form-steps/step-five/step-five.component';
import { RadioElementComponent } from './modular-elements/radio-element/radio-element.component';
import { CheckboxElementComponent } from './modular-elements/checkbox-element/checkbox-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowButtonComponent,
    DefaultButtonComponent,
    IconButtonComponent,
    ToggleButtonComponent,
    PlusButtonComponent,
    HeaderComponent,
    HelpButtonComponent,
    FooterComponent,
    SectionBarComponent,
    TextFieldComponent,
    DropdownFieldComponent,
    FieldsetHeadlineComponent,
    SeperatorComponent,
    TestPageComponent,
    FormPageComponent,
    BuildingKitPageComponent,
    StepperComponent,
    StartPageComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    RadioElementComponent,
    CheckboxElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
