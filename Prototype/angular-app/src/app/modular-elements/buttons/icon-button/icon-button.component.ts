import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() iconButtonClass:string;
  @Input() iconButtonImg:string;
  @Input() iconButtonLabel:string;

  constructor() { }

  ngOnInit() {
  }

}
