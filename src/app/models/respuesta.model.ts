export class Respuesta {
  public respuestaid: number;
  public preguntaid: number;
  public respuesta: number;
  public usuarioid: number;



  constructor(
    cod: number,
    id: number,
    doc: number,
    usu: number,


  ) {
    this.respuestaid=id;
    this.preguntaid= cod;
    this.respuesta= doc;
    this.usuarioid=usu;

  }
}
