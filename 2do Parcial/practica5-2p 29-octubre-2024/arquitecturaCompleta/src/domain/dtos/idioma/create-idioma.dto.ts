export class CreateIdiomaDto {

  private constructor(
    public readonly descripcion: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateIdiomaDto?] {

    const { descripcion } = props;

    if (!descripcion) return ['descripcion property is required', undefined];

    return [undefined, new CreateIdiomaDto(descripcion)];
  }
}
