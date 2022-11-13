export class Respuesta {

  public respuestaid: number;
  public codigo_pregunta: number;
  public codigo_usuario_proceso: number;
  public codigo_opcion: number;

  constructor(
    cod: number,
    id: number,
    doc: number,
    usu: number,
  ) {
    this.respuestaid = id;
    this.codigo_pregunta = cod;
    this.codigo_usuario_proceso = doc;
    this.codigo_opcion = usu;
  }

}
