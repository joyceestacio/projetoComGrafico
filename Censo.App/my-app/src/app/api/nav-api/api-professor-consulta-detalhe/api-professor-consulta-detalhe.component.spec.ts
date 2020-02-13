/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiProfessorConsultaDetalheComponent } from './api-professor-consulta-detalhe.component';

describe('ApiProfessorConsultaDetalheComponent', () => {
  let component: ApiProfessorConsultaDetalheComponent;
  let fixture: ComponentFixture<ApiProfessorConsultaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiProfessorConsultaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiProfessorConsultaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
