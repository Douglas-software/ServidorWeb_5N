import { CreateInstructorDto, UpdateInstructorDto } from '../dtos';
import { InstructorEntity } from '../entities/instructor.entity';

export abstract class InstructorDatasource {

  abstract create(createInstructorDto: CreateInstructorDto): Promise<InstructorEntity>;
  abstract getAll(): Promise<InstructorEntity[]>;
  abstract findById(id: number): Promise<InstructorEntity>;
  abstract updateById(updateInstructorDto: UpdateInstructorDto): Promise<InstructorEntity>;
  abstract deleteById(id: number): Promise<InstructorEntity>;

}
