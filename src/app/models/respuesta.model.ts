export class Respuesta {
  public respuestaid: number;
  public preguntaid: number;
  public respuesta: number;



  constructor(
    cod: number,
    id: number,
    doc: number,

  ) {
    this.respuestaid=id;
    this.preguntaid= cod;
    this.respuesta= doc;

  }
}
