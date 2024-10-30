export class AprendizajeEntity {

  constructor(
    public id: number,
    public idiomaId: number,
    public instructorId: number,
    public fecha: string,
    public hora: string,
    public numeroHoras: number,
    public nivel: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): AprendizajeEntity {
    const { id, idiomaId, instructorId, fecha, hora, numeroHoras, nivel } = object;
    
    if (!id) throw 'Id is required';
    if (!idiomaId) throw 'idiomaId is required';
    if (!instructorId) throw 'instructorId is required';
    if (!fecha) throw 'fecha is required';
    if (!hora) throw 'hora is required';
    if (numeroHoras === undefined) throw 'numeroHoras is required';
    if (!nivel) throw 'nivel is required';

    return new AprendizajeEntity(id, idiomaId, instructorId, fecha, hora, numeroHoras, nivel);
  }
}

