export class CreateAprendizajeDto {

  private constructor(
    public readonly idiomaId: number,
    public readonly instructorId: number,
    public readonly fecha: string,
    public readonly hora: string,
    public readonly numeroHoras: number,
    public readonly nivel: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateAprendizajeDto?] {

    const { idiomaId, instructorId, fecha, hora, numeroHoras, nivel } = props;

    if (!idiomaId) return ['idiomaId property is required', undefined];
    if (!instructorId) return ['instructorId property is required', undefined];
    if (!fecha) return ['fecha property is required', undefined];
    if (!hora) return ['hora property is required', undefined];
    if (!numeroHoras) return ['numeroHoras property is required', undefined];
    if (!nivel) return ['nivel property is required', undefined];

    return [undefined, new CreateAprendizajeDto(idiomaId, instructorId, fecha, hora, numeroHoras, nivel)];
  }
}
