import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingKitPageComponent } from './building-kit-page.component';

describe('BuildingKitPageComponent', () => {
  let component: BuildingKitPageComponent;
  let fixture: ComponentFixture<BuildingKitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingKitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingKitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
