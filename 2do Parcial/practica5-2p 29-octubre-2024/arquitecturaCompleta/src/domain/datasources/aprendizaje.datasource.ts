import { CreateAprendizajeDto, UpdateAprendizajeDto } from '../dtos';
import { AprendizajeEntity } from '../entities/aprendizaje.entity';

export abstract class AprendizajeDatasource {

  abstract create(createAprendizajeDto: CreateAprendizajeDto): Promise<AprendizajeEntity>;
  abstract getAll(): Promise<AprendizajeEntity[]>;
  abstract findById(id: number): Promise<AprendizajeEntity>;
  abstract updateById(updateAprendizajeDto: UpdateAprendizajeDto): Promise<AprendizajeEntity>;
  abstract deleteById(id: number): Promise<AprendizajeEntity>;

}
