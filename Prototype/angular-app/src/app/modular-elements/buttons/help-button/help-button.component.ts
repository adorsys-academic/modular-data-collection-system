import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss']
})
export class HelpButtonComponent implements OnInit {

  @Input() helpButtonClass:string;

  constructor() { }

  ngOnInit() {
  }

}
