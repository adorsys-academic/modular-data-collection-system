import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {

  @Input() buttonClass:string;
  @Input() buttonText:string;

  constructor() { }

  ngOnInit() {
  }

}
