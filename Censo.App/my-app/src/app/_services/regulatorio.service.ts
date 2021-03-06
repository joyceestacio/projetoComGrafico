import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RegulatorioService {

  constructor(private http: HttpClient) { }

  //apiUrl: 'http://localhost:5000/api/'
  baseUrl = environment.apiUrl;
  getToken() {
    const tokenHeader = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return tokenHeader;
  }

  // REGULATÓRIO CORPO DOCENTE 

  getRegulatorioCorpoDocenteExcel() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/BuscaIes/excel', { responseType: 'blob', headers: tokenHeader });
  }

  // REGULATÓRIO PROFESSOR IES

  getRegulatorioProfessorIesExcel(_ies: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/buscaiesID/excel/' + _ies, { responseType: 'blob', headers: tokenHeader });
  }

  getRegulatorioBuscaIes(codigo: string) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/buscaies/' + codigo, { headers: tokenHeader });
  }

  getIes() {  //ies e campus
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'v1/dados/geties/', { headers: tokenHeader });
  }

  // REGULATÓRIO PROFESSOR CURSO

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

  getCampus() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'v1/dados/getCampus/', { headers: tokenHeader });
  }

  // REGULATÓRIO PROFESSOR FORA DE SEDE

  getRegulatorioProfessorForaSedeExcel(_campus: any) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/foradesede/excel/' + _campus, { responseType: 'blob', headers: tokenHeader });
  }

  getResultadoProfessorForaSede(codigo: string) {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/foradesede/' + codigo, { headers: tokenHeader });
  }

  getCampusForaSede() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/Buscacampus', { headers: tokenHeader });
  }

  // REGULATÓRIO GAP CARGA HORÁRIA

  PesquisaProfessores() {
    const tokenHeader = this.getToken();
    return this.http.get(this.baseUrl + 'regulatorio/BuscaProfessor', { headers: tokenHeader });
  }

  /*post */
  postCalculaGapProf(professores: any[]) {
    const tokenHeader = this.getToken();
    return this.http.post(this.baseUrl + 'regulatorio/CalculaGapProf', professores, { headers: tokenHeader });
  }


}
