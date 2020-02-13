import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-professor-consulta-detalhe',
  templateUrl: './api-professor-consulta-detalhe.component.html',
  styleUrls: ['./api-professor-consulta-detalhe.component.css']
})
export class ApiProfessorConsultaDetalheComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private thisRoute: ActivatedRoute) { }

  dadosProfessor:any;
  id: any;

  buscarCpfProfessor() {
    this.id = this.thisRoute.snapshot.paramMap.get('id');
    this.api.professorConsultaDetalhe(this.id).subscribe(
      response => {
        this.dadosProfessor = response;
        //console.log(this.dadosProfessor);
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

