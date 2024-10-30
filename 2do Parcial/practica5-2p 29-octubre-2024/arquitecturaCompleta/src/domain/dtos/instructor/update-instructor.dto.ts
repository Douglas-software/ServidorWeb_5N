export class UpdateInstructorDto {

  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly fechaNacimiento?: string,
    public readonly experiencia?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.fechaNacimiento) returnObj.fechaNacimiento = this.fechaNacimiento;
    if (this.experiencia !== undefined) returnObj.experiencia = this.experiencia;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateInstructorDto?] {

    const { id, nombre, fechaNacimiento, experiencia } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    // Puedes agregar más validaciones si lo necesitas
    return [undefined, new UpdateInstructorDto(id, nombre, fechaNacimiento, experiencia)];
  }
}
