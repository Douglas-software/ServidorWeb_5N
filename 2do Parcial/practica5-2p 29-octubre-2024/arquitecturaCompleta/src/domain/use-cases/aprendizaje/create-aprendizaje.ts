import { CreateAprendizajeDto } from '../../dtos';
import { AprendizajeEntity } from '../../entities/aprendizaje.entity';
import { AprendizajeRepository } from '../../repositories/aprendizaje.repository';

export interface CreateAprendizajeUseCase {
  execute(dto: CreateAprendizajeDto): Promise<AprendizajeEntity>;
}

export class CreateAprendizaje implements CreateAprendizajeUseCase {
  
  constructor(
    private readonly repository: AprendizajeRepository,
  ) {}
  
  execute(dto: CreateAprendizajeDto): Promise<AprendizajeEntity> {
    return this.repository.create(dto);
  }
}


