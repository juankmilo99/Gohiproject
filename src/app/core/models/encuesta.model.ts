export class Encuesta {

  public codigo: number;
  public codigo_usuario: number;
  public nombre: string;
  public descricpcion: string;
  public activo: number;


  constructor(
    cot: number,
    cod: number,
    doc: string,
    des: string,
    act: number,
  ) {
    this.codigo= cot;
    this.codigo_usuario = cod;
    this.nombre = doc;
    this.descricpcion= des;
    this.activo=act;
  }

}
