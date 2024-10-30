import { Request, Response } from 'express';
import { CreateIdiomaDto, UpdateIdiomaDto } from '../../domain/dtos';
import { IdiomaRepository } from '../../domain';

export class IdiomaController {

  constructor(
    private readonly idiomaRepository: IdiomaRepository,
  ) { }

  public getIdiomas = async (req: Request, res: Response) => {
    const idiomas = await this.idiomaRepository.getAll();
    return res.json(idiomas);
  };

  public getIdiomaById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const idioma = await this.idiomaRepository.findById(id);
      res.json(idioma);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createIdioma = async (req: Request, res: Response) => {
    const [error, createIdiomaDto] = CreateIdiomaDto.create(req.body);
    if (error) return res.status(400).json({ error });
    
    const newIdioma = await this.idiomaRepository.create(createIdiomaDto!);
    res.json(newIdioma);
  };

  public updateIdioma = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateIdiomaDto] = UpdateIdiomaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedIdioma = await this.idiomaRepository.updateById(updateIdiomaDto!);
    return res.json(updatedIdioma);
  };

  public deleteIdioma = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const idiomaDeleted = await this.idiomaRepository.deleteById(id);
    res.json(idiomaDeleted);
  };
}
