export class Proceso {

  public codigo: number;
  public codigo_usuario: number;
  public nombre: string;
  public codigo_encuesta: number;
  public descripcion: string;
  public fecha_inicio: string;
  public fecha_fin: string;
  public estado: number;
  public correo: string;

  constructor(
    cod: number,
    dot: number,
    doc: number,
    nom: string,
    ape: number,
    tel: string,
    tol: string,
    nomFot: string,
    fot: string
  ) {
    this.codigo = cod;
    this.codigo_usuario = doc;
    this.nombre = nom;
    this.codigo_encuesta = ape;
    this.descripcion = tel;
    this.fecha_inicio = nomFot;
    this.fecha_fin = fot;
    this.estado = dot;
    this.correo= tol;
  }

}
