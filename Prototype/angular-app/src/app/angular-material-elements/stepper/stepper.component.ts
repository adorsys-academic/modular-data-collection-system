import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [ FormService ]
})
export class StepperComponent implements OnInit {

  ngOnInit(): void {
  }

  myForm: Array<string>;

  constructor(
    public formService: FormService,
    private fb: FormBuilder
  ) {
    this.myForm = this.formService.mainForm.value
  }

  keys() : Array<string> {
    return Object.keys(this.myForm);
  }
}
