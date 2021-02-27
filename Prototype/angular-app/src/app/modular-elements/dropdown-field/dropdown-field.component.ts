import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {

  @Input() dropdownFieldLabel:string;

  constructor() { }

  ngOnInit() {
  }

}
