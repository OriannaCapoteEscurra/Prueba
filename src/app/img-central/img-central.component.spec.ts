import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCentralComponent } from './img-central.component';

describe('ImgCentralComponent', () => {
  let component: ImgCentralComponent;
  let fixture: ComponentFixture<ImgCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
