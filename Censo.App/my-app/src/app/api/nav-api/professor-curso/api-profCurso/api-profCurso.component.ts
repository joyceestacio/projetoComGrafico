import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../_services/api.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-api-profCurso',
  templateUrl: './api-profCurso.component.html',
  styleUrls: ['./api-profCurso.component.css']
})

export class ApiProfCursoComponent implements OnInit {

  constructor(private api: ApiService) { }

  /* campus */
  resultadoCampus: any;
  informacaoCurso: any[];
  informacaoCampi: any;

  /* curso */
  campoSelecionado: any;
  cursoFiltrado: any;

  /* resultado */
  resultadoTabela: any;
  errodados = false;


  ngOnInit() {
    this.campus();
  }

  /** input campus */
  campus() {
    this.api.campus().subscribe(
      response => {  //cursos e campi
        this.resultadoCampus = response;
        this.informacaoCurso = this.resultadoCampus.cursos;
        this.informacaoCampi = this.resultadoCampus.campi;
      },
      error => {
        console.log('curso' + error);
      }
    );
  }

  /** input curso */
  curso(algumacoisa: any) {
    this.campoSelecionado = algumacoisa;
    this.cursoFiltrado = this.informacaoCurso.filter(c => c.codCampus == algumacoisa);
  }

  /** resultado tabela */
  resultado(valorQualquer: number) {
    this.api.getRegulatorioProfessorCurso(valorQualquer).subscribe(
      response => {
        this.errodados = false;
        this.resultadoTabela = response;
        // console.log(this.resultado);
        console.log(this.errodados);
      },
      error => {
        this.errodados = true;
        console.log(error);
      }
    );
  }



}








