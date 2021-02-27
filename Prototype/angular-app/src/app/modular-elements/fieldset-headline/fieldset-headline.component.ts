import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fieldset-headline',
  templateUrl: './fieldset-headline.component.html',
  styleUrls: ['./fieldset-headline.component.scss']
})
export class FieldsetHeadlineComponent implements OnInit {

  @Input() fieldsetHeadlineText:string;

  constructor() { }

  ngOnInit() {
  }

}
