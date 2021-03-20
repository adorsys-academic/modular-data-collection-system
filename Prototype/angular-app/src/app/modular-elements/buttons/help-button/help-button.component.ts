import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HelpButtonComponent implements OnInit {

  @Input() helpButtonClass:string;
  @Input() helpButtonTooltip:string;

  constructor() { }

  ngOnInit() {
  }

}
