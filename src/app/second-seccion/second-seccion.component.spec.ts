import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSeccionComponent } from './second-seccion.component';

describe('SecondSeccionComponent', () => {
  let component: SecondSeccionComponent;
  let fixture: ComponentFixture<SecondSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
