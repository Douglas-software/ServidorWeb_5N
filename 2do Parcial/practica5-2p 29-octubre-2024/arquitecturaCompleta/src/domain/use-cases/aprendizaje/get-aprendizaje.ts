import { AprendizajeEntity } from '../../entities/aprendizaje.entity';
import { AprendizajeRepository } from '../../repositories/aprendizaje.repository';

export interface GetAprendizajeUseCase {
  execute(id: number): Promise<AprendizajeEntity>;
}

export class GetAprendizaje implements GetAprendizajeUseCase {
  
  constructor(
    private readonly repository: AprendizajeRepository,
  ) {}
  
  execute(id: number): Promise<AprendizajeEntity> {
    return this.repository.findById(id);
  }
}


