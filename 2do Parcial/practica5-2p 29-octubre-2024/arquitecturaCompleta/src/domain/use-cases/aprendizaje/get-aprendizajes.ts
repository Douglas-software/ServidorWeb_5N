import { AprendizajeRepository } from '../../repositories/aprendizaje.repository';
import { AprendizajeEntity } from '../../entities/aprendizaje.entity';

export interface GetAprendizajesUseCase {
  execute(): Promise<AprendizajeEntity[]>;
}

export class GetAprendizajes implements GetAprendizajesUseCase {
  
  constructor(
    private readonly repository: AprendizajeRepository,
  ) {}
  
  execute(): Promise<AprendizajeEntity[]> {
    return this.repository.getAll();
  }
}


