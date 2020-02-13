/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavApiComponent } from './nav-api.component';

describe('NavApiComponent', () => {
  let component: NavApiComponent;
  let fixture: ComponentFixture<NavApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
