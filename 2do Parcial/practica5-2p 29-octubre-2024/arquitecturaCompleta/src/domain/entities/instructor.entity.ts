export class InstructorEntity {

  constructor(
    public id: number,
    public nombre: string,
    public fechaNacimiento: string,
    public experiencia: number,
  ) {}

  public static fromObject(object: { [key: string]: any }): InstructorEntity {
    const { id, nombre, fechaNacimiento, experiencia } = object;

    if (!id) throw 'Id is required';
    if (!nombre) throw 'nombre is required';
    if (!fechaNacimiento) throw 'fechaNacimiento is required';
    if (experiencia === undefined) throw 'experiencia is required';

    return new InstructorEntity(id, nombre, fechaNacimiento, experiencia);
  }
}
