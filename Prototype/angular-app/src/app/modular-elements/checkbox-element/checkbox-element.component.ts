import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox-element',
  templateUrl: './checkbox-element.component.html',
  styleUrls: ['./checkbox-element.component.scss']
})
export class CheckboxElementComponent implements OnInit {

  @Input() checkboxElementId:string;
  @Input() checkboxElementLabelAndValue:string;
  @Input() checkboxElementImg:string;

  constructor() { }

  ngOnInit(): void {
  }

}
