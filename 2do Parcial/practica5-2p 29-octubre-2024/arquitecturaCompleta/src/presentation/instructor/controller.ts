import { Request, Response } from 'express';
import { CreateInstructorDto, UpdateInstructorDto } from '../../domain/dtos';
import { InstructorRepository } from '../../domain';

export class InstructorController {

  constructor(
    private readonly instructorRepository: InstructorRepository,
  ) { }

  public getInstructores = async (req: Request, res: Response) => {
    const instructores = await this.instructorRepository.getAll();
    return res.json(instructores);
  };

  public getInstructorById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const instructor = await this.instructorRepository.findById(id);
      res.json(instructor);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createInstructor = async (req: Request, res: Response) => {
    const [error, createInstructorDto] = CreateInstructorDto.create(req.body);
    if (error) return res.status(400).json({ error });
    
    const newInstructor = await this.instructorRepository.create(createInstructorDto!);
    res.json(newInstructor);
  };

  public updateInstructor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateInstructorDto] = UpdateInstructorDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedInstructor = await this.instructorRepository.updateById(updateInstructorDto!);
    return res.json(updatedInstructor);
  };

  public deleteInstructor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const instructorDeleted = await this.instructorRepository.deleteById(id);
    res.json(instructorDeleted);
  };
}

