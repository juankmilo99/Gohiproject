export class Pregunta {
  public preguntaid: number;
  public encuestadimencionid: number;
  public pregunta: string;


  constructor(
    cod: number,
    id: number,
    doc: string,

  ) {
    this.preguntaid=id;
    this.encuestadimencionid = cod;
    this.pregunta = doc;

  }
}
