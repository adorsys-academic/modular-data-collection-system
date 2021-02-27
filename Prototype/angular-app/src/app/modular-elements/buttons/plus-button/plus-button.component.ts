import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.scss']
})
export class PlusButtonComponent implements OnInit {

  @Input() plusButtonClass:string;
  @Input() plusButtonLabel:string;

  constructor() { }

  ngOnInit() {
  }

}
