import { ApiService } from 'src/app/_services/api.service';
import { Component, OnInit } from '@angular/core';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-api-grafico-professor',
  templateUrl: './api-grafico-professor.component.html',
  styleUrls: ['./api-grafico-professor.component.css']
})
export class ApiGraficoProfessorComponent implements OnInit {

  professores;
  integral: number;

  constructor(private api: ApiService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Professores por Regime de Trabalho'
    }
  };

  public barChartColors: Color[] = [{  //grafico tabela
    backgroundColor: 'rgba(51, 83 , 255)'
  }];

  public barChartLabels = ['Tempo Integral', 'Tempo Parcial', 'Horista'];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData: any[];

  public radarChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Distribuição de Professores (%)'
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2
      }
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem, data) {
          return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        }
      }
    }
  };

  public radarChartLabels = ['Doutores',
    'Titulados',
    'Regime Tempo Integral',
    'Regime Tempo Integral + Parcial',
    'Especialista'];

  public radarChartData: any[];
  public radarChartType = 'radar';
  public radarChartLegend = false;
  public radarChartColor = [{ backgroundColor: 'rgba(30,184,222,0.4)', borderColor: 'rgba(30,184,222,0.9)' }];

  ngOnInit() {
    this.getProfessores();
  }

  getProfessores() {
    this.api.getProfessores()
      .subscribe(
        response => {
          console.log(this.professores)
          this.professores = response;
        },
        error => {
          console.log(error);
        },
        () => {
          this.barChartData = [{
            data: [this.professores.qtdTempoIntegral,
            this.professores.qtdTempoParcial,
            this.professores.qtdHorista], label: 'Qtd Professores'
          }];

          // this.professores.qtdDoutor / this.professores.qtdProfessores * 100
          this.radarChartData = [{
            label: '% Professores',
            color: 'rgb(34,83,170)',

            data: // data: [45, 25, 20, 10],
            [
            (this.professores.qtdDoutor / this.professores.qtdProfessores * 100).toFixed(2),
            ((this.professores.qtdMestre + this.professores.qtdDoutor) / this.professores.qtdProfessores * 100).toFixed(2),
            (this.professores.qtdTempoIntegral / this.professores.qtdProfessores * 100).toFixed(2),
            (this.professores.qtdRegime / this.professores.qtdProfessores * 100).toFixed(2),
            (this.professores.qtdEspecialista / this.professores.qtdProfessores * 100).toFixed(2)],
            fill: true,
            backgroundColor: 'rgba(51, 124, 255, 0.2)',
            borderColor: 'rgb(51, 124, 255)',
            pointBackgroundColor: 'rgb(51, 124, 255)',
          }
          ];


        });

  }

}



