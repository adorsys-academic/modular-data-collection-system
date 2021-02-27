import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetHeadlineComponent } from './fieldset-headline.component';

describe('FieldsetHeadlineComponent', () => {
  let component: FieldsetHeadlineComponent;
  let fixture: ComponentFixture<FieldsetHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsetHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
