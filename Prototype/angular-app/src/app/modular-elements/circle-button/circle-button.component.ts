import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent implements OnInit {

  @Input() circleButtonClass:string;
  @Input() circleButtonImg:string;

  constructor() { }

  ngOnInit() {
  }

}
