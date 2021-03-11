import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {TestPageComponent} from "./pages/test-page/test-page.component";
import {FormPageComponent} from "./pages/form-page/form-page.component";
import {BuildingKitPageComponent} from "./pages/building-kit-page/building-kit-page.component";
import {StartPageComponent} from "./pages/start-page/start-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent},
  { path: 'test', component: TestPageComponent},
  { path: 'form', component: FormPageComponent},
  { path: 'building-kit', component: BuildingKitPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
