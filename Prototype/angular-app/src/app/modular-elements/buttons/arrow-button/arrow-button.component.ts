import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss']
})
export class ArrowButtonComponent implements OnInit {

  @Input() arrowButtonClass:string;
  @Input() arrowButtonImg:string;

  constructor() { }

  ngOnInit() {
  }

}
