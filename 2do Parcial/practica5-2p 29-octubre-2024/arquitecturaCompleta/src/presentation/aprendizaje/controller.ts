import { Request, Response } from 'express';
import { CreateAprendizajeDto, UpdateAprendizajeDto } from '../../domain/dtos';
import { AprendizajeRepository } from '../../domain';

export class AprendizajeController {

  constructor(
    private readonly aprendizajeRepository: AprendizajeRepository,
  ) { }

  public getAprendizajes = async (req: Request, res: Response) => {
    const aprendizajes = await this.aprendizajeRepository.getAll();
    return res.json(aprendizajes);
  };

  public getAprendizajeById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const aprendizaje = await this.aprendizajeRepository.findById(id);
      res.json(aprendizaje);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createAprendizaje = async (req: Request, res: Response) => {
    const [error, createAprendizajeDto] = CreateAprendizajeDto.create(req.body);
    if (error) return res.status(400).json({ error });
    
    const newAprendizaje = await this.aprendizajeRepository.create(createAprendizajeDto!);
    res.json(newAprendizaje);
  };

  public updateAprendizaje = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAprendizajeDto] = UpdateAprendizajeDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedAprendizaje = await this.aprendizajeRepository.updateById(updateAprendizajeDto!);
    return res.json(updatedAprendizaje);
  };

  public deleteAprendizaje = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const aprendizajeDeleted = await this.aprendizajeRepository.deleteById(id);
    res.json(aprendizajeDeleted);
  };
}
