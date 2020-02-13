import { Component, OnInit } from '@angular/core';
import { ApiConsultaDadosService } from '../_services/api-consultaDados.service';
import { single } from '../MOCK/dados';
import { informacoesProfessor } from "../MOCK/dadosProfessor";

@Component({
  selector: 'app-api-consultaDados',
  templateUrl: './api-consultaDados.component.html',
  styleUrls: ['./api-consultaDados.component.css']
})


export class ApiConsultaDadosComponent implements OnInit {

  constructor(private apiConsultaDados: ApiConsultaDadosService) {
    Object.assign(this, { single, informacoesProfessor })
  }

  /*mock dados*/
  single: any[];
  multi: any[];

  /** mock informações professor */
  informacoesProfessor: any[]

  /** variaveis gerais*/
  doutor: any;
  dados: any;
  dadosGrafico: any[];

  /** ----------GRAFICO-------------- */
  //multi: any[];
  view: any[] = [500, 300];
  view2: any[] = [450];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Titulação';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Titulação de Profesores';

  // options grafico redondo
  showLabels: boolean = true;
  minWidth: number = 150;

  colorScheme = {
    domain: ['#00FFFF', '#00BFFF', '#1E90FF', '#4169E1']
  };

  /** ----------GRAFICO-------------- */

  ngOnInit() {
    this.informacoesTitulacao();
    //this.graficoTitulacao() ;
  }


  informacoesTitulacao() {
    this.apiConsultaDados.quantidadeTitulacao().subscribe(
      response => {
        this.dados = response;
        //this.doutor = response.qdtDoutor;
        console.log(this.dados);
        this.getDadosGrafico();
      },
      error => {
        console.log(error);
      });
  }




  getDadosGrafico(): any {

   // console.log(this.dados)

    var novaLista = new Set<SingleData>(); // criei um novo objeto em set chamando a classe que criei SingleData
    var value : SingleData; // value que passo é o SingleData que criei

    value = new SingleData() // novo objeto
    
    value.name = "Qtd Doutor" // setei o valor na "mão"
    value.value = this.dados.qtdDoutor; // chamo o value da api
    novaLista.add(value)

    value = new SingleData() // novo objeto

    value.name = "Qtd Mestre"
    value.value = this.dados.qtdMestre;
    novaLista.add(value)

    value = new SingleData() // novo objeto

    value.name = "Qtd Especialista"
    value.value = this.dados.qtdEspecialista;
    novaLista.add(value)
   
    this.dadosGrafico =  [...novaLista] // covertei no array e atribui na variavel dadosGrafico que criei


  }



}

class SingleData  {  //criei uma classe 
  name: String;
  value: Number;
}

