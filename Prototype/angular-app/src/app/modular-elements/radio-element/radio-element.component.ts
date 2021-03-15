import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio-element',
  templateUrl: './radio-element.component.html',
  styleUrls: ['./radio-element.component.scss']
})
export class RadioElementComponent implements OnInit {

  @Input() radioElementId:string;
  @Input() radioElementLabelAndValue:string;
  @Input() radioElementImg:string;

  constructor() { }

  ngOnInit(): void {
  }

}
