export class UsuarioRespuesta {

  public usuariorespuestaid: number;
  public respuestaid: number;
  public usuarioid: number;

  constructor(
    cod: number,
    id: number,
    doc: number,
  ) {
    this.usuariorespuestaid = id;
    this.respuestaid = cod;
    this.usuarioid = doc;
  }

}
