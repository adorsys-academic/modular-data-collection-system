import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormService} from "../../../form.service";

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {

  step: FormGroup;

  showPurchasedBook:boolean = false;
  showMoreOptions:boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({});
    this.formService.stepReady(this.step, 'four')
  }

  ngOnInit(): void {
  }

  toggle() {
    this.showMoreOptions = !this.showMoreOptions;
    console.log("Options", this.showMoreOptions);
  }

}
