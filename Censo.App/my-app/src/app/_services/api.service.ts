import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  //apiUrl: 'http://localhost:5000/api/'
  baseUrl = environment.apiUrl;

  getToken() {
    const tokenHeader = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return tokenHeader;
  }

  //** API - PROFESSOR IES **//
  apiProfIes() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'v1/dados/geties/', { headers: tokenHeader });
  }

  buscaIes(codigo: string) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/buscaies/' + codigo, { headers: tokenHeader });
  }

  getRegulatorioProfessorIesExcel(_ies: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/buscaiesID/excel/' + _ies, { responseType: 'blob', headers: tokenHeader });
  }

  /** API PROFESSOR CURSO */
  professorCurso(codigo: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/Emec/' + codigo, { headers: tokenHeader });
  }

  campus() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'v1/dados/getCampus/', { headers: tokenHeader });
  }

  getRegulatorioProfessorCurso(codigo: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/Emec/' + codigo, { headers: tokenHeader });
  }

  getRegulatorioProfessorCursoExcel(codigo: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/Emec/Excel/' + codigo, { responseType: 'blob', headers: tokenHeader });
  }

  getRegulatorioProfessorCampusExcel(codigo: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/Emec/ExcelCampus/' + codigo, { responseType: 'blob', headers: tokenHeader });
  }


  /** API PROFESSOR CONSULTA */
  informacoesProfessores(campo: string) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'Professor/Busca/' + campo, { headers: tokenHeader });
  }


  professorConsultaDetalhe(campo: string) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'Professor/BuscaDetalhe/' + campo, { headers: tokenHeader });
  }


  /** API GRÁFICO */
  getProfessores() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'Professor', {headers: tokenHeader});
  }




}
