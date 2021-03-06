import { Component, OnInit } from '@angular/core';
import { OtimizacaoService } from '../_services/otimizacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
//  import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-detalhe-resultado',
  templateUrl: './detalhe-resultado.component.html',
  styleUrls: ['./detalhe-resultado.component.css']
})
export class DetalheResultadoComponent implements OnInit {

  constructor(private otimizacaoService: OtimizacaoService,
              private router: Router,
              private thisRoute: ActivatedRoute) { }

  dados: any;
  dadosJsonAtual: any;
  dadosJsonOtm: any;
  resultadoAtual: any;
  resultadoOtimizado: any;
  fileUrl;
  id: any;

  getDados() {

    this.id = this.thisRoute.snapshot.paramMap.get('id');
    this.otimizacaoService.obterDetalheResultado(this.id).subscribe(

      response => {
          this.dados = response;
          this.resultadoAtual = this.dados.resultadoAtual;
          this.resultadoOtimizado = this.dados.resultado;
          this.dadosJsonAtual = JSON.parse(this.resultadoAtual.resumo);
          this.dadosJsonOtm = JSON.parse(this.resultadoOtimizado.resumo);

      },
      error => {
        console.log(error);
      }
    );

  }

  exportarResultadoExcel(){ 
    let thefile;
    let blob;
    
    this.otimizacaoService.exportarResultadoExcel(this.id).subscribe(response => { 
      blob = new Blob([response], { type: 'application/octet-stream'});
      saveAs(blob, `ResultadoCenso_${this.id}.xlsx`);
    }
    );
    
        // window.open(window.URL.createObjectURL(thefile));
    };

  ngOnInit() {

    this.getDados();

  }



}
