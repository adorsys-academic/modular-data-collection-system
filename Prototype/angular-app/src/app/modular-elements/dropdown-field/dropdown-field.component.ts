import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {

  @Input() dropdownFieldLabel:string;
  @Input() dropdownFieldControl:string;
  @Input() dropdownFieldValues:[string];
  @Input() dropdownFieldParentForm:FormGroup;

  constructor() {}

  ngOnInit() {
    console.log(this.dropdownFieldControl);
  }

}
