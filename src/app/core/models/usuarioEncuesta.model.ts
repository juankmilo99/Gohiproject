export class UsuarioEncuesta {

  public usuarioEncuestaid: number;
  public encuestadimencionid: number;
  public usuarioid: number;

  constructor(
    id: number,
    cod: number,
    num: number
  ) {
    this.encuestadimencionid = id;
    this.usuarioid = cod;
    this.usuarioEncuestaid = num;
  }

}
