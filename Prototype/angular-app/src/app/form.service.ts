import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormService {

  private stepOneSource: Subject<FormGroup> = new Subject();
  stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();

  private stepTwoSource: Subject<FormGroup> = new Subject();
  stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();

  private stepThreeSource: Subject<FormGroup> = new Subject();
  stepThree: Observable<FormGroup> = this.stepThreeSource.asObservable();

  private stepFourSource: Subject<FormGroup> = new Subject();
  stepFour: Observable<FormGroup> = this.stepFourSource.asObservable();

  private stepFiveSource: Subject<FormGroup> = new Subject();
  stepFive: Observable<FormGroup> = this.stepFiveSource.asObservable();

  mainForm: FormGroup = this._formBuilder.group({
    firstName: '',
    lastName: '',
    address: ''
  });

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepOne.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.firstName = val.firstName;
        this.mainForm.value.lastName = val.lastName;
      })
    );
    this.stepTwo.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.address = val.address;
      })
    );
    this.stepThree.subscribe(form =>
      form.valueChanges.subscribe(val => {})
    );
    this.stepFour.subscribe(form =>
      form.valueChanges.subscribe(val => {})
    );
    this.stepFive.subscribe(form =>
      form.valueChanges.subscribe(val => {})
    )
  }

  stepReady(form: FormGroup, part) {
    switch (part) {
      case 'one': { this.stepOneSource.next(form) }
      case 'two': { this.stepTwoSource.next(form) }
      case 'three': { this.stepThreeSource.next(form) }
      case 'four': { this.stepFourSource.next(form) }
      case 'five': { this.stepFiveSource.next(form) }
    }
  }
}
