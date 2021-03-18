import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit, OnChanges {

  private _dropdownFieldValues: string[];

  @Input() dropdownFieldLabel:string;
  @Input() dropdownFieldControl:string;
  @Input() set dropdownFieldValues(value: string[]) {
    this._dropdownFieldValues = value;
    console.log("value", value);
  }
  @Input() dropdownFieldParentForm:FormGroup;

  constructor() {}

  ngOnInit() {
    console.log("Dropdown", this.dropdownFieldValues);
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log("Changes", changes.dropdownFieldValues.currentValue);
    console.log("Dropdown", this.dropdownFieldValues);
  }

  get dropdownFieldValues(): string[] {

    return this._dropdownFieldValues;

  }
}
