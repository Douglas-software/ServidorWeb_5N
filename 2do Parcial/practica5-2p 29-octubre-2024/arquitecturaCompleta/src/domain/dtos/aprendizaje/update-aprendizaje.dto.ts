export class UpdateAprendizajeDto {

  private constructor(
    public readonly id: number,
    public readonly idiomaId?: number,
    public readonly instructorId?: number,
    public readonly fecha?: string,
    public readonly hora?: string,
    public readonly numeroHoras?: number,
    public readonly nivel?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.idiomaId) returnObj.idiomaId = this.idiomaId;
    if (this.instructorId) returnObj.instructorId = this.instructorId;
    if (this.fecha) returnObj.fecha = this.fecha;
    if (this.hora) returnObj.hora = this.hora;
    if (this.numeroHoras) returnObj.numeroHoras = this.numeroHoras;
    if (this.nivel) returnObj.nivel = this.nivel;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateAprendizajeDto?] {

    const { id, idiomaId, instructorId, fecha, hora, numeroHoras, nivel } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    return [undefined, new UpdateAprendizajeDto(id, idiomaId, instructorId, fecha, hora, numeroHoras, nivel)];
  }
}
