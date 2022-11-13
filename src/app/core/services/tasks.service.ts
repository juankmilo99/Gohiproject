import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = environment.urlServer;
  constructor(private http: HttpClient) { }

  getEncuestas() {
    return this.http.get<any>(this.URL + '/api/public/encuestas');
  }
  crearEncuesta(encuesta: any): any {
    let json = JSON.stringify(encuesta);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/encuestas/crear', json, { headers: Headers });
  }

  deleteEncuestaDimencion(id: any) {
    let endPoints = "/api/public/encuestaDimencion/" + id;
    return this.http.delete<any>(this.URL + endPoints);
  }

  optenerEncuestaUuid(id: any) {
    let endPoints = "/api/public/encuestas/uuid/" + id;
    return this.http.get<any>(this.URL + endPoints);
  }

  optenerPreguntaDimension(encuesta: any, id: any): any {
    let json = JSON.stringify(encuesta);
    let endPoints = "/api/public/encuestas/info/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + endPoints, json, { headers: Headers });
  }

  optenerPreguntaDimensionUuid(encuesta: any, id: any): any {
    let json = JSON.stringify(encuesta);
    let endPoints = "/api/public/encuestas/uuid/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + endPoints, json, { headers: Headers });
  }

  actualizarEstadoEncuesta(encuesta: any, id: any): any {
    let json = JSON.stringify(encuesta);
    let endPoints = "/api/public/encuestas/actualizar/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.URL + endPoints, json, { headers: Headers });
  }
  //*********************************************************************************************************************
  getDimensiones() {
    return this.http.get<any>(this.URL + '/api/public/dimensiones');
  }
  //*********************************************************************************************************************
  getProcesos() {
    return this.http.get<any>(this.URL + '/api/public/procesos');
  }
  crearProcesos(proceso: any): any {
    let json = JSON.stringify(proceso);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/procesos/crear', json, { headers: Headers });
  }

  crearCorreos(correo: any, id: any): any {
    let json = JSON.stringify(correo);
    let endPoints = "/api/public/procesos/correos/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + endPoints, json, { headers: Headers });
  }

  //*********************************************************************************************************************

  getPregunta() {
    return this.http.get<any>(this.URL + '/api/public/pregunta');
  }

  crearPregunta(pregunta: any): any {
    let json = JSON.stringify(pregunta);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/pregunta/crear', json, { headers: Headers });
  }

  deletePregunta(id: any) {
    let endPoints = "/api/public/pregunta/" + id;
    return this.http.delete<any>(this.URL + endPoints);
  }

  updatePregunta(pregunta: any, id: any): any {
    let json = JSON.stringify(pregunta);
    let endPoints = "/api/public/pregunta/actualizar/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.URL + endPoints, json, { headers: Headers });
  }

  //*********************************************************************************************************************

  getPrivateTasks() {
    return this.http.get<any>(this.URL + '/private-tasks');
  }

  //***********************************************************************************************************************
  getRespuesta() {
    return this.http.get<any>(this.URL + '/api/public/respuesta');
  }
  getGrafica() {
    return this.http.get<any>(this.URL + '/api/public/respuesta/grafica');
  }
  getValidarRespuesta() {
    return this.http.get<any>(this.URL + '/api/public/respuesta/validar');
  }

  crearRespuesta(respuesta: any): any {
    let json = JSON.stringify(respuesta);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/respuesta/crear', json, { headers: Headers });
  }

  deleteRespuesta(id: any) {
    let endPoints = "/api/public/respuesta/" + id;
    return this.http.delete<any>(this.URL + endPoints);
  }

  updateRespuesta(respuesta: any, id: any): any {
    let json = JSON.stringify(respuesta);
    let endPoints = "/api/public/respuesta/actualizar/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.URL + endPoints, json, { headers: Headers });
  }

  //*********************************************************************************************************************

  getUsuarioRespuesta() {
    return this.http.get<any>(this.URL + '/api/public/usuariorespuesta');
  }

  crearUsuarioRespuesta(respuesta: any): any {
    let json = JSON.stringify(respuesta);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/usuariorespuesta/crear', json, { headers: Headers });
  }

  deleteUsuarioRespuesta(id: any) {
    let endPoints = "/api/public/usuariorespuesta/" + id;
    return this.http.delete<any>(this.URL + endPoints);
  }

  updateUsuarioRespuesta(respuesta: any, id: any): any {
    let json = JSON.stringify(respuesta);
    let endPoints = "/api/public/usuariorespuesta/actualizar/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.URL + endPoints, json, { headers: Headers });
  }

  //*********************************************************************************************************************

  getUsuarioEncuesta() {
    return this.http.get<any>(this.URL + '/api/public/usuarioEncuesta');
  }

  crearUsuarioEncuesta(respuesta: any): any {
    let json = JSON.stringify(respuesta);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/usuarioEncuesta/crear', json, { headers: Headers });
  }

  deleteUsuarioEncuesta(id: any, cod: any) {
    let endPoints = "/api/public/usuarioEncuesta/" + id + "," + cod;
    return this.http.delete<any>(this.URL + endPoints);
  }
  getEncuestaPregunta(id: any) {
    let endPoints = "/api/public/usuarioEncuesta/optenerPregunta/" + id;
    return this.http.get<any>(this.URL + endPoints);
  }

  updateUsuarioEncuesta(respuesta: any, id: any): any {
    let json = JSON.stringify(respuesta);
    let endPoints = "/api/public/usuarioEncuesta/actualizar/" + id;
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.URL + endPoints, json, { headers: Headers });
  }



  //*********************************************************************************************************************

  getUsuario() {
    return this.http.get<any>(this.URL + '/api/public/usuario');
  }



}
