import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-api-consultaProfessor',
  templateUrl: './api-consultaProfessor.component.html',
  styleUrls: ['./api-consultaProfessor.component.css']
})
export class ApiConsultaProfessorComponent implements OnInit {

  constructor(private api: ApiService) { }

  /** informacoesProfessor */
  dadosProfessor: any;
  public informacao;
  p: any;
  
  ngOnInit() {
    this.informacoesProfessor();
  }

  informacoesProfessor() {
    this.api.informacoesProfessores(this.informacao).subscribe(
      response => {  //cursos e campi
        this.dadosProfessor = response;
      },
      error => {
        console.log('professor' + error);
      }
    );
  }



}
