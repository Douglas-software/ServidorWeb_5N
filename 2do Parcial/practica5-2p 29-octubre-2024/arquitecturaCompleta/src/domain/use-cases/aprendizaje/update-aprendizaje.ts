import { UpdateAprendizajeDto } from '../../dtos';
import { AprendizajeEntity } from '../../entities/aprendizaje.entity';
import { AprendizajeRepository } from '../../repositories/aprendizaje.repository';

export interface UpdateAprendizajeUseCase {
  execute(dto: UpdateAprendizajeDto): Promise<AprendizajeEntity>;
}

export class UpdateAprendizaje implements UpdateAprendizajeUseCase {
  
  constructor(
    private readonly repository: AprendizajeRepository,
  ) {}
  
  execute(dto: UpdateAprendizajeDto): Promise<AprendizajeEntity> {
    return this.repository.updateById(dto);
  }
}


