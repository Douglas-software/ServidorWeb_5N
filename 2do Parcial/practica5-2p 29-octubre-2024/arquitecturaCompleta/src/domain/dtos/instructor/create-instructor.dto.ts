export class CreateInstructorDto {

  private constructor(
    public readonly nombre: string,
    public readonly fechaNacimiento: string,
    public readonly experiencia: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateInstructorDto?] {

    const { nombre, fechaNacimiento, experiencia } = props;

    if (!nombre) return ['nombre property is required', undefined];
    if (!fechaNacimiento) return ['fechaNacimiento property is required', undefined];
    if (experiencia === undefined) return ['experiencia property is required', undefined];

    return [undefined, new CreateInstructorDto(nombre, fechaNacimiento, experiencia)];
  }
}
