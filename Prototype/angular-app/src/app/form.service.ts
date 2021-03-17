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
    taxNr: '',
    taxClass: '',
    street: '',
    houseNr: '',
    plz: '',
    place: '',
    branch: '',
    employment: '',
    workStreet: '',
    workHouseNr: '',
    workPlz: '',
    workPlace: '',
    distance: ''
  });

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepOne.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.firstName = val.firstName;
        this.mainForm.value.lastName = val.lastName;
        this.mainForm.value.taxNr = val.taxNr;
        this.mainForm.value.taxClass = val.taxClass;
        this.mainForm.value.street = val.street;
        this.mainForm.value.houseNr = val.houseNr;
        this.mainForm.value.plz = val.plz;
        this.mainForm.value.place = val.place;
        this.mainForm.value.branch = val.branch;
        this.mainForm.value.employment = val.employment;
      })
    );
    this.stepTwo.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.workStreet = val.workStreet;
        this.mainForm.value.workHouseNr = val.workHouseNr;
        this.mainForm.value.workPlz = val.workPlz;
        this.mainForm.value.workPlace = val.workPlace;
        this.mainForm.value.distance = val.distance;
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
