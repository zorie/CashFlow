/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurservicesComponent } from './ourservices.component';

describe('OurservicesComponent', () => {
  let component: OurservicesComponent;
  let fixture: ComponentFixture<OurservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
