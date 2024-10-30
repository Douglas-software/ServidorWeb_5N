import { CreateAprendizajeDto, 
  AprendizajeDatasource, 
  AprendizajeEntity, 
  AprendizajeRepository, 
  UpdateAprendizajeDto } from '../../domain';

export class AprendizajeRepositoryImpl implements AprendizajeRepository {

constructor(
private readonly datasource: AprendizajeDatasource,
) { }

create(createAprendizajeDto: CreateAprendizajeDto): Promise<AprendizajeEntity> {
return this.datasource.create(createAprendizajeDto);
}

getAll(): Promise<AprendizajeEntity[]> {
return this.datasource.getAll();
}

findById(id: number): Promise<AprendizajeEntity> {
return this.datasource.findById(id);
}

updateById(updateAprendizajeDto: UpdateAprendizajeDto): Promise<AprendizajeEntity> {
return this.datasource.updateById(updateAprendizajeDto);
}

deleteById(id: number): Promise<AprendizajeEntity> {
return this.datasource.deleteById(id);
}
}
