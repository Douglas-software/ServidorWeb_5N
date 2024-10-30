import { AprendizajeEntity } from '../../entities/aprendizaje.entity';
import { AprendizajeRepository } from '../../repositories/aprendizaje.repository';

export interface DeleteAprendizajeUseCase {
  execute(id: number): Promise<AprendizajeEntity>;
}

export class DeleteAprendizaje implements DeleteAprendizajeUseCase {
  
  constructor(
    private readonly repository: AprendizajeRepository,
  ) {}
  
  execute(id: number): Promise<AprendizajeEntity> {
    return this.repository.deleteById(id);
  }
}


