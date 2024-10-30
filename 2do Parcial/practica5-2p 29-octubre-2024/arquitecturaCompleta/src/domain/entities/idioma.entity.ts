export class IdiomaEntity {

  constructor(
    public id: number,
    public descripcion: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): IdiomaEntity {
    const { id, descripcion } = object;
    
    if (!id) throw 'Id is required';
    if (!descripcion) throw 'descripcion is required';

    return new IdiomaEntity(id, descripcion);
  }
}
