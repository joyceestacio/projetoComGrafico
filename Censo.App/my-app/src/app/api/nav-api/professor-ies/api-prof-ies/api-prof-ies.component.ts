import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../_services/api.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-api-prof-ies',
  templateUrl: './api-prof-ies.component.html',
  styleUrls: ['./api-prof-ies.component.css']
})

export class ApiProfIesComponent implements OnInit {

  constructor(private api: ApiService) { }

  resultado: any;
  resultadoId: any;
  ies: any;
  p: any;
  mostrarBusca = false;
  mostrarExcel = false;

  chamoies: any;

  ngOnInit() {
    this.getIes();
  }


  getIes() {
    this.api.apiProfIes().subscribe(
      response => {
        this.resultado = response;
        this.chamoies = this.resultado.ies;
        //console.log(this.resultado);
      },
      error => {
        console.log(error);
      });
  }


  // codInstituicao
  buscaId(algumId: string) {
    if (algumId === '-1') {
      return null;
    }
    this.mostrarBusca = true;
    this.resultadoId = [];
    //console.log(this.resultadoId); //dados professor e dados instituição
    this.api.buscaIes(algumId).subscribe(
      response => {
        console.log(response);
        this.resultadoId = response;
        this.mostrarBusca = false;
      },
      error => {
        console.log(error);
      });
  }


  /** exporta excel */
  exportarResultadoExcel(codies: any) {
    if (codies == '-1') {
      return null;
    }

    let blob;
    this.mostrarExcel = true;
    this.api.getRegulatorioProfessorIesExcel(codies).subscribe(response => {
      blob = new Blob([response], { type: 'application/octet-stream' });
      this.mostrarExcel = false;
      saveAs(blob, 'Professor_IES' + ((codies == 0) ? '' : '_' + codies) + '.xlsx');
    });
  }

}