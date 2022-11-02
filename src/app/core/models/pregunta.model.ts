export class Pregunta {

  public codigo: number;
  public codigo_encuesta: number;
  public codigo_dimension: number;
  public pregunta: string;

  constructor(
    cod: number,
    id: number,
    cot: number,
    doc: string,
  ) {
    this.codigo = id;
    this.codigo_encuesta = cod;
    this.codigo_dimension=cot;
    this.pregunta = doc;
  }

}
