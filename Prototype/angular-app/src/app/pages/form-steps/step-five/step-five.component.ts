import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormService} from "../../../form.service";

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {

  step: FormGroup;

  showPurchasedClothing:boolean = false;
  showMoreOptions:boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({});
    this.formService.stepReady(this.step, 'five')
  }

  ngOnInit(): void {
  }

  toggle() {
    this.showMoreOptions = !this.showMoreOptions;
    console.log("Options", this.showMoreOptions);
  }

}
