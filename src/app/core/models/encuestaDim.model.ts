export class EncuestaDimencion {

  public encuestadimencionid: number;
  public nombredimencion: string;

  constructor(
    cod: number,
    doc: string,
  ) {
    this.encuestadimencionid = cod;
    this.nombredimencion = doc;
  }

}
