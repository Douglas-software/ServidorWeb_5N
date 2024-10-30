import { CreateInstructorDto, 
  InstructorDatasource, 
  InstructorEntity, 
  InstructorRepository, 
  UpdateInstructorDto } from '../../domain';

export class InstructorRepositoryImpl implements InstructorRepository {

constructor(
private readonly datasource: InstructorDatasource,
) { }

create(createInstructorDto: CreateInstructorDto): Promise<InstructorEntity> {
return this.datasource.create(createInstructorDto);
}

getAll(): Promise<InstructorEntity[]> {
return this.datasource.getAll();
}

findById(id: number): Promise<InstructorEntity> {
return this.datasource.findById(id);
}

updateById(updateInstructorDto: UpdateInstructorDto): Promise<InstructorEntity> {
return this.datasource.updateById(updateInstructorDto);
}

deleteById(id: number): Promise<InstructorEntity> {
return this.datasource.deleteById(id);
}
}

