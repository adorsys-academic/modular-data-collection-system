import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../../form.service";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      taxNr: ['', Validators.required, Validators.minLength(11)],
      taxClass: ['', Validators.required],
      street: ['', Validators.required],
      houseNr: ['', Validators.required],
      plz: ['', Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      place: ['', Validators.required],
      branch: ['', Validators.required],
      employment: ['', Validators.required]
    });
    this.formService.stepReady(this.step, 'one');
  }

  ngOnInit(): void {
  }

}
