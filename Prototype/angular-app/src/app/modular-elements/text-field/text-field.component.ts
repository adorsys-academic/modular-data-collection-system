import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input() textFieldLabel:string;
  @Input() textFieldClass:string;
  @Input() textFieldControl:string;
  @Input() textFieldReadonly:boolean;

  constructor() { }

  ngOnInit() {
  }

}
