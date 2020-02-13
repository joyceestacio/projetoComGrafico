import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-consulta-detalhe',
  templateUrl: './professor-consulta-detalhe.component.html',
  styleUrls: ['./professor-consulta-detalhe.component.css']
})
export class ProfessorConsultaDetalheComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private thisRoute: ActivatedRoute) { }

  id: any;
  dadosProfessor: any;

  ngOnInit() {
    this.detalheProfessor();
  }

  detalheProfessor() {
    this.id = this.thisRoute.snapshot.paramMap.get('id'); // pego o dia do professor 
    this.api.professorConsultaDetalhe(this.id).subscribe( // passo as informações do professor por este id
      response => {
        this.dadosProfessor = response;
        console.log(this.dadosProfessor);
      },
      error => {
        console.log(error);
      }
    );
  }

}



/**
 * import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../_services/professor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-consulta-detalhe',
  templateUrl: './professor-consulta-detalhe.component.html',
  styleUrls: ['./professor-consulta-detalhe.component.css']
})

export class ProfessorConsultaDetalheComponent implements OnInit {

  constructor(private professorService: ProfessorService, private router: Router, private thisRoute: ActivatedRoute) { }

  professor:any;
  public campo;
  id: any;


  buscarCpfProfessor() {
    this.id = this.thisRoute.snapshot.paramMap.get('id');
    this.professorService.professorConsultaDetalhe(this.id).subscribe(

      response => {
        this.professor = response;
       // console.log('PROFESSOR : ' + this.professor.codRegiao);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.buscarCpfProfessor();
  }

}

 */